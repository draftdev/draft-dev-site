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
  // Yoast SEO fields (using metaValue format)
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

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.seoDesc || post.excerpt || '',
    image: {
      '@type': 'ImageObject',
      url:
        post.featuredImage?.node.sourceUrl ||
        'https://draft.dev/site/med-landscape/write_draft_dev.jpg',
      width: 1200,
      height: 630,
      alt: post.title,
    },
    datePublished: post.date,
    dateModified: post.modified || post.date,
    author: {
      '@type': 'Organization',
      name: 'Draft.dev',
      description:
        'Technical content marketing agency helping companies reach developers, DevOps practitioners, and technical decision-makers',
      url: 'https://draft.dev',
      logo: {
        '@type': 'ImageObject',
        url: 'https://draft.dev/draft/logos/draftlogo_main_filled.svg',
        width: 180,
        height: 60,
      },
      sameAs: [
        'https://twitter.com/draftdev',
        'https://linkedin.com/company/draft-dev',
        'https://github.com/draftdev',
      ],
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
    },
    publisher: {
      '@type': 'Organization',
      name: 'Draft.dev',
      description:
        'We help Marketing and Developer Relations teams in tech companies drive awareness, capture leads, and build trust through expert technical content',
      logo: {
        '@type': 'ImageObject',
        url: 'https://draft.dev/draft/logos/draftlogo_main_filled.svg',
        width: 180,
        height: 60,
      },
      url: 'https://draft.dev',
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
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://draft.dev/learn/${slug}`,
    },
    // AI-friendly additions
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
      },
      {
        '@type': 'Thing',
        name: 'Software Development',
      },
      {
        '@type': 'Thing',
        name: 'Developer Relations',
      },
    ],
    keywords:
      post.seoKeyword || post.customFields?.targetKeywords?.join(', ') || '',
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
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://draft.dev',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://draft.dev/learn',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: `https://draft.dev/learn/${slug}`,
      },
    ],
  }
}

export function generateBlogSchema(posts: Post[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Draft.dev Blog - Technical Content Marketing Resources',
    description:
      'Expert insights on technical content marketing, developer relations, software development, and content strategy for reaching technical audiences.',
    url: 'https://draft.dev/learn',
    inLanguage: 'en-US',
    publisher: {
      '@type': 'Organization',
      name: 'Draft.dev',
      description:
        'Technical content marketing agency specializing in developer-focused content creation',
      logo: {
        '@type': 'ImageObject',
        url: 'https://draft.dev/draft/logos/draftlogo_main_filled.svg',
        width: 180,
        height: 60,
      },
      url: 'https://draft.dev',
      foundingDate: '2020',
      sameAs: [
        'https://twitter.com/draftdev',
        'https://linkedin.com/company/draft-dev',
        'https://github.com/draftdev',
      ],
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
    blogPost: posts.slice(0, 10).map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `https://draft.dev/learn/${post.slug}`,
      datePublished: post.date,
      description: post.excerpt || '',
      image:
        post.featuredImage?.node.sourceUrl ||
        'https://draft.dev/site/med-landscape/write_draft_dev.jpg',
      author: {
        '@type': 'Organization',
        name: 'Draft.dev',
      },
    })),
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Draft.dev',
    alternateName: 'Draft',
    description:
      'Technical content marketing agency helping Marketing and Developer Relations teams in tech companies drive awareness, capture leads, and build trust through expert-driven content.',
    url: 'https://draft.dev',
    logo: {
      '@type': 'ImageObject',
      url: 'https://draft.dev/draft/logos/draftlogo_main_filled.svg',
      width: 180,
      height: 60,
      caption: 'Draft.dev Logo',
    },
    image: 'https://draft.dev/site/med-landscape/write_draft_dev.jpg',
    foundingDate: '2020',
    founder: {
      '@type': 'Person',
      name: 'Karl Hughes',
      jobTitle: 'CEO & Founder',
      description:
        'Former CTO turned content marketing entrepreneur, helping tech companies create authentic technical content that resonates with developers',
    },
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: '50-100',
    },
    industry: 'Marketing and Content Creation',
    naics: '541613', // Marketing Consulting Services
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
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Content Strategy Consulting',
            description: 'Strategic planning for technical content marketing',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Lead Generation Content',
            description:
              'Comprehensive content campaigns designed to drive leads',
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
    mission:
      'To help tech companies create authentic, expert-driven content that resonates with technical audiences and drives business results',
  }
}

function estimateWordCount(content: string): number {
  if (!content) return 0
  // Remove HTML tags and count words
  const textContent = content.replace(/<[^>]*>/g, ' ')
  const words = textContent.split(/\s+/).filter((word) => word.length > 0)
  return words.length
}

// Helper function for generating website schema
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
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
      name: 'Draft.dev',
    },
    copyrightYear: 2020,
    inLanguage: 'en-US',
  }
}
