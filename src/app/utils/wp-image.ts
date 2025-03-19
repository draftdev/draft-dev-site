export function getImageUrl(
  src?: string,
  fallbackImage = '/site/med-landscape/write_draft_dev.jpg',
): string {
  if (!src) {
    return fallbackImage
  }

  // Check if it's a WordPress image that needs proxying
  if (src.includes('candid-cookie.flywheelsites.com')) {
    return `/api/image?url=${encodeURIComponent(src.trim())}`
  }
  return src
}
