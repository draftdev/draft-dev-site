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
    'Download our free Trello content calendar template with 10-stage workflow, automation rules, and pre-built checklists. Setup in 10 minutes.',
  keywords:
    'trello content calendar template, free content calendar template, trello editorial calendar, content planning template, content calendar download',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/trello-content-calendar-template',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Free Trello Content Calendar Template - Draft.dev',
    description:
      'Download our free Trello content calendar template with 10-stage workflow, automation rules, and pre-built checklists. Perfect for teams managing 5-50 content pieces monthly.',
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
      'Download our free Trello content calendar template with 10-stage workflow, automation rules, and pre-built checklists. Setup in 10 minutes.',
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
