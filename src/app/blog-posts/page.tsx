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
