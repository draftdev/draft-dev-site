import FAQ from '@/components/global/faq'
import SocialProof from '@/components/media/social-proof'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import ServiceInfo from '@/components/page-components/airtable-template/service-info'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Free Airtable Content Calendar Template - Draft.dev',
  description:
    'Free Airtable template includes pipeline tracking, task management, and team views.',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/airtable-content-calendar-template',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Free Airtable Content Calendar Template - Draft.dev',
    description:
      'Free Airtable template includes pipeline tracking, task management, and team views.',
    images: [
      {
        url: '/draft/og/airtable_lp_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Airtable Content Calendar Template Download',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Airtable Content Calendar Template - Draft.dev',
    description:
      'Free Airtable template includes pipeline tracking, task management, and team views.',
    images: ['/draft/og/asana_lp_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: {
    canonical: 'https://draft.dev/airtable-content-calendar-template',
  },
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

export default function AirtableTemplate() {
  return (
    <>
      <ServiceInfo />
      <SocialProof />
      <TestimonialsGroup />
      <Testimonial
        quote="I was thoroughly impressed by the smooth onboarding and ability to adapt to our product suite. Draft.dev's attention to detail and dedication to aligning content with our brand have significantly impacted our developer-focused content strategy. The high-quality technical blog posts have been well-received internally, and we're excited to see the full impact on our content program."
        name="Em Blitstein"
        role="Senior Content Marketing Manager"
        company="Sinch Mailgun"
        imageSrc="/media/testimonials-sm/em_sinch_mailgun.jpg"
        imageAlt="Em Blitstein, Senior Content Marketing Manager at Sinch Mailgun"
      />
      <FAQ />
    </>
  )
}
