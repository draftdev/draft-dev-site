import FAQ from '@/components/global/faq'
import SocialProof from '@/components/media/social-proof'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import ServiceInfo from '@/components/page-components/content-marketing-engine/service-info'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Content Marketing Engine - Draft.dev',
  description:
    "Transform your technical content marketing with Draft.dev's proven content marketing engine designed to drive consistent results for tech companies.",
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/content-marketing-engine',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Content Marketing Engine - Draft.dev',
    description:
      "Transform your technical content marketing with Draft.dev's proven content marketing engine designed to drive consistent results for tech companies.",
    images: [
      {
        url: '/draft/og/content_engine_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Content Marketing Engine for Tech Companies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Content Marketing Engine - Draft.dev',
    description:
      "Transform your technical content marketing with Draft.dev's proven content marketing engine designed to drive consistent results for tech companies.",
    images: ['/draft/og/content_engine_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: { canonical: 'https://draft.dev/content-marketing-engine' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function ContentMarketingEngine() {
  return (
    <>
      <ServiceInfo />
      <SocialProof />
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
