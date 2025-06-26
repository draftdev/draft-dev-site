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

function stripHtmlTags(html: string): string {
  if (!html) return ''
  return html
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/&nbsp;/g, ' ') // Replace non-breaking spaces
    .replace(/&amp;/g, '&') // Decode ampersands
    .replace(/&lt;/g, '<') // Decode less than
    .replace(/&gt;/g, '>') // Decode greater than
    .replace(/&quot;/g, '"') // Decode quotes
    .replace(/&#39;/g, "'") // Decode apostrophes
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim() // Remove leading/trailing whitespace
}

export function generatePersonAuthor(post: Post) {
  const authorName = post.originalAuthor || post.author?.node?.name

  if (!authorName || authorName === 'Draft.dev Team') {
    return PUBLISHER_REF
  }

  const baseAuthor = {
    '@type': 'Person',
    name: authorName,
    jobTitle:
      post.customFields?.authorCredentials || 'Technical Content Writers',
    description: `Technical content expert specializing in ${post.customFields?.targetKeywords?.slice(0, 3).join(', ') || 'software development'}`,
    worksFor: PUBLISHER_REF,
    url: 'https://draft.dev/about',
    knowsAbout: post.customFields?.targetKeywords || [
      'Technical Content Marketing',
      'Software Development',
    ],
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
      text: faq.answer,
    },
  }))
}

