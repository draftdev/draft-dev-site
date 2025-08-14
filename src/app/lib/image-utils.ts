// app/lib/image-utils.ts
export function getImageUrl(
  wpImageUrl: string | undefined,
  _postId?: string,
): string {
  const fallbackImage = '/site/med-landscape/write_draft_dev.jpg'
  if (!wpImageUrl) return fallbackImage

  let url = wpImageUrl.trim()

  // Handle protocol-relative: //cdn.example.com/img.jpg
  if (url.startsWith('//')) url = 'https:' + url

  // Force https to avoid mixed-content issues
  if (url.startsWith('http://')) url = url.replace(/^http:\/\//i, 'https://')

  // If it's a relative URL, pass through as-is
  if (url.startsWith('/')) return url

  // Prefer your known domains as-is
  if (url.includes('draft.dev')) return url
  if (url.includes('thepodcastconsultant.com')) return url
  if (url.includes('candid-cookie.flywheelsites.com')) return url

  // For every other absolute URL, return the normalized https URL
  try {
    // Validate it parses as a URL; if it does, return its href
    const u = new URL(url)
    return u.href
  } catch {
    return fallbackImage
  }
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

// // app/lib/image-utils.ts - No proxy, direct URLs
// export function getImageUrl(
//   wpImageUrl: string | undefined,
//   postId?: string,
// ): string {
//   const fallbackImage = '/site/med-landscape/write_draft_dev.jpg'

//   if (!wpImageUrl) {
//     return fallbackImage
//   }

//   // If it's already a draft.dev URL, use it directly
//   if (wpImageUrl.includes('draft.dev')) {
//     return wpImageUrl
//   }

//   // If it's a relative URL, use it directly
//   if (wpImageUrl.startsWith('/')) {
//     return wpImageUrl
//   }

//   // For WordPress images, use them directly (no proxy)
//   if (wpImageUrl.includes('candid-cookie.flywheelsites.com')) {
//     return wpImageUrl
//   }

//   // For other external images, use them directly
//   if (wpImageUrl.startsWith('http')) {
//     return wpImageUrl
//   }

//   return fallbackImage
// }

// export function getImageAlt(
//   post: {
//     title: string
//     featuredImage?: {
//       node: {
//         altText?: string
//       }
//     }
//   },
//   fallback?: string,
// ): string {
//   return (
//     post.featuredImage?.node?.altText ||
//     fallback ||
//     post.title ||
//     'Draft.dev Technical Content'
//   )
// }
