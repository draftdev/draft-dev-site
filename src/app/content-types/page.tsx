import ServiceHeader from '@/components/global/headers/service-header'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import Examples from '@/components/page-components/content-types/examples'
import ServiceInfo from '@/components/page-components/content-types/service-info'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technical Content Types we Create for Our Clients - Draft.dev',
  description:
    'Learn how we help clients by providing tutorials, round-up articles, video tutorials, comparison content, technical guides, and persuasive writing.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/content-types',
  },
}

export default function ContentTypes() {
  return (
    <>
      <ServiceHeader
        title="We Are Able to Create Many Types of Content"
        primaryCTA={{
          text: 'Book a Discovery Call',
          href: '/call',
        }}
        secondaryCTA={{
          text: 'See Our Lead Generation Package',
          href: './#lead-generation-package',
        }}
        description="Explore the different content types we create for technical audiences."
      />
      <ServiceInfo />
      <Examples />
      <TestimonialsGroup />
    </>
  )
}
