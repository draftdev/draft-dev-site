import FAQ from '@/components/global/faq'
import SocialProof from '@/components/media/social-proof'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import ServiceInfo from '@/components/page-components/content-marketing-engine/service-info'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Content Marketing Engine',
  description:
    "Transform your technical content marketing with Draft.dev's proven content marketing engine designed to drive consistent results for tech companies.",
  keywords:
    'content marketing engine, technical content automation, content marketing system, scalable content marketing',
  openGraph: {
    title: 'Content Marketing Engine - Draft.dev',
    description:
      "Transform your technical content marketing with Draft.dev's proven content marketing engine.",
    url: 'https://draft.dev/content-marketing-engine',
    images: [
      {
        url: 'https://draft.dev/draft/og/content_engine_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Content Marketing Engine for Tech Companies',
      },
    ],
  },
  twitter: {
    title: 'Content Marketing Engine - Draft.dev',
    description:
      'Transform your technical content marketing with our proven content engine.',
    images: ['https://draft.dev/draft/og/content_engine_og_draft_dev.jpg'],
  },
  alternates: {
    canonical: 'https://draft.dev/content-marketing-engine',
  },
}

export default function ContentMarketingEngine() {
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
