import { cache } from 'react'
import { generatePersonAuthor } from './article'
import {
  CORE_TOPICS,
  PUBLISHER_REF,
  TECHNICAL_AUDIENCE,
  type Post,
} from './constants'
import { getSchemaImageUrl, stripHtmlTags } from './utils'

export const generateBlogSchema = cache((posts: Post[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': 'https://draft.dev/learn#blog',
    name: 'Draft.dev Blog - Technical Content Marketing Resources',
    description:
      'Expert insights on technical content marketing, developer relations, software development, and content strategy for reaching technical audiences.',
    url: 'https://draft.dev/learn',
    inLanguage: 'en-US',
    keywords:
      'technical content marketing, developer relations, software development tutorials, API documentation, technical writing, developer marketing, DevOps content',
    publisher: PUBLISHER_REF,
    audience: TECHNICAL_AUDIENCE,
    about: CORE_TOPICS,
    blogPost: posts.slice(0, 100).map((post) => ({
      '@type': 'BlogPosting',
      '@id': `https://draft.dev/learn/${post.slug}#article`,
      headline: post.title,
      url: `https://draft.dev/learn/${post.slug}`,
      datePublished: post.date ? new Date(post.date).toISOString() : undefined,
      description: stripHtmlTags(post.seoDesc || post.excerpt || ''),
      keywords: post.customFields?.targetKeywords?.join(', ') || '',
      image: {
        '@type': 'ImageObject',
        url: getSchemaImageUrl(post),
      },
      author: generatePersonAuthor(post),
      publisher: PUBLISHER_REF,
    })),
  }
})
