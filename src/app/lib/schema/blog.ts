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
    publisher: { '@id': PUBLISHER_REF, '@type': 'Organization' },
    audience: TECHNICAL_AUDIENCE,
    about: CORE_TOPICS,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://draft.dev/learn',
    },
    blogPost: posts.slice(0, 10).map((post) => {
      const keywordList = post.customFields?.targetKeywords?.slice(0, 5)
      const keywords =
        keywordList && keywordList.length > 0
          ? keywordList.join(', ')
          : undefined

      return {
        '@type': 'BlogPosting',
        '@id': `https://draft.dev/learn/${post.slug}#article`,
        headline: post.title,
        url: `https://draft.dev/learn/${post.slug}`,
        ...(post.date && {
          datePublished: new Date(post.date).toISOString(),
        }),
        description: stripHtmlTags(
          post.seoDesc ||
            post.excerpt ||
            (post.content ? `${stripHtmlTags(post.content).slice(0, 160)}…` : ''),
        ),
        ...(keywords && { keywords }),
        image: {
          '@type': 'ImageObject',
          url: getSchemaImageUrl(post),
        },
        author: generatePersonAuthor(post),
        publisher: { '@id': PUBLISHER_REF, '@type': 'Organization' },
        isPartOf: {
          '@type': 'Blog',
          name: 'Draft.dev Blog',
          url: 'https://draft.dev/learn',
        },
      }
    }),
  }
})
