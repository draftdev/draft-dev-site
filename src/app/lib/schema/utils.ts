import { DEFAULT_IMAGE_URL, type Post } from './constants'

export function makeAbsoluteUrl(relativeUrl: string): string {
  if (relativeUrl.startsWith('http')) {
    return relativeUrl
  }
  return `https://draft.dev${relativeUrl}`
}

export function getSchemaImageUrl(post: Post): string {
  const originalImageUrl = post.featuredImage?.node.sourceUrl
  return originalImageUrl
    ? makeAbsoluteUrl(originalImageUrl)
    : DEFAULT_IMAGE_URL
}

export function stripHtmlTags(html: string): string {
  if (!html) return ''
  return html
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/&nbsp;/g, ' ') // Replace non-breaking spaces
    .replace(/&amp;/g, '&') // Decode ampersands
    .replace(/&lt;/g, '<') // Decode less than
    .replace(/&gt;/g, '>') // Decode greater than
    .replace(/&quot;/g, '"') // Decode quotes
    .replace(/&#39;/g, "'") // Decode apostrophes
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim() // Remove leading/trailing whitespace
}

export function estimateWordCount(content?: string): number {
  if (!content) return 0
  const textContent = content.replace(/<[^>]*>/g, ' ')
  const words = textContent.split(/\s+/).filter((word) => word.length > 0)
  return words.length
}

export function validateSchemaSize(schema: any, name: string): void {
  if (process.env.NODE_ENV === 'development') {
    const schemaString = JSON.stringify(schema)
    const sizeInKB = new Blob([schemaString]).size / 1024

    if (sizeInKB > 50) {
      console.warn(
        `⚠️ Large schema detected: ${name} is ${sizeInKB.toFixed(2)}KB`,
      )
    }
  }
}
