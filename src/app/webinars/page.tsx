import FAQ from '@/components/global/faq'
import { MedHeader } from '@/components/global/headers/med-header'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import PastWebinars from '@/components/page-components/webinars/past-webinars'
import UpcomingWebinars from '@/components/page-components/webinars/upcoming'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Technical Content Marketing Webinars - Draft.dev',
  description:
    'Join our educational webinars on technical content marketing, developer relations, and creating content that resonates with technical audiences.',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/webinars',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Technical Content Marketing Webinars - Draft.dev',
    description:
      'Join our educational webinars on technical content marketing, developer relations, and creating content that resonates with technical audiences.',
    images: [
      {
        url: '/draft/og/webinars_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Technical Content Marketing Webinars',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical Content Marketing Webinars - Draft.dev',
    description:
      'Join our educational webinars on technical content marketing, developer relations, and creating content that resonates with technical audiences.',
    images: ['/draft/og/webinars_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: { canonical: 'https://draft.dev/webinars' },
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

export default function Webinars() {
  return (
    <>
      <MedHeader
        title="Draft.dev Webinars"
        descriptionOne="Elevate your developer marketing expertise with our monthly webinar series."
        descriptionTwo=""
      />

      <UpcomingWebinars />
      <PastWebinars />
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
