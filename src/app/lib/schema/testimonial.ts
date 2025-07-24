import { cache } from 'react'
import { PUBLISHER_REF } from './constants'

export const generateTestimonialSchema = cache(
  (
    testimonials: Array<{
      quote: string
      name: string
      role: string
      company: string
    }>,
  ) => {
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
          about: { '@id': PUBLISHER_REF, '@type': 'Organization' },
        },
      })),
    }
  },
)
