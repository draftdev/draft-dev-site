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
  // Enhanced custom fields for AI optimization
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

// Helper to make URLs absolute for schema
function makeAbsoluteUrl(relativeUrl: string): string {
  if (relativeUrl.startsWith('http')) {
    return relativeUrl
  }
  return `https://draft.dev${relativeUrl}`
}

// AI-Optimized Person Author Schema
export function generatePersonAuthor(post: Post) {
  const authorName = post.originalAuthor || post.author?.node?.name

  if (!authorName || authorName === 'Draft.dev Team') {
    return {
      '@type': 'Organization',
      '@id': 'https://draft.dev/#organization',
    }
  }

  return {
    '@type': 'Person',
    name: authorName,
    jobTitle:
      post.customFields?.authorCredentials || 'Technical Content Expert',
    description: `Technical content expert specializing in ${post.customFields?.targetKeywords?.slice(0, 3).join(', ') || 'software development'}`,
    worksFor: {
      '@type': 'Organization',
      '@id': 'https://draft.dev/#organization',
    },
    url: 'https://draft.dev/about',
    expertise: post.customFields?.targetKeywords || [
      'Technical Content Marketing',
      'Software Development',
    ],
    ...(post.customFields?.authorLinkedIn && {
      sameAs: [
        post.customFields.authorLinkedIn,
        ...(post.customFields.authorTwitter
          ? [post.customFields.authorTwitter]
          : []),
      ],
    }),
  }
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

// Enhanced Article Schema with AI optimizations
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

  const originalImageUrl = post.featuredImage?.node.sourceUrl
  const schemaImageUrl = originalImageUrl
    ? makeAbsoluteUrl(originalImageUrl)
    : 'https://draft.dev/site/med-landscape/write_draft_dev.jpg'

  // Build the base schema as a mutable object
  const articleSchema: any = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `https://draft.dev/learn/${slug}#article`,
    headline: post.title,
    description: post.seoDesc || post.excerpt || '',

    // Simplified image schema
    image: {
      '@type': 'ImageObject',
      url: schemaImageUrl,
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

    // AI-optimized author schema
    author: generatePersonAuthor(post),

    publisher: {
      '@type': 'Organization',
      '@id': 'https://draft.dev/#organization',
    },

    articleSection: post.categories?.[0]?.name || 'Technical Content Marketing',
    wordCount: wordCount,
    timeRequired: `PT${readingTime}M`,
    inLanguage: 'en-US',
    isAccessibleForFree: true,

    // Simplified audience
    audience: {
      '@type': 'Audience',
      audienceType: 'Technical Professionals',
    },

    // Enhanced about with authority signals
    about: [
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
    ],

    // Enhanced keywords for AI understanding
    keywords:
      post.customFields?.targetKeywords?.join(', ') ||
      post.seoKeyword ||
      'technical content marketing, developer relations',
  }

  // Add expertise signals if available
  if (post.customFields?.targetKeywords) {
    articleSchema.expertise = post.customFields.targetKeywords
  }

  // Add FAQ schema if available
  if (
    post.customFields?.faqQuestions &&
    post.customFields.faqQuestions.length > 0
  ) {
    articleSchema.mainEntity = generateFAQSchema(post.customFields.faqQuestions)
  }

  // Add video schema if video content exists
  if (post.customFields?.videoUrl) {
    articleSchema.video = {
      '@type': 'VideoObject',
      name: post.title,
      description: post.seoDesc || post.excerpt || '',
      url: post.customFields.videoUrl,
      uploadDate: publishedDate,
      publisher: {
        '@type': 'Organization',
        '@id': 'https://draft.dev/#organization',
      },
    }
  }

  return articleSchema
}

