import FAQ from '@/components/global/faq'
import SocialProof from '@/components/media/social-proof'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import ServiceInfo from '@/components/page-components/asana-template/service-info'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Free Asana Content Calendar Template - Draft.dev',
  description:
    'Complete Asana content calendar setup guide with downloadable template. Includes workflow stages, automation tips, and team collaboration features.',
  keywords:
    'asana content calendar template, free content calendar template, asana editorial calendar, content planning template, content calendar download',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/asana-content-calendar-template',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Free Asana Content Calendar Template - Draft.dev',
    description:
      'Complete Asana content calendar setup guide with downloadable template. Includes workflow stages, automation tips, and team collaboration features.',
    images: [
      {
        url: '/draft/og/asana_lp_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Asana Content Calendar Template Download',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Asana Content Calendar Template - Draft.dev',
    description:
      'Complete Asana content calendar setup guide with downloadable template. Includes workflow stages, automation tips, and team collaboration features.',
    images: ['/draft/og/asana_lp_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: {
    canonical: 'https://draft.dev/asana-content-calendar-template',
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

export default function AsanaTemplate() {
  return (
    <>
      <ServiceInfo />
      <SocialProof />
      <TestimonialsGroup />
      <Testimonial
        quote="Having draft.dev source quality technical content for the Loft Labs blog has been a competitive advantage. It's given us a steadier flow of content, which has helped our brand's visibility, and some of the posts are among the most popular ones we've published."
        name="Rich Burroughs"
        role="Developer Advocate"
        company="Loft Labs"
        imageSrc="/media/testimonials-lg/rich_burroughs_loft_labs_draft_dev.jpg"
        imageAlt="Robert Gibb"
      />
      <FAQ />
    </>
  )
}
