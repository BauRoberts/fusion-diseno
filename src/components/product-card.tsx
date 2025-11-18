"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import OptimizedImage from "./optimized-image";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [interval, setIntervalState] = useState<NodeJS.Timeout | null>(null);

  // Combine thumbnail with images array
  const allImages = [product.thumbnail, ...product.images];

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [interval]);

  // Handle mouse enter to change image
  const handleMouseEnter = () => {
    // Set interval to cycle through images
    const newInterval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % allImages.length);
    }, 1000); // Change image every 1 second

    setIntervalState(newInterval);
  };

  // Handle mouse leave to stop changing images
  const handleMouseLeave = () => {
    // Clear the interval
    if (interval) {
      clearInterval(interval);
      setIntervalState(null);
    }

    // Reset to first image
    setActiveImageIndex(0);
  };

  return (
    <Link
      href={`/lo-que-usamos/${product.slug}`}
      className="group block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <article className="space-y-3">
        {/* Product Image with hover effect */}
        <div className="relative aspect-square overflow-hidden rounded-lg bg-neutral-100">
          {allImages.map((imageUrl, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-700 ${
                activeImageIndex === idx ? "opacity-100" : "opacity-0"
              }`}
            >
              <OptimizedImage
                src={imageUrl}
                alt={`${product.name} - Image ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={idx === 0}
              />
            </div>
          ))}
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <h2 className="font-instrument-serif text-lg uppercase font-medium text-black group-hover:text-black/70 transition-colors">
            {product.name}
          </h2>
          <p className="font-figtree text-sm text-black/70 leading-relaxed line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center gap-1 text-xs font-medium text-black/50 group-hover:text-black transition-colors pt-1">
            ver detalles
            <svg
              className="w-3 h-3 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
