import FAQ from '@/components/global/faq'
import SocialProof from '@/components/media/social-proof'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import ServiceInfo from '@/components/page-components/essential-b2b-demand-gen-tactics/service-info'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: '8 Essential B2B Demand Generation Tactics - Draft.dev',
  description:
    'This guide breaks down 8 tactics that actually work for B2B SaaS and AI companies.',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/8-essential-demand-generation-tactics',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: '8 Essential B2B Demand Generation Tactics - Draft.dev',
    description:
      'This guide breaks down 8 tactics that actually work for B2B SaaS and AI companies.',
    images: [
      {
        url: '/site/med-landscape/8_essential_tactics_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'The Big Blog Promotion Checklist Download',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '8 Essential B2B Demand Generation Tactics - Draft.dev',
    description:
      'This guide breaks down 8 tactics that actually work for B2B SaaS and AI companies.',
    images: ['/site/med-landscape/8_essential_tactics_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: {
    canonical: 'https://draft.dev/8-essential-demand-generation-tactics',
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

export default function EssentialDemandGenTactics() {
  return (
    <>
      <ServiceInfo />
      <SocialProof />
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
