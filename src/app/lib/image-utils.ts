// app/lib/image-utils.ts - Always proxy WordPress images to hide domain
export function getImageUrl(wpImageUrl: string | undefined): string {
  const fallbackImage = '/site/med-landscape/write_draft_dev.jpg'

  if (!wpImageUrl) {
    return fallbackImage
  }

  // If it's already a draft.dev URL, use it directly
  if (wpImageUrl.includes('draft.dev')) {
    return wpImageUrl
  }

  // If it's a relative URL, use it directly
  if (wpImageUrl.startsWith('/')) {
    return wpImageUrl
  }

  // For WordPress images, ALWAYS proxy to hide the domain
  if (wpImageUrl.includes('candid-cookie.flywheelsites.com')) {
    const httpsUrl = wpImageUrl.replace('http://', 'https://')
    return `/api/image-proxy?url=${encodeURIComponent(httpsUrl)}`
  }

  // For other external images, proxy them too for consistency
  if (wpImageUrl.startsWith('http')) {
    return `/api/image-proxy?url=${encodeURIComponent(wpImageUrl)}`
  }

  return fallbackImage
}

export function getImageAlt(
  post: {
    title: string
    featuredImage?: {
      node: {
        altText?: string
      }
    }
  },
  fallback?: string,
): string {
  return (
    post.featuredImage?.node?.altText ||
    fallback ||
    post.title ||
    'Draft.dev Technical Content'
  )
}
