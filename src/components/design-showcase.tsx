"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import OptimizedImage from "./optimized-image";
import { getAllProducts } from "@/data/products";

export default function DesignShowcase() {
  const allProducts = getAllProducts();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Reset scroll to start
    carousel.scrollLeft = 0;

    const checkScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = carousel;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    };

    carousel.addEventListener('scroll', checkScroll);
    checkScroll();

    return () => carousel.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollAmount = carousel.clientWidth * 0.8;
    carousel.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section className="bg-white py-20">
      <div className="unroot-container">
        <h2 className="text-center font-sans text-3xl md:text-4xl mb-12">
          Amamos lo que usamos
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative md:max-w-7xl md:mx-auto md:px-8">
        {/* Carousel */}
        <div
          ref={carouselRef}
          className="overflow-x-auto scrollbar-hide flex gap-6 md:gap-8 snap-x snap-mandatory scroll-smooth"
          style={
            isMobile
              ? {
                  paddingLeft: 'calc(50vw - 42.5vw)',
                  paddingRight: 'calc(50vw - 42.5vw)'
                }
              : {}
          }
        >
            {allProducts.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-[85vw] sm:w-[45vw] md:w-[calc(33.333%-1.5rem)] snap-center"
              >
                {/* Image Card */}
                <div className="relative aspect-square bg-neutral-100 rounded-lg overflow-hidden mb-4">
                  <OptimizedImage
                    src={product.thumbnail}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 85vw, (max-width: 768px) 45vw, 33vw"
                  />
                </div>

                {/* Product Info */}
                <div className="space-y-3">
                  <h3 className="font-sans text-lg font-medium text-black">
                    {product.name}
                  </h3>
                  <Link
                    href={`/lo-que-usamos/${product.slug}`}
                    className="inline-flex items-center gap-2 text-sm text-black hover:text-black/70 transition-colors group"
                  >
                    Ver más
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="hidden md:flex absolute left-0 top-[40%] -translate-y-1/2 -translate-x-4 z-10 text-black hover:text-black/70 transition-colors bg-white rounded-full p-2 shadow-lg"
              aria-label="Anterior"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
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
              onClick={() => scroll('right')}
              className="hidden md:flex absolute right-0 top-[40%] -translate-y-1/2 translate-x-4 z-10 text-black hover:text-black/70 transition-colors bg-white rounded-full p-2 shadow-lg"
              aria-label="Siguiente"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
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

      {/* Ver todos button */}
      <div className="unroot-container">
        <div className="flex justify-center mt-12">
          <Link
            href="/lo-que-usamos"
            className="bg-black text-white hover:bg-black/90 px-8 py-3 rounded-full text-sm font-medium transition-colors"
          >
            Ver todos los productos
          </Link>
        </div>
      </div>
    </section>
  );
}
