import { CTAFull } from '@/components/global/cta-full'
import ServiceHeader from '@/components/global/headers/service-header'
import SocialProof from '@/components/media/social-proof'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import ServiceInfo from '@/components/page-components/resources/tutorials/service-info'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function Tutorials() {
  return (
    <>
      <ServiceHeader
        title="Developer Tutorials"
        description="We can help you create in-depth tutorials designed to reach software developers."
      />
      <ServiceInfo />
      <CTAFull
        title="Want help creating developer tutorials?"
        description=""
        imageSrc="/site/cta_draft_dev.jpg"
        imageAlt="Team environment"
        linkHref="/discovery-call"
        linkText="Schedule a Call"
      />
      <TestimonialsGroup />
      <SocialProof />
    </>
  )
}
