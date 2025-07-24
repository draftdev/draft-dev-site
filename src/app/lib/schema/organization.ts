import { cache } from 'react'
import {
  DEFAULT_IMAGE_URL,
  PUBLISHER_REF,
  TECHNICAL_AUDIENCE,
} from './constants'

export const generateOrganizationSchema = cache(() => {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
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
})

export const generateServiceSchema = cache(() => {
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
})
