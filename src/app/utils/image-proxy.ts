/**
 * Proxies WordPress images through our API to handle authentication
 */
export function proxyWordPressImage(src: string | undefined): string {
  if (!src) {
    return '/site/med-landscape/write_draft_dev.jpg'
  }

  // For debugging purposes
  console.log('Original image source:', src)

  // Check if this is a WordPress image that needs authentication
  if (src.includes('candid-cookie.flywheelsites.com')) {
    // Make sure we properly encode the URL to preserve special characters
    const encodedUrl = encodeURIComponent(src.trim())
    const proxyUrl = `/api/image?url=${encodedUrl}`

    // For debugging purposes
    console.log('Proxied image URL:', proxyUrl)

    return proxyUrl
  }

  return src
}
