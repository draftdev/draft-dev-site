import FAQ from '@/components/global/faq'
import { LogosDark } from '@/components/media/logos-dark'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import ServiceInfo from '@/components/page-components/newsletter/service-info'
import type { Metadata } from 'next'

export const newsletterMetadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Technical Content Marketing Newsletter - Draft.dev',
  description:
    'Subscribe to our newsletter for resources, tips, and case studies to help you reach developers through effective technical content marketing.',
  keywords:
    'technical content marketing newsletter, developer marketing newsletter, content marketing tips, technical writing insights',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/newsletter',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Technical Content Marketing Newsletter - Draft.dev',
    description:
      'Subscribe to our newsletter for resources, tips, and case studies to help you reach developers through effective technical content marketing.',
    images: [
      {
        url: '/draft/og/newsletter_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Technical Content Marketing Newsletter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical Content Marketing Newsletter - Draft.dev',
    description:
      'Subscribe to our newsletter for resources, tips, and case studies to help you reach developers through effective technical content marketing.',
    images: ['/draft/og/newsletter_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: { canonical: 'https://draft.dev/newsletter' },
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

export default function Newsletter() {
  return (
    <>
      <ServiceInfo />
      <LogosDark />
      <TestimonialsGroup />
      <Testimonial
        quote="Having draft.dev source quality technical content for the Loft Labs blog has been a competitive advantage. It's given us a steadier flow of content, which has helped our brand's visibility, and some of the posts are among the most popular ones we've published."
        name="Rich Burroughs"
        role="Developer Advocate"
        company="Loft Labs"
        imageSrc="/media/testimonials-lg/rich_burroughs_loft_labs_draft_dev.jpg"
        imageAlt="Rich Burroughs"
      />
      <FAQ />
    </>
  )
}
