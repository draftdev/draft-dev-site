/**
 * Proxies WordPress images through our API to handle authentication
 */
export function proxyWordPressImage(src: string | undefined): string {
  if (!src) {
    return '/site/med-landscape/write_draft_dev.jpg'
  }

  if (src.includes('candid-cookie.flywheelsites.com')) {
    const encodedUrl = encodeURIComponent(src.trim())
    const proxyUrl = `/api/image?url=${encodedUrl}`

    return proxyUrl
  }

  return src
}
