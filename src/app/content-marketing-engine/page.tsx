import SocialProof from '@/components/media/social-proof'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import ServiceInfo from '@/components/page-components/content-marketing-engine/service-info'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Set Up a Content Marketing Engine in the Age of AI - Draft.dev',
  description:
    'Learn how to build the backbone of your Content Marketing Operation in the age of AI Overviews and zero-click content.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/content-marketing-engine',
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
    </>
  )
}
