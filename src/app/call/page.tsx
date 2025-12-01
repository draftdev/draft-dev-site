import FAQ from '@/components/global/faq'
import { MedHeader } from '@/components/global/headers/med-header'
import { LogosDark } from '@/components/media/logos-dark'
import SocialProof from '@/components/media/social-proof'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'

import CalendlyWidget from '@/components/page-components/vendors/calendly'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Schedule a Discovery Call - Draft.dev',
  description:
    'Ready to transform your technical content marketing? Schedule a 30-minute discovery call to learn how Draft.dev can help you create content that resonates with developers.',
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
        title="Let's talk about your content growth engine"
        descriptionOne="We plan, produce, publish, and promote your first pieces within weeks. Use the form below to schedule a discovery call. "
        descriptionTwo="Can't find a time that works for you? Email sales@draft.dev to contact us directly."
      />
      <main className="overflow-hidden">
        {/* Calendly embed replaces HubSpotMeetings */}
        <section className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
          <CalendlyWidget
            url="https://calendly.com/karlhughes/draft-discovery"
            minWidth={320}
            height={1200}
          />
        </section>

        <SocialProof />
        <TestimonialsGroup />
        <LogosDark />
        <FAQ />
      </main>
    </>
  )
}
