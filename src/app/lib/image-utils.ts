// app/lib/image-utils.ts - No proxy, direct URLs
export function getImageUrl(
  wpImageUrl: string | undefined,
  postId?: string,
): string {
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

  // For WordPress images, use them directly (no proxy)
  if (wpImageUrl.includes('candid-cookie.flywheelsites.com')) {
    return wpImageUrl
  }

  // For other external images, use them directly
  if (wpImageUrl.startsWith('http')) {
    return wpImageUrl
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
