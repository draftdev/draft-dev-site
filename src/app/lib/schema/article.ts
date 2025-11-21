import { cache } from 'react'
import { PUBLISHER_REF, TECHNICAL_AUDIENCE, type Post } from './constants'
import { estimateWordCount, getSchemaImageUrl, stripHtmlTags } from './utils'
import { generateVideoSchema } from './video'

export function generatePersonAuthor(post: Post) {
  const authorName = post.originalAuthor || post.author?.node?.name

  if (!authorName || authorName === 'Draft.dev Team') {
    return { '@id': PUBLISHER_REF }
  }

  const topics =
    post.customFields?.targetKeywords
      ?.slice(0, 3)
      .map((t) => t.trim())
      .filter(Boolean) || []

  const baseAuthor = {
    '@type': 'Person',
    name: authorName,
    worksFor: { '@id': PUBLISHER_REF, '@type': 'Organization' },
    url: 'https://draft.dev/about',
    ...(topics.length > 0 && {
      description: `Technical content specialist covering ${topics.join(', ')}`,
      knowsAbout: topics,
    }),
  }

  if (post.customFields?.authorLinkedIn) {
    const sameAs = [post.customFields.authorLinkedIn]
    if (post.customFields?.authorTwitter) {
      sameAs.push(post.customFields.authorTwitter)
    }
    return { ...baseAuthor, sameAs }
  }

  return baseAuthor
}

export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>,
) {
  return faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: stripHtmlTags(faq.answer),
    },
  }))
}

export function generateFAQPageSchema(post: Post, slug: string) {
  if (!post.customFields?.faqQuestions?.length) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `https://draft.dev/learn/${slug}#faq`,
    name: 'Frequently Asked Questions',
    mainEntity: generateFAQSchema(post.customFields.faqQuestions),
  }
}

export const generateArticleSchema = cache((post: Post, slug: string) => {
  const wordCount = estimateWordCount(post.content)
  const readingTime = Math.ceil(wordCount / 200)
  const publishedDate = post.date
    ? new Date(post.date).toISOString()
    : new Date().toISOString()
  const modifiedDate = post.modified
    ? new Date(post.modified).toISOString()
    : publishedDate

  const cleanDescription = stripHtmlTags(
    post.seoDesc ||
      post.excerpt ||
      (post.content ? `${stripHtmlTags(post.content).slice(0, 160)}…` : ''),
  )

  const keywordList = post.customFields?.targetKeywords?.slice(0, 5)
  const keywords =
    keywordList && keywordList.length > 0 ? keywordList.join(', ') : undefined

  const about =
    keywordList && keywordList.length > 0
      ? keywordList.slice(0, 2).map((term) => ({
          '@type': 'Thing',
          name: term,
        }))
      : undefined

  const articleSchema: any = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `https://draft.dev/learn/${slug}#article`,
    headline: post.title,
    description: cleanDescription,
    image: {
      '@type': 'ImageObject',
      url: getSchemaImageUrl(post),
      width: 1200,
      height: 630,
    },
    datePublished: publishedDate,
    dateModified: modifiedDate,
    url: `https://draft.dev/learn/${slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://draft.dev/learn/${slug}`,
    },
    isPartOf: {
      '@type': 'Blog',
      name: 'Draft.dev Blog',
      url: 'https://draft.dev/learn',
    },
    author: generatePersonAuthor(post),
    publisher: { '@id': PUBLISHER_REF, '@type': 'Organization' },
    articleSection: post.categories?.[0]?.name || 'Technical Content Marketing',
    wordCount,
    timeRequired: `PT${readingTime}M`,
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    audience: TECHNICAL_AUDIENCE,
    ...(keywords && { keywords }),
    ...(about && { about }),
  }

  if (post.customFields?.videoUrl) {
    articleSchema.video = generateVideoSchema(
      post.customFields.videoUrl,
      post.title,
      cleanDescription,
      publishedDate,
    )
  }

  return articleSchema
})

export const generateBreadcrumbSchema = cache((title: string, slug: string) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `https://draft.dev/learn/${slug}#breadcrumbs`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: { '@type': 'WebPage', '@id': 'https://draft.dev' },
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: { '@type': 'WebPage', '@id': 'https://draft.dev/learn' },
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: { '@type': 'WebPage', '@id': `https://draft.dev/learn/${slug}` },
      },
    ],
  }
})
