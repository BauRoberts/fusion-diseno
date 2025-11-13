/**
 * Helper functions for Cloudinary image URLs
 */

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'djs4laafl';

/**
 * Generate a Cloudinary URL for an image
 * @param publicId - The public ID of the image in Cloudinary (e.g., "proyectos/casa-moderna/imagen-1")
 * @param transformations - Optional transformations (e.g., "w_800,h_600,c_fill")
 * @returns Full Cloudinary URL
 */
export function getCloudinaryUrl(publicId: string, transformations?: string): string {
  const baseUrl = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

  if (transformations) {
    return `${baseUrl}/${transformations}/${publicId}`;
  }

  return `${baseUrl}/${publicId}`;
}

/**
 * Generate a Cloudinary URL with automatic quality and format optimization
 * @param publicId - The public ID of the image in Cloudinary
 * @param width - Optional width
 * @param height - Optional height
 * @returns Optimized Cloudinary URL
 */
export function getOptimizedCloudinaryUrl(
  publicId: string,
  width?: number,
  height?: number
): string {
  const transformations = [];

  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);

  // Add automatic quality and format
  transformations.push('q_auto', 'f_auto');

  return getCloudinaryUrl(publicId, transformations.join(','));
}

/**
 * Generate a thumbnail URL
 */
export function getThumbnailUrl(publicId: string): string {
  return getOptimizedCloudinaryUrl(publicId, 400, 400);
}

/**
 * Generate a full-size URL
 */
export function getFullSizeUrl(publicId: string): string {
  return getOptimizedCloudinaryUrl(publicId, 1920);
}
