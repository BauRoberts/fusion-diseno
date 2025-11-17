"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { projects } from "../data/project";
import OptimizedImage from "./optimized-image";

export default function FeaturedWork() {
  // Track which image is currently shown for each project
  const [activeImageIndexes, setActiveImageIndexes] = useState<
    Record<number, number>
  >({});
  // Track intervals for each project
  const [intervals, setIntervals] = useState<Record<number, NodeJS.Timeout>>(
    {}
  );
  // Track carousel scroll state
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Cleanup intervals on unmount
  useEffect(() => {
    return () => {
      Object.values(intervals).forEach((interval) => clearInterval(interval));
    };
  }, [intervals]);

  // Check scroll position for mobile carousel
  useEffect(() => {
    const carousel = document.getElementById('home-carousel');
    if (!carousel) return;

    const checkScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = carousel;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    };

    carousel.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check

    return () => carousel.removeEventListener('scroll', checkScroll);
  }, []);

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
    <section id="featured-work" className="bg-white pb-8 md:pb-0">
      {/* Título de la sección */}
      <div className="max-w-7xl mx-auto mb-8 md:mb-12 md:px-8" style={{ paddingLeft: 'calc(50vw - 42.5vw)', paddingRight: 'calc(50vw - 42.5vw)' }}>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans extrabold text-black">
          nuestros proyectos
        </h2>
      </div>

      {/* Mobile: Horizontal Scroll con flechas */}
      <div className="md:hidden relative">
        <div
          id="home-carousel"
          className="flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-hide"
          style={{ paddingLeft: 'calc(50vw - 42.5vw)', paddingRight: 'calc(50vw - 42.5vw)' }}
        >
          {projects.slice(0, 4).map((project) => (
            <Link
              key={project.id}
              href={`/proyecto/${project.slug}`}
              className="flex-shrink-0 w-[85vw] snap-center"
            >
              <div className="relative h-[70vh] rounded-lg overflow-hidden">
                {/* Image Background */}
                <div className="absolute inset-0">
                  <OptimizedImage
                    src={project.images[0]}
                    alt={project.name}
                    fill
                    className="object-cover"
                    sizes="85vw"
                    quality="auto:good"
                  />
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                </div>

                {/* Project Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-3xl font-sans mb-3">
                    {project.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-white/90 text-xs bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-white/90 text-sm">
                    ver proyecto →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Flechas de navegación */}
        {canScrollLeft && (
          <button
            onClick={() => {
              const carousel = document.getElementById('home-carousel');
              if (carousel) {
                const cardWidth = carousel.offsetWidth * 0.85 + 16;
                carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
              }
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-white hover:text-white/70 transition-colors"
            aria-label="Proyecto anterior"
          >
            <svg
              className="w-8 h-8 drop-shadow-lg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        {canScrollRight && (
          <button
            onClick={() => {
              const carousel = document.getElementById('home-carousel');
              if (carousel) {
                const cardWidth = carousel.offsetWidth * 0.85 + 16;
                carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
              }
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-white hover:text-white/70 transition-colors"
            aria-label="Siguiente proyecto"
          >
            <svg
              className="w-8 h-8 drop-shadow-lg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Desktop: Original Layout */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 md:px-8">
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
                    <OptimizedImage
                      src={imageUrl}
                      alt={`${project.name} - Image ${idx + 1}`}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 60vw"
                      priority={idx === 0}
                      quality="auto:good"
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