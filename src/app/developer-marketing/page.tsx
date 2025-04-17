import ServiceHeader from '@/components/global/headers/service-header'
import SocialProof from '@/components/media/social-proof'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import ServiceInfo from '@/components/page-components/playbook/service-info'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Building and Scaling Developer Marketing - Draft.dev',
  description:
    'Download our Building and Scaling Developer Marketing eBook: Learn effective strategies for marketing to developers through authentic, value-driven approaches that drive awareness and build trust.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/developer-marketing',
  },
}

export default function DeveloperMarketing() {
  return (
    <>
      <ServiceHeader
        title="Building and Scaling Developer Marketing"
        description="This guide offers strategies and insights for effectively reaching and converting developer audiences through authentic, value-driven approaches."
      />
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
