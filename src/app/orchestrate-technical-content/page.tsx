import FAQ from '@/components/global/faq'
import SocialProof from '@/components/media/social-proof'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import ServiceInfo from '@/components/page-components/orchestrate-technical-content/service-info'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Orchestrate Technical Content',
  description:
    'Learn how to orchestrate and manage technical content at scale. Strategic planning and execution for technical content marketing programs.',
  keywords:
    'orchestrate technical content, content orchestration, technical content management, content strategy execution',
  openGraph: {
    title: 'How to Orchestrate Technical Content - Draft.dev',
    description:
      'Strategic planning and execution for technical content at scale.',
    url: 'https://draft.dev/orchestrate-technical-content',
    images: [
      {
        url: 'https://draft.dev/draft/og/orchestrate_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Orchestrate Technical Content at Scale',
      },
    ],
  },
  twitter: {
    title: 'Orchestrate Technical Content - Draft.dev',
    description: 'Manage technical content at scale.',
    images: ['https://draft.dev/draft/og/orchestrate_og_draft_dev.jpg'],
  },
  alternates: {
    canonical: 'https://draft.dev/orchestrate-technical-content',
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
