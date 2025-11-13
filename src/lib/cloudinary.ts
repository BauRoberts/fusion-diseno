/**
 * Helper functions for Cloudinary image URLs
 */

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'djs4laafl';

/**
 * Extrae el public ID de una URL completa de Cloudinary
 */
export function extractPublicId(url: string): string {
  if (!url.includes('cloudinary.com')) return url;

  const match = url.match(/\/upload\/(?:v\d+\/)?(.+)$/);
  return match ? match[1] : url;
}

/**
 * Generate a Cloudinary URL for an image
 * @param publicId - The public ID of the image in Cloudinary (e.g., "proyectos/casa-moderna/imagen-1")
 * @param transformations - Optional transformations (e.g., "w_800,h_600,c_fill")
 * @returns Full Cloudinary URL
 */
export function getCloudinaryUrl(publicId: string, transformations?: string): string {
  const baseUrl = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;
  const cleanPublicId = extractPublicId(publicId);

  if (transformations) {
    return `${baseUrl}/${transformations}/${cleanPublicId}`;
  }

  return `${baseUrl}/${cleanPublicId}`;
}

/**
 * Generate a Cloudinary URL with automatic quality and format optimization
 * @param publicId - The public ID of the image in Cloudinary or full URL
 * @param width - Optional width
 * @param height - Optional height
 * @param options - Additional transformation options
 * @returns Optimized Cloudinary URL
 */
export function getOptimizedCloudinaryUrl(
  publicId: string,
  width?: number,
  height?: number,
  options?: {
    quality?: 'auto:best' | 'auto:good' | 'auto:eco' | 'auto:low';
    crop?: 'fill' | 'fit' | 'scale' | 'limit';
    gravity?: 'auto' | 'center' | 'face';
  }
): string {
  const transformations = [];

  // Tamaño
  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);

  // Crop mode
  if (options?.crop) transformations.push(`c_${options.crop}`);

  // Gravity para crop inteligente
  if (options?.gravity) transformations.push(`g_${options.gravity}`);

  // Formato automático (WebP, AVIF cuando esté disponible)
  transformations.push('f_auto');

  // Calidad automática optimizada
  const quality = options?.quality || 'auto:good';
  transformations.push(`q_${quality}`);

  // DPR automático para pantallas retina
  transformations.push('dpr_auto');

  return getCloudinaryUrl(publicId, transformations.join(','));
}

/**
 * Generate multiple sizes for responsive images (srcset)
 */
export function getResponsiveSrcSet(publicId: string, sizes: number[]): string {
  return sizes
    .map(size => `${getOptimizedCloudinaryUrl(publicId, size)} ${size}w`)
    .join(', ');
}

/**
 * Generate a blur placeholder (LQIP - Low Quality Image Placeholder)
 */
export function getBlurDataURL(publicId: string): string {
  const transformations = [
    'w_40',
    'q_auto:low',
    'f_auto',
    'e_blur:1000'
  ].join(',');

  return getCloudinaryUrl(publicId, transformations);
}

/**
 * Generate a thumbnail URL
 */
export function getThumbnailUrl(publicId: string): string {
  return getOptimizedCloudinaryUrl(publicId, 400, 400, { crop: 'fill', gravity: 'auto' });
}

/**
 * Generate a full-size URL
 */
export function getFullSizeUrl(publicId: string): string {
  return getOptimizedCloudinaryUrl(publicId, 1920);
}

/**
 * Genera URLs optimizadas para galerías de imágenes
 */
export function getGalleryImageUrls(publicId: string) {
  return {
    thumbnail: getThumbnailUrl(publicId),
    small: getOptimizedCloudinaryUrl(publicId, 640),
    medium: getOptimizedCloudinaryUrl(publicId, 1024),
    large: getOptimizedCloudinaryUrl(publicId, 1920),
    blur: getBlurDataURL(publicId),
    srcSet: getResponsiveSrcSet(publicId, [640, 750, 828, 1080, 1200, 1920])
  };
}
