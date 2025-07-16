import FAQ from '@/components/global/faq'
import SocialProof from '@/components/media/social-proof'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import ServiceInfo from '@/components/page-components/orchestrate-technical-content/service-info'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'How to Orchestrate Technical Content - Draft.dev',
  description:
    'Learn how to orchestrate and manage technical content at scale. Strategic planning and execution for technical content marketing programs.',
  keywords:
    'orchestrate technical content, content orchestration, technical content management, content strategy execution',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/orchestrate-technical-content',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'How to Orchestrate Technical Content - Draft.dev',
    description:
      'Learn how to orchestrate and manage technical content at scale. Strategic planning and execution for technical content marketing programs.',
    images: [
      {
        url: '/draft/og/orchestrate_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Orchestrate Technical Content at Scale',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Orchestrate Technical Content - Draft.dev',
    description:
      'Learn how to orchestrate and manage technical content at scale. Strategic planning and execution for technical content marketing programs.',
    images: ['/draft/og/orchestrate_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: { canonical: 'https://draft.dev/orchestrate-technical-content' },
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

export default function OrchestrateTechnicalContent() {
  return (
    <>
      <ServiceInfo />
      <SocialProof />
      <TestimonialsGroup />
      <Testimonial
        quote="In a matter of weeks, our referral traffic and organic keyword rankings increased by 3x. One post also hit Hacker News which resulted in 5 demo requests in a single day!"
        name="Robert Gibb"
        role="Content Marketing Manager"
        company="fabric"
        imageSrc="/media/testimonials-lg/robert_gibb_fabric_draft_dev.jpg"
        imageAlt="Robert Gibb"
      />
      <FAQ />
    </>
  )
}
