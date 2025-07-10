import FAQ from '@/components/global/faq'
import Testimonial from '@/components/media/testimonials/testimonial'
import type { Metadata } from 'next'
import ResourceGrid from './grid'

export const metadata: Metadata = {
  title: 'Technical Content Marketing Resources',
  description:
    'Free resources to help you create better technical content, improve your developer relations, and build authority in technical communities.',
  keywords:
    'technical content marketing resources, developer relations guides, content strategy templates, technical writing resources',
  openGraph: {
    title: 'Technical Content Marketing Resources - Draft.dev',
    description:
      'Free resources to help you create better technical content and improve developer relations.',
    url: 'https://draft.dev/resources',
    images: [
      {
        url: 'https://draft.dev/draft/og/resources_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Technical Content Marketing Resources',
      },
    ],
  },
  twitter: {
    title: 'Technical Content Marketing Resources - Draft.dev',
    description:
      'Free resources for technical content marketing and developer relations.',
    images: ['https://draft.dev/draft/og/resources_og_draft_dev.jpg'],
  },
  alternates: {
    canonical: 'https://draft.dev/resources',
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
