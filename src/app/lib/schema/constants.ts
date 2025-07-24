export interface Post {
  id: string
  slug: string
  title: string
  categories: { id: string; name: string }[]
  content?: string
  date: string
  featuredImage?: {
    node: {
      sourceUrl: string
      altText?: string
    }
  }
  excerpt: string
  author?: {
    node: {
      name: string
      avatar?: {
        url: string
      }
    }
  }
  originalAuthor?: string | null
  modified?: string
  seoTitle?: string
  seoDesc?: string
  seoKeyword?: string
  ogDesc?: string
  twitterDesc?: string
  customFields?: {
    faqQuestions?: Array<{
      question: string
      answer: string
    }>
    targetKeywords?: string[]
    authorCredentials?: string
    readingTime?: number
    expertSources?: string[]
    videoUrl?: string
    authorLinkedIn?: string
    authorTwitter?: string
    relatedTopics?: string[]
  }
}

export const PUBLISHER_REF = 'https://draft.dev/#organization'

export const DEFAULT_IMAGE_URL =
  'https://draft.dev/site/med-landscape/write_draft_dev.jpg'

export const CORE_TOPICS = [
  {
    '@type': 'Thing',
    name: 'Technical Content Marketing',
    sameAs: 'https://en.wikipedia.org/wiki/Content_marketing',
    url: 'https://draft.dev/learn',
  },
  {
    '@type': 'Thing',
    name: 'Software Development',
    url: 'https://draft.dev/learn',
  },
  {
    '@type': 'Thing',
    name: 'Developer Relations',
    sameAs: 'https://en.wikipedia.org/wiki/Developer_relations',
    url: 'https://draft.dev/learn',
  },
] as const

export const TECHNICAL_AUDIENCE = {
  '@type': 'Audience',
  audienceType: 'Technical Professionals',
} as const
