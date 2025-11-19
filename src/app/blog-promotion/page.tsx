import FAQ from '@/components/global/faq'
import SocialProof from '@/components/media/social-proof'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import ServiceInfo from '@/components/page-components/distributing-content'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'The Big Blog Promotion Checklist - Draft.dev',
  description:
    'While there are plenty of general promotional checklists for bloggers, not many are specifically built with a software engineering audience in mind. Here is the blog post promotion checklist we use at Draft.dev.',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/big-blog-promotion-checklist',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'The Big Blog Promotion Checklist - Draft.dev',
    description:
      'While there are plenty of general promotional checklists for bloggers, not many are specifically built with a software engineering audience in mind. Here is the blog post promotion checklist we use at Draft.dev.',
    images: [
      {
        url: '/site/med-landscape/blog_promotion_checklist_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'The Big Blog Promotion Checklist Download',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Big Blog Promotion Checklist - Draft.dev',
    description:
      'While there are plenty of general promotional checklists for bloggers, not many are specifically built with a software engineering audience in mind. Here is the blog post promotion checklist we use at Draft.dev.',
    images: ['/site/med-landscape/blog_promotion_checklist_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: {
    canonical: 'https://draft.dev/big-blog-promotion-checklist',
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

export default function BlogPromotion() {
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
