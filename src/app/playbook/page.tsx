import ServiceHeader from '@/components/global/headers/service-header'
import SocialProof from '@/components/media/social-proof'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import ServiceInfo from '@/components/page-components/playbook/service-info'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technical Content Marketing Playbook - Draft.dev',
  description:
    'Download our Technical Marketing Playbook: Learn everything you need to produce high-quality technical marketing content.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/playbook',
  },
}

export default function Playbook() {
  return (
    <>
      <ServiceHeader
        title="The Technical Content Manager's Playbook"
        description="This free Technical Content Manager Playbook is a collection of resources you can use to manage a top-tier technical blog. Among other things, it includes a template for creating technical content briefs, a multi-author publishing calendar, and a technical blogging style guide."
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
