import FAQ from '@/components/global/faq'
import SocialProof from '@/components/media/social-proof'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import ServiceInfo from '@/components/page-components/distributing-content'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title:
    'Distributing Content on Social Media and Generating Leads from Gated Assets - Draft.dev',
  description:
    'This document will walk through a simple framework on how to utilize potentially existing downloadable assets and orchestrate some simple social media playbooks.',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/trello-content-calendar-template',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title:
      'Distributing Content on Social Media and Generating Leads from Gated Assets - Draft.dev',
    description:
      'This document will walk through a simple framework on how to utilize potentially existing downloadable assets and orchestrate some simple social media playbooks.',
    images: [
      {
        url: '/draft/og/distributing_content_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Distributing Content on Social Media and Generating Leads from Gated Assets Download',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Distributing Content on Social Media and Generating Leads from Gated Assets - Draft.dev',
    description:
      'This document will walk through a simple framework on how to utilize potentially existing downloadable assets and orchestrate some simple social media playbooks.',
    images: ['/draft/og/distributing_content_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: {
    canonical: 'https://draft.dev/distributing-content-on-social-media',
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

export default function TrelloTemplate() {
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
