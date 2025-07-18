import FAQ from '@/components/global/faq'
import { MedHeader } from '@/components/global/headers/med-header'
import { LogosDark } from '@/components/media/logos-dark'
import SocialProof from '@/components/media/social-proof'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import HubSpotMeetings from '@/components/page-components/vendors/hubspot/hubspot-meetings'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Schedule a Discovery Call - Draft.dev',
  description:
    'Ready to transform your technical content marketing? Schedule a 30-minute discovery call to learn how Draft.dev can help you create content that resonates with developers.',
  keywords:
    'technical content marketing consultation, developer content strategy, draft.dev discovery call, technical content agency',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/call',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Schedule a Discovery Call - Draft.dev',
    description:
      'Ready to transform your technical content marketing? Schedule a 30-minute discovery call to learn how Draft.dev can help you create content that resonates with developers.',
    images: [
      {
        url: '/draft/og/call_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Schedule a Discovery Call with Draft.dev',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schedule a Discovery Call - Draft.dev',
    description:
      'Ready to transform your technical content marketing? Schedule a 30-minute discovery call to learn how Draft.dev can help you create content that resonates with developers.',
    images: ['/draft/og/call_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: { canonical: 'https://draft.dev/call' },
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

export default function Call() {
  return (
    <>
      <MedHeader
        title="Book a Discovery Call"
        descriptionOne="We write technical marketing content designed to reach software developers, DevOps practitioners, data engineers, and engineering managers. If your SaaS business is ready to invest in technical content this year, Draft.dev might be a great fit."
        descriptionTwo="Use the form below to schedule a discovery call. Can't find a time that works for you? Email sales@draft.dev to contact us directly."
      />
      <main className="overflow-hidden">
        <HubSpotMeetings />

        <SocialProof />
        <TestimonialsGroup />
        <LogosDark />
        <FAQ />
      </main>
    </>
  )
}
