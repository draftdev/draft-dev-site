import FAQ from '@/components/global/faq'
import { LogosDark } from '@/components/media/logos-dark'
import SocialProof from '@/components/media/social-proof'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import ServiceInfo from '@/components/page-components/fifty-ideas.tsx/service-info'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technical Content Ideas',
  description:
    'Get inspired with technical content ideas and topics that resonate with developer audiences. Discover trending topics in technical content marketing.',
  keywords:
    'technical content ideas, developer content topics, technical blog ideas, content inspiration for developers',
  openGraph: {
    title: 'Technical Content Ideas - Draft.dev',
    description:
      'Content ideas and topics that resonate with developer audiences.',
    url: 'https://draft.dev/ideas',
    images: [
      {
        url: 'https://draft.dev/draft/og/ideas_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Technical Content Ideas and Inspiration',
      },
    ],
  },
  twitter: {
    title: 'Technical Content Ideas - Draft.dev',
    description: 'Trending topics in technical content marketing.',
    images: ['https://draft.dev/draft/og/ideas_og_draft_dev.jpg'],
  },
  alternates: {
    canonical: 'https://draft.dev/ideas',
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
