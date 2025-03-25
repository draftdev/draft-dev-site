import { MedHeader } from '@/components/global/headers/med-header'
import { LogosDark } from '@/components/media/logos-dark'
import SocialProof from '@/components/media/social-proof'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import CalendlyWidget from '@/components/page-components/vendors/calendly'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Discovery Call - Draft.dev',
  description:
    'Book a Discovery Call with us to learn more about our Lead Generation Package and other custom services.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/call',
  },
}
export default function Call() {
  return (
    <>
      <MedHeader
        title="Book a Discovery Call"
        descriptionOne="We write technical marketing content designed to reach software developers, DevOps practitioners, data engineers, and engineering managers. If your SaaS business is ready to invest in technical content this year, Draft.dev might be a great fit."
        descriptionTwo="Use the form below to schedule a discovery call or reach out to sales@draft.dev."
      />
      <main className="overflow-hidden">
        <CalendlyWidget url="https://calendly.com/d/2by-kmh-7q6" />
        <SocialProof />
        <TestimonialsGroup />
        <LogosDark />
      </main>
    </>
  )
}
