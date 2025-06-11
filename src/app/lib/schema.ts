// app/lib/schema.ts - Fixed schema without alt properties and cleaned up duplicates

export interface Post {
  id: string
  slug: string
  title: string
  categories: { id: string; name: string }[]
  content: string
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
  // Optional custom fields
  customFields?: {
    faqQuestions?: Array<{
      question: string
      answer: string
    }>
    targetKeywords?: string[]
    authorCredentials?: string
    readingTime?: number
    expertSources?: string[]
  }
}

// Helper to make URLs absolute for schema
function makeAbsoluteUrl(relativeUrl: string): string {
  if (relativeUrl.startsWith('http')) {
    return relativeUrl
  }
  return `https://draft.dev${relativeUrl}`
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
  const displayAuthor =
    post.originalAuthor || post.author?.node?.name || 'Draft.dev Team'
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

  // Keep original WordPress URL for schema (for SEO purposes)
  const originalImageUrl = post.featuredImage?.node.sourceUrl
  const schemaImageUrl = originalImageUrl
    ? makeAbsoluteUrl(originalImageUrl)
    : 'https://draft.dev/site/med-landscape/write_draft_dev.jpg'

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `https://draft.dev/learn/${slug}#article`,
    headline: post.title,
    description: post.seoDesc || post.excerpt || '',

    // Image without alt property (schema.org doesn't support alt for ImageObject)
    image: {
      '@type': 'ImageObject',
      '@id': `https://draft.dev/learn/${slug}#primaryimage`,
      url: schemaImageUrl,
      contentUrl: schemaImageUrl,
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

    author: {
      '@type': 'Organization',
      '@id': 'https://draft.dev/#organization',
    },

    publisher: {
      '@type': 'Organization',
      '@id': 'https://draft.dev/#organization',
    },

    articleSection: post.categories?.[0]?.name || 'Technical Content Marketing',
    wordCount: wordCount,
    timeRequired: `PT${readingTime}M`,
    inLanguage: 'en-US',
    isAccessibleForFree: true,

    audience: {
      '@type': 'Audience',
      audienceType:
        'Software Developers, DevOps Engineers, Technical Decision Makers',
    },

    about: [
      {
        '@type': 'Thing',
        name: 'Technical Content Marketing',
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
        url: 'https://draft.dev/learn',
      },
    ],

    keywords:
      post.seoKeyword ||
      post.customFields?.targetKeywords?.join(', ') ||
      'technical content marketing, developer relations',

    ...(post.customFields?.faqQuestions &&
      post.customFields.faqQuestions.length > 0 && {
        mainEntity: generateFAQSchema(post.customFields.faqQuestions),
      }),
  }
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

    publisher: {
      '@type': 'Organization',
      '@id': 'https://draft.dev/#organization',
    },

    audience: {
      '@type': 'Audience',
      audienceType:
        'Software Developers, DevOps Engineers, Technical Marketers, Developer Relations Professionals',
    },

    about: [
      {
        '@type': 'Thing',
        name: 'Technical Content Marketing',
        description:
          'Strategies and best practices for marketing to technical audiences',
      },
      {
        '@type': 'Thing',
        name: 'Developer Relations',
        description:
          'Building relationships and community with software developers',
      },
      {
        '@type': 'Thing',
        name: 'Software Development',
        description:
          'Programming tutorials, best practices, and technical guides',
      },
    ],

    // Keep original WordPress URLs in schema for SEO
    blogPost: posts.slice(0, 10).map((post) => {
      const originalImageUrl = post.featuredImage?.node.sourceUrl
      const schemaImageUrl = originalImageUrl
        ? makeAbsoluteUrl(originalImageUrl)
        : 'https://draft.dev/site/med-landscape/write_draft_dev.jpg'

      return {
        '@type': 'BlogPosting',
        '@id': `https://draft.dev/learn/${post.slug}#article`,
        headline: post.title,
        url: `https://draft.dev/learn/${post.slug}`,
        datePublished: post.date
          ? new Date(post.date).toISOString()
          : undefined,
        description: post.seoDesc || post.excerpt || '',
        image: {
          '@type': 'ImageObject',
          url: schemaImageUrl,
        },
        author: {
          '@type': 'Organization',
          '@id': 'https://draft.dev/#organization',
        },
      }
    }),
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
      contentUrl: 'https://draft.dev/draft/logos/draftlogo_main_filled.svg',
      width: 180,
      height: 60,
      caption: 'Draft.dev Logo',
    },

    image: [
      {
        '@type': 'ImageObject',
        url: 'https://draft.dev/site/med-landscape/write_draft_dev.jpg',
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
    },

    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: '50-100',
    },

    naics: '541613',

    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressRegion: 'IL',
      addressLocality: 'Chicago',
    },

    areaServed: 'Worldwide',
    serviceArea: {
      '@type': 'GeoShape',
      name: 'Worldwide',
    },

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
      'https://github.com/draftdev',
      'https://www.crunchbase.com/organization/draft-dev',
    ],

    knowsAbout: [
      'Technical Content Marketing',
      'Developer Relations',
      'Software Development Content',
      'API Documentation',
      'Technical Writing',
      'Content Strategy',
      'Developer Marketing',
      'DevOps Content',
      'Cloud Computing',
      'Software Engineering',
      'Data Engineering',
      'Technical Tutorials',
      'Developer Tools Marketing',
      'B2B SaaS Marketing',
      'Technical Blog Writing',
      'Content Creation for Developers',
    ],

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
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Content Strategy Consulting',
            description: 'Strategic planning for technical content marketing',
            url: 'https://draft.dev',
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
          },
        },
      ],
    },

    award: [
      'Trusted by 100+ tech companies',
      '3000+ content pieces published',
      '300+ subject matter experts in network',
    ],

    slogan: 'Technical Content Marketing by Subject Matter Experts',
  }
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

    publisher: {
      '@type': 'Organization',
      '@id': 'https://draft.dev/#organization',
    },

    copyrightYear: 2020,
    inLanguage: 'en-US',

    about: {
      '@type': 'Thing',
      name: 'Technical Content Marketing',
      description:
        'Expert insights and services for technical content marketing and developer relations',
    },
  }
}

function estimateWordCount(content: string): number {
  if (!content) return 0
  const textContent = content.replace(/<[^>]*>/g, ' ')
  const words = textContent.split(/\s+/).filter((word) => word.length > 0)
  return words.length
}
