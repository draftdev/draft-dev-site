import FAQ from '@/components/global/faq'
import SocialProof from '@/components/media/social-proof'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import ServiceInfo from '@/components/page-components/aeo-geo-for-devtools/service-info'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'AEO and GEO for DevTools - Draft.dev',
  description: 'Learn how to implement AEO and GEO strategies for DevTools.',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/aeo-geo-for-devtools',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'AEO and GEO for DevTools - Draft.dev',
    description: 'Learn how to implement AEO and GEO strategies for DevTools.',
    images: [
      {
        url: '/draft/og/aeo_geo_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'AEO and GEO for DevTools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AEO and GEO for DevTools - Draft.dev',
    description: 'Learn how to implement AEO and GEO strategies for DevTools.',
    images: ['/draft/og/aeo_geo_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: { canonical: 'https://draft.dev/aeo-geo-for-devtools' },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function AEOForDevTools() {
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
