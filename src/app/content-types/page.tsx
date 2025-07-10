import FAQ from '@/components/global/faq'
import ServiceHeader from '@/components/global/headers/service-header'
import { LogosDark } from '@/components/media/logos-dark'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import Examples from '@/components/page-components/content-types/examples'
import ServiceInfo from '@/components/page-components/content-types/service-info'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technical Content Types',
  description:
    'Explore the various types of technical content we create: tutorials, blog posts, documentation, case studies, and more to reach your developer audience.',
  keywords:
    'technical content types, developer content formats, technical tutorials, technical blog posts, technical documentation',
  openGraph: {
    title: 'Technical Content Types - Draft.dev',
    description:
      'Tutorials, blog posts, documentation, and more for your developer audience.',
    url: 'https://draft.dev/content-types',
    images: [
      {
        url: 'https://draft.dev/draft/og/content_types_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Types of Technical Content We Create',
      },
    ],
  },
  twitter: {
    title: 'Technical Content Types - Draft.dev',
    description: 'Various content formats to reach your developer audience.',
    images: ['https://draft.dev/draft/og/content_types_og_draft_dev.jpg'],
  },
  alternates: {
    canonical: 'https://draft.dev/content-types',
  },
}
export default function ContentTypes() {
  return (
    <>
      <ServiceHeader
        title="We Are Able to Create Many Types of Content"
        primaryCTA={{
          text: 'Book a Discovery Call',
          href: '/call',
        }}
        secondaryCTA={{
          text: 'See Our Lead Generation Package',
          href: './#lead-generation-package',
        }}
        description="Explore the different content types we create for technical audiences."
      />
      <ServiceInfo />
      <Examples />
      <TestimonialsGroup />
      <LogosDark />
      <FAQ />
    </>
  )
}
