import FAQ from '@/components/global/faq'
import { MedHeader } from '@/components/global/headers/med-header'
import { LogosDark } from '@/components/media/logos-dark'
import SocialProof from '@/components/media/social-proof'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import CalendlyWidget from '@/components/page-components/vendors/calendly'
import FormInquiry from '@/components/page-components/vendors/hubspot/form-inquiry'

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
      {/* <MedHeader
        title="Let's talk about your content growth engine"
        descriptionOne="We plan, produce, publish, and promote your first pieces within weeks."
        descriptionTwo="Fill out the form and we'll be in touch soon."
      />
    */}

      <MedHeader
        title="Let's talk about your content growth engine"
        descriptionOne="We plan, produce, publish, and promote your first pieces within weeks."
        descriptionTwo={
          <>
            Can&apos;t find a time that works for you?{' '}
            <a href="#inquiry-form" className="underline underline-offset-4">
              Fill out the form
            </a>{' '}
            or email{' '}
            <a
              href="mailto:sales@draft.dev"
              className="underline underline-offset-4"
            >
              sales@draft.dev
            </a>{' '}
            directly. We reply within 24 hours.
          </>
        }
      />
      <main className="overflow-hidden">
        {/* Calendly embed replaces HubSpotMeetings */}
        <section className="mx-auto max-w-3xl px-4 pt-8 sm:px-6 lg:px-8">
          <CalendlyWidget
            url="https://calendly.com/mushfiq-draft/draft-dev-discovery-call"
            minWidth={320}
            height={1200}
          />
        </section>

        <section
          id="inquiry-form"
          className="mx-auto max-w-3xl scroll-mt-24 px-4 pb-16 sm:px-6 lg:px-8"
        >
          <h2 className="sm:subheader-gradient subheader-mobile-gradient">
            Prefer to send a message?
          </h2>
          <p className="paragraph-dark pt-4 pb-8">
            Tell us about your content goals and we&apos;ll get back to you
            within 24 hours.
          </p>
          <FormInquiry />
        </section>

        <SocialProof />
        <TestimonialsGroup />
        <LogosDark />
        <FAQ />
      </main>
    </>
  )
}
