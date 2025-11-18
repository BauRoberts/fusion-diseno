"use client";

import { useState, useEffect } from "react";
import OptimizedImage from "./optimized-image";

interface ProductGalleryProps {
  images: string[];
  productName: string;
  imageAspects?: ("horizontal" | "square" | "vertical")[];
  onImageClick?: (index: number) => void;
}

// Mapeo de aspect ratios
const aspectRatioMap = {
  horizontal: "aspect-[16/10]",
  square: "aspect-square",
  vertical: "aspect-[3/4]"
};

export default function ProductGallery({ images, productName, imageAspects, onImageClick }: ProductGalleryProps) {
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Agrupar imágenes en slides
  // Si hay horizontales consecutivas o múltiples horizontales, agruparlas
  const slides: { images: number[]; type: "horizontal-pair" | "single" }[] = [];
  const horizontalIndices: number[] = [];

  images.forEach((_, index) => {
    if (imageAspects?.[index] === "horizontal") {
      horizontalIndices.push(index);
    }
  });

  // Si hay 2 o más horizontales, agruparlas en un slide
  if (horizontalIndices.length >= 2) {
    slides.push({
      images: horizontalIndices,
      type: "horizontal-pair"
    });
  }

  // Agregar las otras imágenes (no horizontales) como slides individuales
  images.forEach((_, index) => {
    if (!horizontalIndices.includes(index)) {
      slides.push({
        images: [index],
        type: "single"
      });
    }
  });

  // Check scroll position for mobile carousel
  useEffect(() => {
    const carousel = document.getElementById('product-carousel-mobile');
    if (!carousel) return;

    const checkScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = carousel;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

      // Update selected slide based on scroll position
      const slideIndex = Math.round(scrollLeft / clientWidth);
      setSelectedSlide(slideIndex);
    };

    carousel.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check

    return () => carousel.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToSlide = (index: number) => {
    const carousel = document.getElementById('product-carousel-mobile');
    if (carousel) {
      const scrollAmount = carousel.clientWidth * index;
      carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mobile Carousel: Swipeable with grouped horizontal images */}
      <div className="md:hidden relative">
        {/* Carousel Container */}
        <div
          id="product-carousel-mobile"
          className="overflow-x-auto snap-x snap-mandatory scrollbar-hide flex gap-4"
        >
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className="snap-center flex-shrink-0 w-full"
            >
              {slide.type === "horizontal-pair" ? (
                // Mostrar dos imágenes horizontales apiladas
                // Cada una con aspect-[2/1] para que juntas ocupen la altura de una cuadrada
                <div className="space-y-2">
                  {slide.images.map((imageIndex) => (
                    <div
                      key={imageIndex}
                      className="relative w-full aspect-[2/1] overflow-hidden rounded-lg cursor-pointer"
                      onClick={() => onImageClick?.(imageIndex)}
                    >
                      <OptimizedImage
                        src={images[imageIndex]}
                        alt={`${productName} - Vista ${imageIndex + 1}`}
                        fill
                        className="object-cover"
                        priority={imageIndex === 0}
                        sizes="100vw"
                        quality="auto:good"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                // Mostrar imagen individual
                <div
                  className={`relative w-full ${
                    imageAspects?.[slide.images[0]] === "square"
                      ? "aspect-square"
                      : imageAspects?.[slide.images[0]] === "vertical"
                      ? "aspect-[3/4]"
                      : "aspect-[16/10]"
                  } overflow-hidden rounded-lg cursor-pointer`}
                  onClick={() => onImageClick?.(slide.images[0])}
                >
                  <OptimizedImage
                    src={images[slide.images[0]]}
                    alt={`${productName} - Vista ${slide.images[0] + 1}`}
                    fill
                    className="object-cover"
                    priority={slide.images[0] === 0}
                    sizes="100vw"
                    quality="auto:good"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Flechas de navegación */}
        {canScrollLeft && (
          <button
            onClick={() => scrollToSlide(selectedSlide - 1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-white hover:text-white/70 transition-colors drop-shadow-lg"
            aria-label="Imagen anterior"
          >
            <svg
              className="w-8 h-8"
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
            onClick={() => scrollToSlide(selectedSlide + 1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-white hover:text-white/70 transition-colors drop-shadow-lg"
            aria-label="Siguiente imagen"
          >
            <svg
              className="w-8 h-8"
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
    </>
  );
}
