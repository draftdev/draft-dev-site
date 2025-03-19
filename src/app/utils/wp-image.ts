export function getImageUrl(
  src?: string,
  fallbackImage = '/site/med-landscape/write_draft_dev.jpg',
): string {
  if (!src) {
    return fallbackImage
  }
  return src.trim()
}