export function generateArticleSchema(post: Post, slug: string) {
  const wordCount = estimateWordCount(post.content)
  const readingTime =
    post.customFields?.readingTime || Math.ceil(wordCount / 200)
  const publishedDate = post.date
    ? new Date(post.date).toISOString()
    : new Date().toISOString()
  const modifiedDate = post.modified
    ? new Date(post.modified).toISOString()
    : publishedDate

  const cleanDescription = stripHtmlTags(post.seoDesc || post.excerpt || '')

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

  // Add FAQ schema as mainEntity if FAQs exist
  if (post.customFields?.faqQuestions?.length) {
    articleSchema.mainEntity = generateFAQSchema(post.customFields.faqQuestions)
  }

  if (post.customFields?.videoUrl) {
    articleSchema.video = generateVideoSchema(
      post.customFields.videoUrl,
      post.title,
      cleanDescription,
      publishedDate,
      undefined, // duration - optional
      undefined, // thumbnailUrl - will be auto-generated from YouTube ID
    )
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

    blogPost: posts.slice(0, 200).map((post) => ({
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
    '@type': ['Organization', 'ProfessionalService', 'EducationalOrganization'],
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

    knowsAbout: [
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
      {
        '@type': 'Thing',
        name: 'API Documentation',
        url: 'https://draft.dev/learn',
      },
      {
        '@type': 'Thing',
        name: 'Technical Writing',
        url: 'https://draft.dev/learn',
      },
      {
        '@type': 'Thing',
        name: 'Developer Marketing',
        url: 'https://draft.dev/learn',
      },
      {
        '@type': 'Thing',
        name: 'DevOps Content',
        url: 'https://draft.dev/learn',
      },
      {
        '@type': 'Thing',
        name: 'Cloud Computing Content',
        url: 'https://draft.dev/learn',
      },
      {
        '@type': 'Thing',
        name: 'Software Engineering Content',
        url: 'https://draft.dev/learn',
      },
      {
        '@type': 'Thing',
        name: 'Data Engineering Content',
        url: 'https://draft.dev/learn',
      },
      {
        '@type': 'Thing',
        name: 'B2B SaaS Marketing',
        url: 'https://draft.dev/learn',
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

    slogan: 'A Content Creation Agency for Technical Companies',
    subjectOf: [
      {
        '@type': 'CreativeWork',
        name: 'Testimonial from Rich Burroughs',
        text: "Having draft.dev source quality technical content for the Loft Labs blog has been a competitive advantage. It's given us a steadier flow of content, which has helped our brand's visibility, and some of the posts are among the most popular ones we've published.",
        author: {
          '@type': 'Person',
          name: 'Rich Burroughs',
          jobTitle: 'Developer Advocate',
          worksFor: {
            '@type': 'Organization',
            name: 'Loft Labs',
          },
        },
      },
      {
        '@type': 'CreativeWork',
        name: 'Testimonial from Adam Gordon Bell',
        text: "It's difficult to find an agency with enough high-quality subject matter expert writers to build up the content pipeline that Draft.dev gives you. It's a shortcut to building an in-house writing team.",
        author: {
          '@type': 'Person',
          name: 'Adam Gordon Bell',
          jobTitle: 'Director of Developer Relations',
          worksFor: {
            '@type': 'Organization',
            name: 'Earthly',
          },
        },
      },
      {
        '@type': 'CreativeWork',
        name: 'Testimonial from Henry Poydar',
        text: 'Draft.dev has helped us create high-quality content that resonates with our audience on a regular basis. They have helped us double our audience, attract more trial users, and increase our trial conversion rate.',
        author: {
          '@type': 'Person',
          name: 'Henry Poydar',
          jobTitle: 'Founder & CEO',
          worksFor: {
            '@type': 'Organization',
            name: 'Status Hero',
          },
        },
      },
      {
        '@type': 'CreativeWork',
        name: 'Testimonial from Rahul Patwardhan',
        text: 'Content is one of the biggest and best channels you can invest in. And if you want to quickly scale without compromising the quality and expertise, Draft.dev is the way to go.',
        author: {
          '@type': 'Person',
          name: 'Rahul Patwardhan',
          jobTitle: 'Senior Director, Demand Generation',
          worksFor: {
            '@type': 'Organization',
            name: 'Loft Labs',
          },
        },
      },
      {
        '@type': 'CreativeWork',
        name: 'Testimonial from Emily Blitstein',
        text: "I was thoroughly impressed by the smooth onboarding and ability to adapt to our product suite. Draft.dev's attention to detail and dedication to aligning content with our brand have significantly impacted our developer-focused content strategy. The high-quality technical blog posts have been well-received internally, and we're excited to see the full impact on our content program.",
        author: {
          '@type': 'Person',
          name: 'Emily Blitstein',
          jobTitle: 'Sr. Content Marketing Manager',
          worksFor: {
            '@type': 'Organization',
            name: 'Sinch Mailgun',
          },
        },
      },
      {
        '@type': 'CreativeWork',
        name: 'Testimonial from Jenny Medeiros',
        text: 'Draft.dev is our go-to for practical, well-written content that actually resonates with technical audiences and helps us inspire the developer community. It has been invaluable (for our internal team and my sanity) to have their brilliant writers, editors, and PMs in our content corner!',
        author: {
          '@type': 'Person',
          name: 'Jenny Medeiros',
          jobTitle: 'Head of Content',
          worksFor: {
            '@type': 'Organization',
            name: 'Redpanda',
          },
        },
      },
      {
        '@type': 'CreativeWork',
        name: 'Testimonial from Abhishek Iyer',
        text: 'Partnering with Draft.dev has accelerated our technical content output while also extending the bandwidth of our developer relations team to focus more on core product activities. It is truly high-quality content written by devs for devs, helping devs in the process.',
        author: {
          '@type': 'Person',
          name: 'Abhishek Iyer',
          jobTitle: 'Director, Marketing and Growth',
          worksFor: {
            '@type': 'Organization',
            name: 'Descope',
          },
        },
      },
      {
        '@type': 'CreativeWork',
        name: 'Testimonial from Randall Degges',
        text: 'Draft.dev has been an amazing partner, helping us scale our content program by creating thoughtful and technically-sound developer content and training materials. We’re constantly iterating to build the best educational materials for developer security and Draft.dev has been instrumental in helping us realize these ambitions.',
        author: {
          '@type': 'Person',
          name: 'Randall Degges',
          jobTitle: 'Head of Developer & Security Relations',
          worksFor: {
            '@type': 'Organization',
            name: 'Snyk',
          },
        },
      },
      {
        '@type': 'CreativeWork',
        name: 'Testimonial from Robert Gibb',
        text: 'In a matter of weeks, our referral traffic and organic keyword rankings increased by 3x. One post also hit Hacker News which resulted in 5 demo requests in a single day!',
        author: {
          '@type': 'Person',
          name: 'Robert Gibb',
          jobTitle: 'Content Marketing',
          worksFor: {
            '@type': 'Organization',
            name: 'fabric',
          },
        },
      },
      {
        '@type': 'CreativeWork',
        name: 'Testimonial from Tony Chan',
        text: "We've seen amazing results with the technical content produced from the team at Draft.dev. The attention to technical detail from start to finish has been a huge addition to our content.",
        author: {
          '@type': 'Person',
          name: 'Tony Chan',
          jobTitle: 'Co-Founder & CEO',
          worksFor: {
            '@type': 'Organization',
            name: 'CloudForecast',
          },
        },
      },
    ],
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

    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Technical Content Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Technical Blog Writing',
            description: 'Expert-written technical blog posts and tutorials',
            category: 'Content Creation',
            provider: PUBLISHER_REF,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Developer Relations Content',
            description:
              'Content strategy and creation for developer relations teams',
            category: 'Developer Marketing',
            provider: PUBLISHER_REF,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Lead Generation Campaigns',
            description:
              'Comprehensive content campaigns designed to drive qualified leads',
            category: 'Lead Generation',
            provider: PUBLISHER_REF,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Technical Tutorials',
            description: 'Step-by-step technical tutorials and guides',
            category: 'Technical Writing',
            provider: PUBLISHER_REF,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'API Documentation',
            description: 'Comprehensive API documentation and developer guides',
            category: 'Documentation',
            provider: PUBLISHER_REF,
          },
        },
      ],
    },
  }
}

export function generateTestimonialSchema(
  testimonials: Array<{
    quote: string
    name: string
    role: string
    company: string
  }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': 'https://draft.dev/#testimonials',
    name: 'Client Testimonials',
    description:
      'What our clients say about Draft.dev technical content marketing services',
    itemListElement: testimonials.map((testimonial, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Quotation',
        '@id': `https://draft.dev/#testimonial-${index}`,
        text: testimonial.quote,
        author: {
          '@type': 'Person',
          name: testimonial.name,
          jobTitle: testimonial.role,
          worksFor: {
            '@type': 'Organization',
            name: testimonial.company,
          },
        },
        about: {
          '@type': 'Organization',
          '@id': 'https://draft.dev/#organization',
        },
      },
    })),
  }
}

