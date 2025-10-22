import FAQ from '@/components/global/faq'
import { MedHeader } from '@/components/global/headers/med-header'
import { LogosDark } from '@/components/media/logos-dark'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import type { Metadata } from 'next'
import CaseStudiesFeature from '../../components/media/case-studies/featured'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Case Studies - Draft.dev Success Stories',
  description:
    'Learn why clients like Supabase, JetBrains, Loft Labs, Earthly, Redpanda, Sinch Mailgun, and others choose Draft.dev for their technical content marketing needs.',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/case-studies',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Case Studies - Draft.dev Success Stories',
    description:
      'Learn why clients like Supabase, JetBrains, Loft Labs, Earthly, Redpanda, Sinch Mailgun, and others choose Draft.dev for their technical content marketing needs.',
    images: [
      {
        url: '/draft/og/case_studies_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Draft.dev Case Studies and Success Stories',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies - Draft.dev Success Stories',
    description:
      'Learn why clients like Supabase, JetBrains, Loft Labs, Earthly, Redpanda, Sinch Mailgun, and others choose Draft.dev for their technical content marketing needs.',
    images: ['/draft/og/case_studies_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: { canonical: 'https://draft.dev/case-studies' },
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

export default function CaseStudyIndexPage() {
  return (
    <>
      <MedHeader
        title="Delivering Results"
        descriptionOne="Leading tech companies achieve remarkable results with Draft.dev's technical content growth engines. From 346% traffic increase to significant conversion rate improvements, to top SEO and AI Search rankings."
        descriptionTwo="Learn how we drive results for our clients."
      />
      <CaseStudiesFeature />

      <TestimonialsGroup />
      <LogosDark />
      <FAQ />
    </>
  )
}