// Enhanced Blog Schema with more posts and AI optimization
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

    // Enhanced keywords for AI discovery
    keywords:
      'technical content marketing, developer relations, software development tutorials, API documentation, technical writing, developer marketing, DevOps content',

    publisher: {
      '@type': 'Organization',
      '@id': 'https://draft.dev/#organization',
    },

    // Simplified audience
    audience: {
      '@type': 'Audience',
      audienceType: 'Technical Professionals',
    },

    // Enhanced about with authority signals
    about: [
      {
        '@type': 'Thing',
        name: 'Technical Content Marketing',
        description:
          'Strategies and best practices for marketing to technical audiences',
        sameAs: 'https://en.wikipedia.org/wiki/Content_marketing',
      },
      {
        '@type': 'Thing',
        name: 'Developer Relations',
        description:
          'Building relationships and community with software developers',
        sameAs: 'https://en.wikipedia.org/wiki/Developer_relations',
      },
      {
        '@type': 'Thing',
        name: 'Software Development',
        description:
          'Programming tutorials, best practices, and technical guides',
      },
    ],

    // Add expertise array for AI understanding
    expertise: [
      'API Documentation',
      'Technical Tutorials',
      'Developer Marketing',
      'Software Development Content',
      'Technical Writing',
      'Content Strategy',
      'Developer Relations',
    ],

    // Increase to 20 posts for better AI understanding
    blogPost: posts.slice(0, 20).map((post) => {
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
        keywords: post.customFields?.targetKeywords?.join(', ') || '',
        image: {
          '@type': 'ImageObject',
          url: schemaImageUrl,
        },
        author: generatePersonAuthor(post),
        publisher: {
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

// Enhanced Organization Schema with authority signals
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

    // Enhanced sameAs with authority signals
    sameAs: [
      'https://twitter.com/draftdev',
      'https://linkedin.com/company/draft-dev',
      'https://en.wikipedia.org/wiki/Content_marketing', // Topic authority
      'https://github.com/draft-dev', // If you have a GitHub presence
    ],

    // Enhanced expertise for AI understanding
    expertise: [
      'Technical Content Marketing',
      'Developer Relations',
      'Software Development Content',
      'API Documentation',
      'Technical Writing',
      'Content Strategy',
      'Developer Marketing',
      'DevOps Content',
      'Cloud Computing Content',
      'Software Engineering Content',
      'Data Engineering Content',
      'Technical Tutorials',
      'Developer Tools Marketing',
      'B2B SaaS Marketing',
      'Technical Blog Writing',
    ],

    // Enhanced knowsAbout for AI topic understanding
    knowsAbout: [
      {
        '@type': 'Thing',
        name: 'Technical Content Marketing',
        sameAs: 'https://en.wikipedia.org/wiki/Content_marketing',
      },
      {
        '@type': 'Thing',
        name: 'Developer Relations',
        sameAs: 'https://en.wikipedia.org/wiki/Developer_relations',
      },
      {
        '@type': 'Thing',
        name: 'Software Development',
        sameAs: 'https://en.wikipedia.org/wiki/Software_development',
      },
      {
        '@type': 'Thing',
        name: 'API Documentation',
      },
      {
        '@type': 'Thing',
        name: 'Technical Writing',
      },
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

// NEW: Service Schema for B2B optimization
export function generateServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://draft.dev/#service',
    name: 'Technical Content Marketing Services',
    description:
      'Expert technical content creation for developer audiences including blog posts, tutorials, documentation, and developer relations content',
    provider: {
      '@type': 'Organization',
      '@id': 'https://draft.dev/#organization',
    },
    serviceType: 'Content Marketing',
    category: 'B2B Marketing Services',
    audience: {
      '@type': 'Audience',
      audienceType: 'Technical Professionals',
    },
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

// NEW: Review Schema for testimonials
export function generateReviewSchema(
  testimonials: Array<{
    quote: string
    name: string
    role: string
    company: string
    rating?: number
  }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://draft.dev/#organization',
    review: testimonials.map((testimonial) => ({
      '@type': 'Review',
      reviewBody: testimonial.quote,
      author: {
        '@type': 'Person',
        name: testimonial.name,
        jobTitle: testimonial.role,
        worksFor: {
          '@type': 'Organization',
          name: testimonial.company,
        },
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: testimonial.rating || 5,
        bestRating: '5',
      },
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: testimonials.length,
      bestRating: '5',
    },
  }
}

// NEW: VideoObject Schema for video content
export function generateVideoSchema(
  videoUrl: string,
  title: string,
  description: string,
  uploadDate?: string,
  duration?: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: title,
    description: description,
    url: videoUrl,
    uploadDate: uploadDate || new Date().toISOString(),
    publisher: {
      '@type': 'Organization',
      '@id': 'https://draft.dev/#organization',
    },
    contentUrl: videoUrl,
    ...(duration && { duration: duration }), // ISO 8601 format like PT10M30S
    inLanguage: 'en-US',
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
