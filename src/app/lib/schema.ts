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
  // Yoast SEO fields
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
    relatedTopics?: string[]
  }
}

const PUBLISHER_REF = {
  '@type': 'Organization',
  '@id': 'https://draft.dev/#organization',
} as const

const DEFAULT_IMAGE_URL =
  'https://draft.dev/site/med-landscape/write_draft_dev.jpg'

const CORE_TOPICS = [
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

const TECHNICAL_AUDIENCE = {
  '@type': 'Audience',
  audienceType: 'Technical Professionals',
} as const

const CORE_EXPERTISE = [
  'Technical Content Marketing',
  'Developer Relations',
  'API Documentation',
  'Technical Writing',
  'Content Strategy',
  'Developer Marketing',
  'DevOps Content',
  'Cloud Computing Content',
  'Software Engineering Content',
  'Data Engineering Content',
  'B2B SaaS Marketing',
  'Technical Content Strategy',
  'Technical Content Creation',
  'Technical Content Promotion',
  'Content Marketing',
  'Content Strategy',
  'B2B Lead Generation',
  'B2B Demand Generation',
  'B2B Tech Marketing',
  'Thought Leadership Content',
  'Developer Relations',
  'DevRel',
  'Dev Advocacy',
] as const

function makeAbsoluteUrl(relativeUrl: string): string {
  if (relativeUrl.startsWith('http')) {
    return relativeUrl
  }
  return `https://draft.dev${relativeUrl}`
}

function getSchemaImageUrl(post: Post): string {
  const originalImageUrl = post.featuredImage?.node.sourceUrl
  return originalImageUrl
    ? makeAbsoluteUrl(originalImageUrl)
    : DEFAULT_IMAGE_URL
}

export function generatePersonAuthor(post: Post) {
  const authorName = post.originalAuthor || post.author?.node?.name

  if (!authorName || authorName === 'Draft.dev Team') {
    return PUBLISHER_REF
  }

  const baseAuthor = {
    '@type': 'Person',
    name: authorName,
    worksFor: PUBLISHER_REF,
    url: 'https://draft.dev/about',
    expertise: post.customFields?.targetKeywords || [
      'Technical Content Marketing',
      'Software Development',
    ],
  }

  // Only add social links if they exist
  if (post.customFields?.authorLinkedIn) {
    const sameAs = [post.customFields.authorLinkedIn]
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
      text: faq.answer,
    },
  }))
}

export function generateArticleSchema(post: Post, slug: string) {
  const wordCount = estimateWordCount(post.content)
  const readingTime =
    post.customFields?.readingTime || Math.ceil(wordCount / 200)

  // Ensure proper date formatting
  const publishedDate = post.date
    ? new Date(post.date).toISOString()
    : new Date().toISOString()
  const modifiedDate = post.modified
    ? new Date(post.modified).toISOString()
    : publishedDate

  // Build the base schema
  const articleSchema: any = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `https://draft.dev/learn/${slug}#article`,
    headline: post.title,
    description: post.seoDesc || post.excerpt || '',

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

    author: generatePersonAuthor(post),
    publisher: PUBLISHER_REF,

    articleSection: post.categories?.[0]?.name || 'Technical Content Marketing',
    wordCount: wordCount,
    timeRequired: `PT${readingTime}M`,
    inLanguage: 'en-US',
    isAccessibleForFree: true,

    audience: TECHNICAL_AUDIENCE,
    about: CORE_TOPICS,

    keywords:
      post.customFields?.targetKeywords?.join(', ') ||
      post.seoKeyword ||
      'technical content marketing, developer relations',
  }

  if (post.customFields?.targetKeywords) {
    articleSchema.expertise = post.customFields.targetKeywords
  }

  if (post.customFields?.faqQuestions?.length) {
    articleSchema.mainEntity = generateFAQSchema(post.customFields.faqQuestions)
  }

  if (post.customFields?.videoUrl) {
    articleSchema.video = {
      '@type': 'VideoObject',
      name: post.title,
      description: post.seoDesc || post.excerpt || '',
      url: post.customFields.videoUrl,
      uploadDate: publishedDate,
      publisher: PUBLISHER_REF,
    }
  }

  return articleSchema
}

export function generateBlogSchema(posts: Post[]) {
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
    expertise: CORE_EXPERTISE,

    blogPost: posts.slice(0, 200).map((post) => ({
      '@type': 'BlogPosting',
      '@id': `https://draft.dev/learn/${post.slug}#article`,
      headline: post.title,
      url: `https://draft.dev/learn/${post.slug}`,
      datePublished: post.date ? new Date(post.date).toISOString() : undefined,
      description: post.seoDesc || post.excerpt || '',
      keywords: post.customFields?.targetKeywords?.join(', ') || '',
      image: {
        '@type': 'ImageObject',
        url: getSchemaImageUrl(post),
      },
      author: generatePersonAuthor(post),
      publisher: PUBLISHER_REF,
    })),
  }
}

