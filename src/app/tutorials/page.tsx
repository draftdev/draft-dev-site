import FAQ from '@/components/global/faq'
import ServiceHeader from '@/components/global/headers/service-header'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import Examples from '@/components/page-components/tutorials/examples'
import ServiceInfo from '@/components/page-components/tutorials/service-info'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Developer Tutorials',
  description:
    "We help create tutorials designed to reach software engineers. Learn more about Draft.dev's technical content writing services and see our tutorial samples.",
  keywords:
    'developer tutorials, technical tutorials, software engineering guides, programming tutorials, developer marketing',
  openGraph: {
    title: 'Developer Tutorials - Draft.dev',
    description:
      'Tutorials designed to reach software engineers, written by experts.',
    url: 'https://draft.dev/tutorials',
    images: [
      {
        url: 'https://draft.dev/draft/og/tutorials_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Developer Tutorials by Draft.dev',
      },
    ],
  },
  twitter: {
    title: 'Developer Tutorials - Draft.dev',
    description: 'Expert-written tutorials for software engineers.',
    images: ['https://draft.dev/draft/og/tutorials_og_draft_dev.jpg'],
  },
  alternates: {
    canonical: 'https://draft.dev/tutorials',
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
      <Testimonial
        quote="Content is one of the biggest and best channels you can invest in. And if you want to quickly scale without compromising the quality and expertise, Draft.dev is the way to go."
        name="Rahul Patwardhan"
        role="Senior Director, Demand Generation"
        company="Loft Labs"
        imageSrc="/media/testimonials-lg/rahul_patwardhan_loft_labs_draft_dev.jpg"
        imageAlt="Rahul Patwardhan"
      />
      <FAQ />
    </>
  )
}
