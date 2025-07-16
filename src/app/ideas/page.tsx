import FAQ from '@/components/global/faq'
import { LogosDark } from '@/components/media/logos-dark'
import SocialProof from '@/components/media/social-proof'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import ServiceInfo from '@/components/page-components/fifty-ideas.tsx/service-info'

import type { Metadata } from 'next'

export const ideasMetadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Technical Content Ideas - Draft.dev',
  description:
    'Get inspired with technical content ideas and topics that resonate with developer audiences. Discover trending topics in technical content marketing.',
  keywords:
    'technical content ideas, developer content topics, technical blog ideas, content inspiration for developers',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/ideas',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Technical Content Ideas - Draft.dev',
    description:
      'Get inspired with technical content ideas and topics that resonate with developer audiences. Discover trending topics in technical content marketing.',
    images: [
      {
        url: '/draft/og/ideas_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Technical Content Ideas and Inspiration',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical Content Ideas - Draft.dev',
    description:
      'Get inspired with technical content ideas and topics that resonate with developer audiences. Discover trending topics in technical content marketing.',
    images: ['/draft/og/ideas_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: { canonical: 'https://draft.dev/ideas' },
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

export default function Ideas() {
  return (
    <>
      <ServiceInfo />
      <SocialProof />
      <TestimonialsGroup />
      <LogosDark />
      <FAQ />
    </>
  )
}