export function generateVideoSchema(
  videoUrl: string,
  title: string,
  description: string,
  uploadDate?: string,
  duration?: string,
  thumbnailUrl?: string,
) {
  function getVideoId(url: string): string | null {
    // Enhanced regex to catch more YouTube URL formats
    const youtubeRegex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    const match = url.match(youtubeRegex)
    return match ? match[1] : null
  }

  function getVimeoId(url: string): string | null {
    const vimeoRegex =
      /vimeo\.com\/(?:channels\/|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/
    const match = url.match(vimeoRegex)
    return match ? match[3] : null
  }

  const videoId = getVideoId(videoUrl)
  const vimeoId = getVimeoId(videoUrl)

  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: title,
    description: stripHtmlTags(description),
    uploadDate: uploadDate || new Date().toISOString(),
    publisher: PUBLISHER_REF,
    inLanguage: 'en-US',
  }

  if (videoId) {
    schema.embedUrl = `https://www.youtube.com/embed/${videoId}`
    schema.contentUrl = `https://www.youtube.com/watch?v=${videoId}`
    schema.url = videoUrl

    schema.thumbnailUrl = [
      `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
      `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
    ]

    // Set thumbnail dimensions for schema
    schema.thumbnail = {
      '@type': 'ImageObject',
      url: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
      width: 480,
      height: 360,
    }
  } else if (vimeoId) {
    schema.embedUrl = `https://player.vimeo.com/video/${vimeoId}`
    schema.contentUrl = `https://vimeo.com/${vimeoId}`
    schema.url = videoUrl

    schema.thumbnailUrl = thumbnailUrl || `https://vumbnail.com/${vimeoId}.jpg`

    if (thumbnailUrl) {
      schema.thumbnail = {
        '@type': 'ImageObject',
        url: thumbnailUrl,
        width: 640,
        height: 360,
      }
    }
  } else {
    schema.contentUrl = videoUrl
    schema.url = videoUrl
    schema.thumbnailUrl = thumbnailUrl || DEFAULT_IMAGE_URL

    if (thumbnailUrl) {
      schema.thumbnail = {
        '@type': 'ImageObject',
        url: thumbnailUrl,
      }
    }
  }

  if (duration) {
    if (duration.startsWith('PT')) {
      schema.duration = duration
    } else {
      const totalSeconds = parseInt(duration)
      const minutes = Math.floor(totalSeconds / 60)
      const seconds = totalSeconds % 60
      schema.duration = `PT${minutes}M${seconds}S`
    }
  }

  return schema
}

export function getYouTubeThumbnail(
  videoUrl: string,
  quality: 'maxres' | 'hq' | 'mq' | 'sd' = 'hq',
): string | null {
  const videoId = videoUrl.match(
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/,
  )?.[1]

  if (!videoId) return null

  const qualityMap = {
    maxres: 'maxresdefault.jpg',
    hq: 'hqdefault.jpg',
    mq: 'mqdefault.jpg',
    sd: 'sddefault.jpg',
  }

  return `https://i.ytimg.com/vi/${videoId}/${qualityMap[quality]}`
}

export async function validateYouTubeThumbnail(
  videoId: string,
): Promise<string> {
  const thumbnailQualities = [
    'maxresdefault.jpg',
    'hqdefault.jpg',
    'mqdefault.jpg',
    'sddefault.jpg',
  ]

  for (const quality of thumbnailQualities) {
    const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/${quality}`

    try {
      const response = await fetch(thumbnailUrl, { method: 'HEAD' })
      if (response.ok) {
        return thumbnailUrl
      }
    } catch (error) {
      console.warn(`Failed to validate thumbnail: ${thumbnailUrl}`)
    }
  }

  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
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

function estimateWordCount(content?: string): number {
  if (!content) return 0
  const textContent = content.replace(/<[^>]*>/g, ' ')
  const words = textContent.split(/\s+/).filter((word) => word.length > 0)
  return words.length
}
