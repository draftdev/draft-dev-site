import FAQ from '@/components/global/faq'
import SocialProof from '@/components/media/social-proof'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import ServiceInfo from '@/components/page-components/trello-template/service-info'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Free Trello Content Calendar Template - Draft.dev',
  description:
    'Free Trello content calendar template with 10-stage workflow, automation rules, and pre-built checklists.',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/trello-content-calendar-template',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Free Trello Content Calendar Template - Draft.dev',
    description:
      'Free Trello content calendar template with 10-stage workflow, automation rules, and pre-built checklists.',
    images: [
      {
        url: '/draft/og/trello_lp_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Trello Content Calendar Template Download',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Trello Content Calendar Template - Draft.dev',
    description:
      'Free Trello content calendar template with 10-stage workflow, automation rules, and pre-built checklists.',
    images: ['/draft/og/trello_lp_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: {
    canonical: 'https://draft.dev/trello-content-calendar-template',
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
