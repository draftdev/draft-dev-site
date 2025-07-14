import FAQ from '@/components/global/faq'
import ServiceHeader from '@/components/global/headers/service-header'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import Examples from '@/components/page-components/blog-service/examples'
import ServiceInfo from '@/components/page-components/blog-service/service-info'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technical Blog Posts',
  description:
    'Expert-written technical blog posts that resonate with developers. See samples of our technical content and learn about our blog writing services.',
  keywords:
    'technical blog posts, developer blog content, technical writing services, engineering blog posts',
  openGraph: {
    title: 'Technical Blog Posts - Draft.dev',
    description:
      'Expert-written technical blog posts that resonate with developers.',
    url: 'https://draft.dev/blog-posts',
    images: [
      {
        url: 'https://draft.dev/draft/og/blog_posts_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Technical Blog Posts and Content',
      },
    ],
  },
  twitter: {
    title: 'Technical Blog Posts - Draft.dev',
    description: 'Expert technical blog posts for developer audiences.',
    images: ['https://draft.dev/draft/og/blog_posts_og_draft_dev.jpg'],
  },
  alternates: {
    canonical: 'https://draft.dev/blog-posts',
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
      <FAQ />
    </>
  )
}
