import FAQ from '@/components/global/faq'
import SocialProof from '@/components/media/social-proof'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import ServiceInfo from '@/components/page-components/developer-marketing/service-info'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Building and Scaling Developer Marketing - Draft.dev',
  description:
    'Specialized developer marketing services to help you reach software engineers and technical decision makers through authentic, expert-driven content.',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/developer-marketing',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Building and Scaling Developer Marketing - Draft.dev',
    description:
      'Specialized developer marketing services to help you reach software engineers and technical decision makers through authentic, expert-driven content.',
    images: [
      {
        url: '/draft/og/developer_marketing_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Developer Marketing eBook',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Building and Scaling Developer Marketing - Draft.dev',
    description:
      'Specialized developer marketing services to help you reach software engineers and technical decision makers through authentic, expert-driven content.',
    images: ['/draft/og/developer_marketing_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: { canonical: 'https://draft.dev/developer-marketing' },
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

export default function DeveloperMarketing() {
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
