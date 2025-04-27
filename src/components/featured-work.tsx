"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { projects } from "../data/project";

export default function FeaturedWork() {
  // Track which image is currently shown for each project
  const [activeImageIndexes, setActiveImageIndexes] = useState<
    Record<number, number>
  >({});
  // Track intervals for each project
  const [intervals, setIntervals] = useState<Record<number, NodeJS.Timeout>>(
    {}
  );

  // Cleanup intervals on unmount
  useEffect(() => {
    return () => {
      Object.values(intervals).forEach((interval) => clearInterval(interval));
    };
  }, [intervals]);

  // Handle mouse enter to change image
  const handleMouseEnter = (projectId: number) => {
    // Set interval to cycle through images
    const project = projects.find((p) => p.id === projectId);
    if (!project) return;

    const interval = setInterval(() => {
      setActiveImageIndexes((prev) => {
        const currentIndex = prev[projectId] || 0;
        const nextIndex = (currentIndex + 1) % project.images.length;
        return { ...prev, [projectId]: nextIndex };
      });
    }, 1000); // Change image every 1 second

    // Store interval ID to clear later
    setIntervals((prev) => ({ ...prev, [projectId]: interval }));
  };

  // Handle mouse leave to stop changing images
  const handleMouseLeave = (projectId: number) => {
    // Clear the interval
    if (intervals[projectId]) {
      clearInterval(intervals[projectId]);
      setIntervals((prev) => {
        const newIntervals = { ...prev };
        delete newIntervals[projectId];
        return newIntervals;
      });
    }

    // Reset to first image
    setActiveImageIndexes((prev) => ({ ...prev, [projectId]: 0 }));
  };

  return (
    <section id="featured-work" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="space-y-8">
          {projects.slice(0, 4).map((project) => (
            <div
              key={project.id}
              className="flex flex-col md:flex-row w-full overflow-hidden rounded-lg"
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={() => handleMouseLeave(project.id)}
            >
              {/* Left side: black background with image */}
              <div className="w-full md:w-3/5 bg-black h-96 md:h-[600px] lg:h-[680px] relative overflow-hidden">
                {project.images.map((imageUrl, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      (activeImageIndexes[project.id] || 0) === idx
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    <Image
                      src={imageUrl}
                      alt={`${project.name} - Image ${idx + 1}`}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                ))}
              </div>

              {/* Right side: custom color background with project info */}
              <div className="w-full md:w-2/5 bg-[#B0AE9F] text-white p-8 md:p-12 h-96 md:h-[600px] lg:h-[680px] flex flex-col justify-center">
                <div className="max-w-md">
                  <h3 className="text-3xl md:text-5xl font-sans mb-4 md:mb-8">
                    {project.name}
                  </h3>

                  <div className="flex flex-wrap gap-3 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-white/80 text-sm bg-white/10 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/proyecto/${project.slug}`}
                    className="inline-block mt-6 text-white hover:underline"
                  >
                    ver proyecto →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}