// app/lib/schema.ts - Complete Fixed Schema for Draft.dev
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

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `https://draft.dev/learn/${slug}#article`,
    headline: post.title,
    description: post.seoDesc || post.excerpt || '',

    // Required image object with proper structure
    image: {
      '@type': 'ImageObject',
      '@id': `https://draft.dev/learn/${slug}#primaryimage`,
      url:
        post.featuredImage?.node.sourceUrl ||
        'https://draft.dev/site/med-landscape/write_draft_dev.jpg',
      contentUrl:
        post.featuredImage?.node.sourceUrl ||
        'https://draft.dev/site/med-landscape/write_draft_dev.jpg',
      width: 1200,
      height: 630,
      alt: post.title,
    },

    // Required dates in proper ISO format
    datePublished: publishedDate,
    dateModified: modifiedDate,

    // Required URL
    url: `https://draft.dev/learn/${slug}`,

    // Required main entity
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://draft.dev/learn/${slug}`,
    },

    // Enhanced author as organization
    author: {
      '@type': 'Organization',
      '@id': 'https://draft.dev/#organization',
      name: 'Draft.dev',
      url: 'https://draft.dev',
      logo: {
        '@type': 'ImageObject',
        '@id': 'https://draft.dev/#logo',
        url: 'https://draft.dev/draft/logos/draftlogo_main_filled.svg',
        contentUrl: 'https://draft.dev/draft/logos/draftlogo_main_filled.svg',
        width: 180,
        height: 60,
      },
      description:
        'Technical content marketing agency helping companies reach developers, DevOps practitioners, and technical decision-makers',
      foundingDate: '2020',
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        value: '50-100',
      },
      knowsAbout: [
        'Technical Content Marketing',
        'Developer Relations',
        'Software Development',
        'DevOps',
        'API Documentation',
        'Technical Writing',
        'Content Strategy',
        'Developer Marketing',
        'Cloud Computing',
        'Software Engineering',
        'Data Engineering',
        'Technical Tutorials',
        'Developer Tools Marketing',
        'B2B SaaS Marketing',
      ],
      areaServed: 'Worldwide',
      serviceType: [
        'Technical Content Creation',
        'Developer Content Marketing',
        'Technical Blog Writing',
        'API Documentation',
        'Tutorial Development',
        'Content Strategy Consulting',
      ],
      sameAs: [
        'https://twitter.com/draftdev',
        'https://linkedin.com/company/draft-dev',
        'https://github.com/draftdev',
      ],
    },

    // Required publisher (must be organization for articles)
    publisher: {
      '@type': 'Organization',
      '@id': 'https://draft.dev/#organization',
      name: 'Draft.dev',
      url: 'https://draft.dev',
      logo: {
        '@type': 'ImageObject',
        '@id': 'https://draft.dev/#logo',
        url: 'https://draft.dev/draft/logos/draftlogo_main_filled.svg',
        contentUrl: 'https://draft.dev/draft/logos/draftlogo_main_filled.svg',
        width: 180,
        height: 60,
      },
      description:
        'We help Marketing and Developer Relations teams in tech companies drive awareness, capture leads, and build trust through expert technical content',
      sameAs: [
        'https://twitter.com/draftdev',
        'https://linkedin.com/company/draft-dev',
        'https://github.com/draftdev',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        url: 'https://draft.dev/call',
        availableLanguage: 'English',
      },
    },

    // AI-friendly additions
    articleSection: post.categories?.[0]?.name || 'Technical Content Marketing',
    wordCount: wordCount,
    timeRequired: `PT${readingTime}M`,
    inLanguage: 'en-US',
    isAccessibleForFree: true,

    // Audience specification for better targeting
    audience: {
      '@type': 'Audience',
      audienceType:
        'Software Developers, DevOps Engineers, Technical Decision Makers',
    },

    // About topics for better categorization
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

    // Keywords for AI optimization (prioritize Yoast data)
    keywords:
      post.seoKeyword ||
      post.customFields?.targetKeywords?.join(', ') ||
      'technical content marketing, developer relations',

    // Add FAQ schema if available
    ...(post.customFields?.faqQuestions &&
      post.customFields.faqQuestions.length > 0 && {
        mainEntity: generateFAQSchema(post.customFields.faqQuestions),
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

    // Enhanced publisher information
    publisher: {
      '@type': 'Organization',
      '@id': 'https://draft.dev/#organization',
      name: 'Draft.dev',
      description:
        'Technical content marketing agency specializing in developer-focused content creation',
      url: 'https://draft.dev',
      logo: {
        '@type': 'ImageObject',
        '@id': 'https://draft.dev/#logo',
        url: 'https://draft.dev/draft/logos/draftlogo_main_filled.svg',
        contentUrl: 'https://draft.dev/draft/logos/draftlogo_main_filled.svg',
        width: 180,
        height: 60,
      },
      foundingDate: '2020',
      sameAs: [
        'https://twitter.com/draftdev',
        'https://linkedin.com/company/draft-dev',
        'https://github.com/draftdev',
      ],
    },

    // Target audience
    audience: {
      '@type': 'Audience',
      audienceType:
        'Software Developers, DevOps Engineers, Technical Marketers, Developer Relations Professionals',
    },

    // About topics
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

    // Blog posts collection
    blogPost: posts.slice(0, 10).map((post) => ({
      '@type': 'BlogPosting',
      '@id': `https://draft.dev/learn/${post.slug}#article`,
      headline: post.title,
      url: `https://draft.dev/learn/${post.slug}`,
      datePublished: post.date ? new Date(post.date).toISOString() : undefined,
      description: post.seoDesc || post.excerpt || '',
      image:
        post.featuredImage?.node.sourceUrl ||
        'https://draft.dev/site/med-landscape/write_draft_dev.jpg',
      author: {
        '@type': 'Organization',
        '@id': 'https://draft.dev/#organization',
        name: 'Draft.dev',
      },
    })),
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

    // Enhanced logo with proper structure
    logo: {
      '@type': 'ImageObject',
      '@id': 'https://draft.dev/#logo',
      url: 'https://draft.dev/draft/logos/draftlogo_main_filled.svg',
      contentUrl: 'https://draft.dev/draft/logos/draftlogo_main_filled.svg',
      width: 180,
      height: 60,
      caption: 'Draft.dev Logo',
    },

    // Additional images
    image: [
      {
        '@type': 'ImageObject',
        url: 'https://draft.dev/site/med-landscape/write_draft_dev.jpg',
        width: 1200,
        height: 630,
      },
    ],

    foundingDate: '2020',

    // Founder information
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

    industry: 'Marketing and Content Creation',
    naics: '541613', // Marketing Consulting Services

    // Address information
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

    // Contact information
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        url: 'https://draft.dev/call',
        availableLanguage: 'English',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'Sales',
        url: 'https://draft.dev/call',
        availableLanguage: 'English',
      },
    ],

    // Social media and external links
    sameAs: [
      'https://twitter.com/draftdev',
      'https://linkedin.com/company/draft-dev',
      'https://github.com/draftdev',
      'https://www.crunchbase.com/organization/draft-dev',
    ],

    // Expertise and knowledge areas
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

    // Service offerings
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

    // Awards and achievements
    award: [
      'Trusted by 100+ tech companies',
      '3000+ content pieces published',
      '300+ subject matter experts in network',
    ],

    slogan: 'Technical Content Marketing by Subject Matter Experts',
    mission:
      'To help tech companies create authentic, expert-driven content that resonates with technical audiences and drives business results',
  }
}

// Helper function for generating website schema
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://draft.dev/#website',
    name: 'Draft.dev',
    description:
      'Technical content marketing agency helping tech companies reach developers through expert-driven content',
    url: 'https://draft.dev',

    // Search functionality
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://draft.dev/learn?search={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },

    // Publisher reference
    publisher: {
      '@type': 'Organization',
      '@id': 'https://draft.dev/#organization',
      name: 'Draft.dev',
    },

    copyrightYear: 2020,
    inLanguage: 'en-US',

    // About the website
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
  // Remove HTML tags and count words
  const textContent = content.replace(/<[^>]*>/g, ' ')
  const words = textContent.split(/\s+/).filter((word) => word.length > 0)
  return words.length
}
