import FAQ from '@/components/global/faq'
import SocialProof from '@/components/media/social-proof'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import ServiceInfo from '@/components/page-components/developer-marketing-survey-2026/service-info'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: '2026 Developer Marketing Survey - Draft.dev',
  description:
    'Survey of dev marketing leaders reveals 2026 budget trends, top-performing channels, AI adoption gaps, and why content creation is now the most outsourced function.',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/2026-developer-marketing-survey',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: '2026 Developer Marketing Survey - Draft.dev',
    description:
      'Survey of dev marketing leaders reveals 2026 budget trends, top-performing channels, AI adoption gaps, and why content creation is now the most outsourced function.',
    images: [
      {
        url: '/site/med-landscape/2026_developer_marketing_survey_og_draftdev.jpg',
        width: 1200,
        height: 630,
        alt: '2026 Developer Marketing Survey Download',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '2026 Developer Marketing Survey - Draft.dev',
    description:
      'Survey of dev marketing leaders reveals 2026 budget trends, top-performing channels, AI adoption gaps, and why content creation is now the most outsourced function.',
    images: [
      '/site/med-landscape/2026_developer_marketing_survey_og_draftdev.jpg',
    ],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: {
    canonical: 'https://draft.dev/2026-developer-marketing-survey',
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

export default function DeveloperMarketingSurvey() {
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
