import FAQ from '@/components/global/faq'
import Testimonial from '@/components/media/testimonials/testimonial'
import type { Metadata } from 'next'
import ResourceGrid from './grid'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Technical Content Marketing Resources - Draft.dev',
  description:
    'Free resources to help you create better technical content, improve your developer relations, and build authority in technical communities.',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/resources',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Technical Content Marketing Resources - Draft.dev',
    description:
      'Free resources to help you create better technical content, improve your developer relations, and build authority in technical communities.',
    images: [
      {
        url: '/draft/og/resources_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Technical Content Marketing Resources',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical Content Marketing Resources - Draft.dev',
    description:
      'Free resources to help you create better technical content, improve your developer relations, and build authority in technical communities.',
    images: ['/draft/og/resources_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: { canonical: 'https://draft.dev/resources' },
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

export default function Resources() {
  return (
    <>
      <main className="overflow-hidden">
        <ResourceGrid />
        <Testimonial
          quote="Having draft.dev source quality technical content for the Loft Labs blog has been a competitive advantage. It's given us a steadier flow of content, which has helped our brand's visibility, and some of the posts are among the most popular ones we've published."
          name="Rich Burroughs"
          role="Developer Advocate"
          company="Loft Labs"
          imageSrc="/media/testimonials-lg/rich_burroughs_loft_labs_draft_dev.jpg"
          imageAlt="Rich Burroughs"
        />
      </main>
      <FAQ />
    </>
  )
}
