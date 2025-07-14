import FAQ from '@/components/global/faq'
import { MedHeader } from '@/components/global/headers/med-header'
import { LogosDark } from '@/components/media/logos-dark'
import SocialProof from '@/components/media/social-proof'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import CalendlyWidget from '@/components/page-components/vendors/calendly'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Schedule a Discovery Call',
  description:
    'Ready to transform your technical content marketing? Schedule a 30-minute discovery call to learn how Draft.dev can help you create content that resonates with developers.',
  keywords:
    'technical content marketing consultation, developer content strategy, draft.dev discovery call, technical content agency',
  openGraph: {
    title: 'Schedule a Discovery Call - Draft.dev',
    description:
      'Ready to transform your technical content marketing? Schedule a 30-minute discovery call.',
    url: 'https://draft.dev/call',
    images: [
      {
        url: 'https://draft.dev/draft/og/call_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Schedule a Discovery Call with Draft.dev',
      },
    ],
  },
  twitter: {
    title: 'Schedule a Discovery Call - Draft.dev',
    description: 'Transform your technical content marketing with Draft.dev.',
    images: ['https://draft.dev/draft/og/call_og_draft_dev.jpg'],
  },
  alternates: {
    canonical: 'https://draft.dev/call',
  },
}
export default function Call() {
  return (
    <>
      <MedHeader
        title="Book a Discovery Call"
        descriptionOne="We write technical marketing content designed to reach software developers, DevOps practitioners, data engineers, and engineering managers. If your SaaS business is ready to invest in technical content this year, Draft.dev might be a great fit."
        descriptionTwo="Use the form below to schedule a discovery call"
      />
      <main className="overflow-hidden">
        <CalendlyWidget url="https://calendly.com/d/2by-kmh-7q6" />
        <SocialProof />
        <TestimonialsGroup />
        <LogosDark />
        <FAQ />
      </main>
    </>
  )
}