export function generateBreadcrumbSchema(title: string, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `https://draft.dev/learn/${slug}#breadcrumbs`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: {
          '@type': 'WebPage',
          '@id': 'https://draft.dev',
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: {
          '@type': 'WebPage',
          '@id': 'https://draft.dev/learn',
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: {
          '@type': 'WebPage',
          '@id': `https://draft.dev/learn/${slug}`,
        },
      },
    ],
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://draft.dev/#organization',
    name: 'Draft.dev',
    alternateName: 'Draft',
    description:
      'Technical content marketing agency helping Marketing and Developer Relations teams in tech companies drive awareness, capture leads, and build trust through expert-driven content.',
    url: 'https://draft.dev',

    logo: {
      '@type': 'ImageObject',
      '@id': 'https://draft.dev/#logo',
      url: 'https://draft.dev/draft/logos/draftlogo_main_filled.svg',
      width: 180,
      height: 60,
    },

    image: [
      {
        '@type': 'ImageObject',
        url: DEFAULT_IMAGE_URL,
        width: 1200,
        height: 630,
      },
    ],

    foundingDate: '2020',

    founder: {
      '@type': 'Person',
      name: 'Karl Hughes',
      jobTitle: 'CEO & Founder',
      description:
        'Former CTO turned content marketing entrepreneur, helping tech companies create authentic technical content that resonates with developers',
      url: 'https://draft.dev/about',
      sameAs: [
        'https://www.linkedin.com/in/karllhughes/',
        'https://twitter.com/KarlLHughes',
      ],
    },

    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: '50',
    },

    naics: '541613',

    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressRegion: 'IL',
      addressLocality: 'Chicago',
    },

    areaServed: 'Worldwide',

    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        url: 'https://draft.dev/call',
        availableLanguage: 'English',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        url: 'https://draft.dev/call',
        availableLanguage: 'English',
      },
    ],

    sameAs: [
      'https://twitter.com/draftdev',
      'https://linkedin.com/company/draft-dev',
      'https://en.wikipedia.org/wiki/Content_marketing',
    ],

    expertise: CORE_EXPERTISE,

    knowsAbout: CORE_TOPICS,

    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Draft.dev Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Technical Blog Writing',
            description: 'Expert-written technical blog posts and tutorials',
            url: 'https://draft.dev',
            category: 'Content Marketing',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Content Strategy Consulting',
            description: 'Strategic planning for technical content marketing',
            url: 'https://draft.dev',
            category: 'Marketing Consulting',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Lead Generation Content',
            description:
              'Comprehensive content campaigns designed to drive leads',
            url: 'https://draft.dev',
            category: 'Lead Generation',
          },
        },
      ],
    },

    slogan: 'Technical Content Marketing by Subject Matter Experts',
  }
}

export function generateServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://draft.dev/#service',
    name: 'Technical Content Marketing Services',
    description:
      'Expert technical content creation for developer audiences including blog posts, tutorials, documentation, and developer relations content',
    provider: PUBLISHER_REF,
    serviceType: 'Content Marketing',
    category: 'B2B Marketing Services',
    audience: TECHNICAL_AUDIENCE,
    areaServed: 'Worldwide',
    offers: [
      {
        '@type': 'Offer',
        name: 'Technical Blog Writing',
        description: 'Expert-written technical blog posts and tutorials',
        category: 'Content Creation',
      },
      {
        '@type': 'Offer',
        name: 'Developer Relations Content',
        description:
          'Content strategy and creation for developer relations teams',
        category: 'Developer Marketing',
      },
      {
        '@type': 'Offer',
        name: 'Lead Generation Campaigns',
        description:
          'Comprehensive content campaigns designed to drive qualified leads',
        category: 'Lead Generation',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Technical Content Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Technical Tutorials',
            description: 'Step-by-step technical tutorials and guides',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'API Documentation',
            description: 'Comprehensive API documentation and developer guides',
          },
        },
      ],
    },
  }
}

export function generateVideoSchema(
  videoUrl: string,
  title: string,
  description: string,
  uploadDate?: string,
  duration?: string,
) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: title,
    description: description,
    url: videoUrl,
    uploadDate: uploadDate || new Date().toISOString(),
    publisher: PUBLISHER_REF,
    contentUrl: videoUrl,
    inLanguage: 'en-US',
  }

  if (duration) {
    schema.duration = duration
  }

  return schema
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://draft.dev/#website',
    name: 'Draft.dev',
    description:
      'Technical content marketing agency helping tech companies reach developers through expert-driven content',
    url: 'https://draft.dev',

    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://draft.dev/learn?search={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },

    publisher: PUBLISHER_REF,
    copyrightYear: 2020,
    inLanguage: 'en-US',

    about: {
      '@type': 'Thing',
      name: 'Technical Content Marketing',
      description:
        'Expert insights and services for technical content marketing and developer relations',
      sameAs: 'https://en.wikipedia.org/wiki/Content_marketing',
    },
  }
}

function estimateWordCount(content: string): number {
  if (!content) return 0
  const textContent = content.replace(/<[^>]*>/g, ' ')
  const words = textContent.split(/\s+/).filter((word) => word.length > 0)
  return words.length
}
