"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageLightboxProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
  projectName: string;
}

export default function ImageLightbox({
  images,
  initialIndex,
  isOpen,
  onClose,
  projectName,
}: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Botón cerrar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 text-white hover:text-white/70 transition-colors p-2"
        aria-label="Cerrar"
      >
        <X size={32} />
      </button>

      {/* Contador de imágenes */}
      <div className="absolute top-4 left-4 z-50 text-white font-mono text-sm">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Imagen actual */}
      <div
        className="relative w-full h-full flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full max-w-7xl max-h-screen">
          <Image
            src={images[currentIndex]}
            alt={`${projectName} - Imagen ${currentIndex + 1}`}
            fill
            className="object-contain"
            quality={100}
            priority
          />
        </div>
      </div>

      {/* Botón anterior */}
      {currentIndex > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrevious();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:text-white/70 transition-colors p-2"
          aria-label="Anterior"
        >
          <ChevronLeft size={48} />
        </button>
      )}

      {/* Botón siguiente */}
      {currentIndex < images.length - 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:text-white/70 transition-colors p-2"
          aria-label="Siguiente"
        >
          <ChevronRight size={48} />
        </button>
      )}
    </div>
  );
}
