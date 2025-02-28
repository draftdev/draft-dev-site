import ServiceHeader from '@/components/global/headers/service-header'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import Examples from '@/components/page-components/tutorials/examples'
import ServiceInfo from '@/components/page-components/tutorials/service-info'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Developer Tutorials - Draft.dev',
  description:
    'Learn more about how we can help you create in-depth tutorials designed to reach software developers, and see some examples.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function Tutorials() {
  return (
    <>
      <ServiceHeader
        title="Developer Tutorials by Draft.dev"
        primaryCTA={{
          text: 'Book a Discovery Call',
          href: '/call',
        }}
        secondaryCTA={{
          text: 'See which content types we support',
          href: '/content-types',
        }}
        description="We can help you create in-depth tutorials designed to reach software developers."
      />
      <ServiceInfo />
      <Examples />
      <TestimonialsGroup />
    </>
  )
}
