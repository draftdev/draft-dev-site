import FAQ from '@/components/global/faq'
import Testimonial from '@/components/media/testimonials/testimonial'
import type { Metadata } from 'next'
import ResourceGrid from './grid'

export const metadata: Metadata = {
  title: 'Free Resources - Draft.dev',
  description:
    'Free developer marketing guides, webinars, newsletter, and expert articles.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/resources',
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
