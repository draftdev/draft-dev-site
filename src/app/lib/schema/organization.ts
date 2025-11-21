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
      url: 'https://draft.dev/draft/logos/draftlogo_badge_filled.svg',
      width: 200,
      height: 200,
    },
    image: {
      '@type': 'ImageObject',
      url: DEFAULT_IMAGE_URL,
      width: 1200,
      height: 630,
    },
    foundingDate: '2020',
    founder: {
      '@type': 'Person',
      name: 'Karl Hughes',
      jobTitle: 'CEO & Founder',
      description:
        'Former CTO turned content marketing entrepreneur, helping tech companies create authentic technical content that resonates with developers.',
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
        name: 'Developer Relations',
        sameAs: 'https://en.wikipedia.org/wiki/Developer_relations',
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
  }
})

export const generateServiceSchema = cache(() => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://draft.dev/#service',
    name: 'Technical Content Marketing Services',
    description:
      'Expert technical content creation for developer audiences including blog posts, tutorials, documentation, and developer relations content.',
    provider: { '@id': PUBLISHER_REF, '@type': 'Organization' },
    serviceType: 'MarketingService',
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
            provider: { '@id': PUBLISHER_REF, '@type': 'Organization' },
            areaServed: 'Worldwide',
            audience: TECHNICAL_AUDIENCE,
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
            provider: { '@id': PUBLISHER_REF, '@type': 'Organization' },
            areaServed: 'Worldwide',
            audience: TECHNICAL_AUDIENCE,
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
            provider: { '@id': PUBLISHER_REF, '@type': 'Organization' },
            areaServed: 'Worldwide',
            audience: TECHNICAL_AUDIENCE,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Technical Tutorials',
            description: 'Step-by-step technical tutorials and guides',
            category: 'Technical Writing',
            provider: { '@id': PUBLISHER_REF, '@type': 'Organization' },
            areaServed: 'Worldwide',
            audience: TECHNICAL_AUDIENCE,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'API Documentation',
            description: 'Comprehensive API documentation and developer guides',
            category: 'Documentation',
            provider: { '@id': PUBLISHER_REF, '@type': 'Organization' },
            areaServed: 'Worldwide',
            audience: TECHNICAL_AUDIENCE,
          },
        },
      ],
    },
  }
})
