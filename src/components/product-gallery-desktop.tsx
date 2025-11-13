"use client";

import OptimizedImage from "./optimized-image";

interface ProductGalleryDesktopProps {
  images: string[];
  productName: string;
}

export default function ProductGalleryDesktop({ images, productName }: ProductGalleryDesktopProps) {
  // Estructura de galería tipo proyectos
  // Imagen 1: Grande principal
  // Imágenes 2-3: Grid flexible

  return (
    <div className="space-y-0">
      {/* Primera imagen: Principal horizontal */}
      {images[0] && (
        <div className="relative w-full aspect-[16/10] overflow-hidden">
          <OptimizedImage
            src={images[0]}
            alt={`${productName} - Vista principal`}
            fill
            className="object-cover"
            priority
            sizes="70vw"
            quality="auto:best"
          />
        </div>
      )}

      {/* Grid de imágenes adicionales */}
      {images.length > 1 && (
        <div className="grid grid-cols-2 gap-0">
          {/* Segunda imagen - cuadrada */}
          {images[1] && (
            <div className="relative aspect-square overflow-hidden">
              <OptimizedImage
                src={images[1]}
                alt={`${productName} - Detalle 1`}
                fill
                className="object-cover"
                sizes="35vw"
                quality="auto:good"
              />
            </div>
          )}

          {/* Tercera imagen - cuadrada */}
          {images[2] && (
            <div className="relative aspect-square overflow-hidden">
              <OptimizedImage
                src={images[2]}
                alt={`${productName} - Detalle 2`}
                fill
                className="object-cover"
                sizes="35vw"
                quality="auto:good"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
