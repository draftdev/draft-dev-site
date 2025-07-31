import FAQ from '@/components/global/faq'
import SocialProof from '@/components/media/social-proof'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import ServiceInfo from '@/components/page-components/content-engine-checklist/service-info'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'The Content Engine Checklist: A List of Implementation Priorities',
  description:
    'Learn what to consider when running a content. We talk about Tech Setup, Marketing Automation and Advertisement, and Content Types and Content Promotion.',
  keywords:
    'content engine, content marketing, technical content marketing, content strategy execution, content marketing checklist',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/content-engine-checklist',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'The Content Engine Checklist: A List of Implementation Priorities',
    description:
      'Learn what to consider when running a content. We talk about Tech Setup, Marketing Automation and Advertisement, and Content Types and Content Promotion.',
    images: [
      {
        url: '/draft/og/orchestrate_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Content Engine Checklist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Content Engine Checklist: A List of Implementation Priorities',
    description:
      'Learn what to consider when running a content. We talk about Tech Setup, Marketing Automation and Advertisement, and Content Types and Content Promotion.',
    images: ['/draft/og/orchestrate_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: { canonical: 'https://draft.dev/content-engine-checklist' },
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

export default function ContentEngineChecklist() {
  return (
    <>
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
      <FAQ />
    </>
  )
}
