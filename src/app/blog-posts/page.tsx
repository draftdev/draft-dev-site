import FAQ from '@/components/global/faq'
import ServiceHeader from '@/components/global/headers/service-header'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import Examples from '@/components/page-components/blog-service/examples'
import ServiceInfo from '@/components/page-components/blog-service/service-info'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technical Blog Content - Draft.dev',
  description:
    'Learn how Draft.dev helps hundreds of clients by creating blog posts that resonate with a technical audience and captures leads.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/blog-posts',
  },
}

export default function BlogPosts() {
  return (
    <>
      <ServiceHeader
        title="Technical Blog Content"
        primaryCTA={{
          text: 'Book a Discovery Call',
          href: '/call',
        }}
        secondaryCTA={{
          text: 'See which content types we support',
          href: '/content-types',
        }}
        description="We help developer marketing teams create blog posts that software engineers actually want to read."
      />
      <ServiceInfo />
      <Examples />
      <TestimonialsGroup />
      <Testimonial
        quote="Anyone tasked with marketing to developers knows that they are a community that can smell B.S. from a mile away. Having a dedicated technical resource available is a great support for creating content that both matters to our users and is also useful and accurate."
        name="Em Blitstein"
        role="Senior Content Marketing Manager"
        company="Sinch Mailgun"
        imageSrc="/media/testimonials-lg/em_sinch_mailgun.jpg"
        imageAlt="Em Blitstein"
      />
      <FAQ />
    </>
  )
}
