import FAQ from '@/components/global/faq'
import SocialProof from '@/components/media/social-proof'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import ServiceInfo from '@/components/page-components/developer-marketing/service-info'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Building and Scaling Developer Marketing',
  description:
    'Specialized developer marketing services to help you reach software engineers and technical decision makers through authentic, expert-driven content.',
  keywords:
    'developer marketing, marketing to developers, developer relations marketing, technical audience marketing',
  openGraph: {
    title: 'Building and Scaling Developer Marketing - Draft.dev',
    description:
      'Reach software engineers through authentic, expert-driven content.',
    url: 'https://draft.dev/developer-marketing',
    images: [
      {
        url: 'https://draft.dev/draft/og/developer_marketing_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Developer Marketing eBook',
      },
    ],
  },
  twitter: {
    title: 'Developer Marketing - Draft.dev',
    description: 'Reach technical decision makers effectively.',
    images: ['https://draft.dev/draft/og/developer_marketing_og_draft_dev.jpg'],
  },
  alternates: {
    canonical: 'https://draft.dev/developer-marketing',
  },
}
export default function DeveloperMarketing() {
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
