/**
 * Proxies WordPress images through our API to handle authentication
 */
export function proxyWordPressImage(src: string | undefined): string {
  if (!src) {
    return '/site/med-landscape/write_draft_dev.jpg'
  }

  // Check if this is a WordPress image
  if (src.includes('candid-cookie.flywheelsites.com')) {
    return `/api/image?url=${encodeURIComponent(src)}`
  }

  return src
}
