import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQPageSchema,
} from './article'
import { generateBlogSchema } from './blog'
import { type Post } from './constants'
import { generateOrganizationSchema, generateServiceSchema } from './organization'
import { type JsonLd } from './utils'
import { generateWebSiteSchema } from './website'

export function generateHomePageSchemas(): JsonLd[] {
  return [
    generateOrganizationSchema(),
    generateWebSiteSchema(),
    generateServiceSchema(),
  ]
}

export function generateAboutPageSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': 'https://draft.dev/about#webpage',
    url: 'https://draft.dev/about',
    name: 'About Draft.dev',
    description:
      'Learn about Draft.dev, a technical content marketing agency run by subject matter experts.',
    isPartOf: {
      '@id': 'https://draft.dev/#website',
    },
    about: {
      '@id': 'https://draft.dev/#organization',
    },
    mainEntity: {
      '@id': 'https://draft.dev/#organization',
    },
  }
}

export function generateAboutPageSchemas(): JsonLd[] {
  return [generateOrganizationSchema(), generateAboutPageSchema()]
}

export function generateBlogListingSchemas(posts: Post[]): JsonLd[] {
  return [generateBlogSchema(posts)]
}

export function generateBlogPostSchemas(post: Post, slug: string): JsonLd[] {
  const schemas: JsonLd[] = [
    generateArticleSchema(post, slug),
    generateBreadcrumbSchema(post.title, slug),
  ]

  const faqSchema = generateFAQPageSchema(post, slug)
  if (faqSchema) {
    schemas.push(faqSchema)
  }

  return schemas
}
