"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Project {
  id: number;
  name: string;
  images: string[];
  tags: string[];
  link: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    name: "Casa M930",
    images: [
      "https://images.squarespace-cdn.com/content/v1/62da949aefe9a643bf3c3de4/733cfe1d-44ba-4219-aa46-74c38210e7b1/Himera+Estudio_Casa+M930.png?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/62da949aefe9a643bf3c3de4/3ebd9669-3f7d-42a2-9eb6-24a9a4ee0074/Himera+Estudio_Casa+M930_Dormitorio+A.png?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/62da949aefe9a643bf3c3de4/1710501804851-VPBWD3PM22WPWUNRHQVM/Himera+Estudio_Casa+M930_Ba%C3%B1o+A.png?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/62da949aefe9a643bf3c3de4/1710501806096-149FY7RSERU2LEYHXSY1/Himera+Estudio_Casa+M930_Ba%C3%B1o+B.png?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/62da949aefe9a643bf3c3de4/ab54ae0d-a81f-4187-b1fe-bebb99206671/Himera+Estudio_Casa+M930_Dormitorio+B.png?format=1000w",
    ],
    tags: ["INTERIOR DESIGN", "RESIDENTIAL", "RENOVATION"],
    link: "https://himeraestudio.com/portfolio",
  },
  {
    id: 2,
    name: "Casa GV22",
    images: [
      "https://images.squarespace-cdn.com/content/v1/62da949aefe9a643bf3c3de4/c8588125-ce4c-4686-9deb-6bd246f0b81f/Himera+Estudio+Casa+GV22+Reforma+Integral+Vigo?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/62da949aefe9a643bf3c3de4/1664989484956-0ZMNM4B7CM14ODU12E6S/Himera+Estudio_Casa+GV22_Comedor.png?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/62da949aefe9a643bf3c3de4/1664989485380-4AGO6TMJ345QY5CXAUXO/Himera+Estudio_Casa+GV22_Despacho.png?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/62da949aefe9a643bf3c3de4/1664989604570-CZSOF95F2E19S35D7NL4/Himera+Estudio_Casa+GV22_Detalle+caj%C3%B3n.png?format=1000w",
    ],
    tags: ["INTERIOR DESIGN", "RESIDENTIAL", "RENOVATION"],
    link: "https://himeraestudio.com/portfolio",
  },
  {
    id: 3,
    name: "Casa V268",
    images: [
      "https://images.squarespace-cdn.com/content/v1/62da949aefe9a643bf3c3de4/c8bc557e-2525-4699-bb81-4b3dfc760d3c/Himera+Estudio+Casa+V268+Interiorismo+Decoracion+Vigo?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/62da949aefe9a643bf3c3de4/d47effe3-7757-4945-8f1d-f4a584dfe8b7/Himera+Estudio+Casa+V268+Entrada+%28Reforma+integral+en+Vigo%29?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/62da949aefe9a643bf3c3de4/1664980847040-IQ1SV5UY1CAYE8T956GG/Himera+Estudio_Casa+V268_Comedor.png?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/62da949aefe9a643bf3c3de4/1710498323449-LQIBC1GMD4TAO9DGTNMP/Himera+Estudio_Casa+V268_Salon.png?format=1000w",
    ],
    tags: ["INTERIORISMO", "MOBILIARIO", "RENOVACION"],
    link: "https://treeconcept.webflow.io/",
  },
  {
    id: 4,
    name: "Casa PA2",
    images: [
      "https://images.squarespace-cdn.com/content/v1/62da949aefe9a643bf3c3de4/12a29080-650f-4ace-862b-218609aff251/Himera+Estudio+Casa+PA2+Interiorismo+Valencia?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/62da949aefe9a643bf3c3de4/1710498653605-DM6KO9E3XDDRAOYK6XYG/Himera+Estudio_Casa+PA2_Comedor+B.png?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/62da949aefe9a643bf3c3de4/e70d3963-2f68-4493-86a4-ae3c5deff491/Himera+Estudio_Casa+PA2_Cocina.png?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/62da949aefe9a643bf3c3de4/1710498783222-WLBVTL7WRT5FAZZCRNO8/Himera+Estudio_Casa+PA2_Puerta.png?format=1000w",
    ],
    tags: ["INTERIORISMO", "DESIGN", "DESARROLLO"],
    link: "https://treeconcept.webflow.io/",
  },
];

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
    const project = featuredProjects.find((p) => p.id === projectId);
    if (!project) return;

    const interval = setInterval(() => {
      setActiveImageIndexes((prev) => {
        const currentIndex = prev[projectId] || 0;
        const nextIndex = (currentIndex + 1) % project.images.length;
        return { ...prev, [projectId]: nextIndex };
      });
    }, 1000); // Change image every 1.5 seconds

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
          {featuredProjects.map((project) => (
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
                  <h3 className="text-3xl md:text-5xl font-serif mb-4 md:mb-8">
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
                    href={project.link}
                    target="_blank"
                    className="inline-block mt-6 text-white hover:underline"
                  >
                    see project →
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
