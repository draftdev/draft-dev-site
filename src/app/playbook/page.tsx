import FAQ from '@/components/global/faq'
import SocialProof from '@/components/media/social-proof'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import ServiceInfo from '@/components/page-components/playbook/service-info'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technical Content Marketing Playbook',
  description:
    'Download our Technical Marketing Playbook: Learn everything you need to produce high-quality technical marketing content.',
  keywords:
    'technical content marketing playbook, content marketing guide, technical writing resources, developer marketing playbook',
  openGraph: {
    title: 'Technical Content Marketing Playbook - Draft.dev',
    description:
      'Learn everything you need to produce high-quality technical marketing content.',
    url: 'https://draft.dev/playbook',
    images: [
      {
        url: 'https://draft.dev/draft/og/playbook_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Technical Content Marketing eBook',
      },
    ],
  },
  twitter: {
    title: 'Technical Content Playbook - Draft.dev',
    description: 'Your guide to high-quality technical marketing content.',
    images: ['https://draft.dev/draft/og/playbook_og_draft_dev.jpg'],
  },
  alternates: {
    canonical: 'https://draft.dev/playbook',
  },
}

export default function Playbook() {
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
