import FAQ from '@/components/global/faq'
import { LogosDark } from '@/components/media/logos-dark'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import ServiceInfo from '@/components/page-components/newsletter/service-info'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technical Content Marketing Newsletter',
  description:
    'Subscribe to our newsletter for resources, tips, and case studies to help you reach developers through effective technical content marketing.',
  keywords:
    'technical content marketing newsletter, developer marketing newsletter, content marketing tips, technical writing insights',
  openGraph: {
    title: 'Technical Content Marketing Newsletter - Draft.dev',
    description: 'Resources and tips for reaching developers through content.',
    url: 'https://draft.dev/newsletter',
    images: [
      {
        url: 'https://draft.dev/draft/og/newsletter_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Technical Content Marketing Newsletter',
      },
    ],
  },
  twitter: {
    title: 'Technical Content Newsletter - Draft.dev',
    description: 'Tips for reaching developers through content marketing.',
    images: ['https://draft.dev/draft/og/newsletter_og_draft_dev.jpg'],
  },
  alternates: {
    canonical: 'https://draft.dev/newsletter',
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
