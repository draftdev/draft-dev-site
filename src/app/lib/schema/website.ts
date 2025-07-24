import { cache } from 'react'
import { PUBLISHER_REF } from './constants'

export const generateWebSiteSchema = cache(() => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://draft.dev/#webSite',
    name: 'Draft.dev',
    description:
      'Technical content marketing agency helping tech companies reach developers through expert-driven content. Brought to you by Draft.dev.',
    url: 'https://draft.dev',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://draft.dev/learn?search={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
    publisher: { '@id': PUBLISHER_REF, '@type': 'Organization' },

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
})
