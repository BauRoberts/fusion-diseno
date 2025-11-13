'use client';

import { useState } from 'react';
import Image from 'next/image';
import { getOptimizedCloudinaryUrl, getBlurDataURL, getResponsiveSrcSet, extractPublicId } from '@/lib/cloudinary';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: 'auto:best' | 'auto:good' | 'auto:eco' | 'auto:low';
  crop?: 'fill' | 'fit' | 'scale' | 'limit';
  gravity?: 'auto' | 'center' | 'face';
  fill?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none';
  style?: React.CSSProperties;
  onClick?: () => void;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes,
  quality = 'auto:good',
  crop,
  gravity,
  fill = false,
  objectFit = 'cover',
  style,
  onClick,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Si no hay src, retornar null
  if (!src) {
    return null;
  }

  // Si no es una URL de Cloudinary, usar la imagen tal cual
  if (!src.includes('cloudinary.com')) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        className={className}
        priority={priority}
        sizes={sizes}
        style={style}
        onClick={onClick}
      />
    );
  }

  const publicId = extractPublicId(src);

  // Generar URLs optimizadas
  const optimizedSrc = getOptimizedCloudinaryUrl(publicId, width, height, {
    quality,
    crop,
    gravity,
  });

  const blurDataURL = getBlurDataURL(publicId);

  // Generar srcSet para imágenes responsivas
  const responsiveSizes = width
    ? [Math.floor(width * 0.5), Math.floor(width * 0.75), width, Math.floor(width * 1.5), Math.floor(width * 2)]
    : [640, 750, 828, 1080, 1200, 1920];

  const srcSet = getResponsiveSrcSet(publicId, responsiveSizes);

  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-200 ${className}`}
        style={{ width: width || '100%', height: height || '100%', ...style }}
      >
        <span className="text-gray-500 text-sm">Error al cargar imagen</span>
      </div>
    );
  }

  // Si usamos fill, no envolvemos en div para evitar problemas de layout
  if (fill) {
    return (
      <>
        <Image
          src={optimizedSrc}
          alt={alt}
          fill
          className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}
          style={{ objectFit, ...style }}
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
          placeholder="blur"
          blurDataURL={blurDataURL}
          sizes={sizes || '100vw'}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setError(true);
          }}
        />
        {isLoading && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-shimmer"
               style={{ backgroundSize: '200% 100%' }} />
        )}
      </>
    );
  }

  // Para imágenes con width/height específicos
  return (
    <div className="relative" style={style} onClick={onClick}>
      <Image
        src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        placeholder="blur"
        blurDataURL={blurDataURL}
        sizes={sizes}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setError(true);
        }}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-shimmer"
             style={{ backgroundSize: '200% 100%' }} />
      )}
    </div>
  );
}
