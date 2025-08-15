import FAQ from '@/components/global/faq'
import ServiceHeader from '@/components/global/headers/service-header'
import { LogosDark } from '@/components/media/logos-dark'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import Examples from '@/components/page-components/content-types/examples'
import ServiceInfo from '@/components/page-components/content-types/service-info'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Technical Content Types - Draft.dev',
  description:
    'Explore the various types of technical content we create: tutorials, blog posts, documentation, case studies, and more to reach your developer audience.',
  keywords:
    'technical content types, developer content formats, technical tutorials, technical blog posts, technical documentation',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/content-types',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Technical Content Types - Draft.dev',
    description:
      'Explore the various types of technical content we create: tutorials, blog posts, documentation, case studies, and more to reach your developer audience.',
    images: [
      {
        url: '/draft/og/content_types_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Types of Technical Content We Create',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical Content Types - Draft.dev',
    description:
      'Explore the various types of technical content we create: tutorials, blog posts, documentation, case studies, and more to reach your developer audience.',
    images: ['/draft/og/content_types_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: { canonical: 'https://draft.dev/content-types' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
          text: 'See How We Work',
          href: './#how-we-work',
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
