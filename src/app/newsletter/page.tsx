import { FormHeader } from '@/components/global/headers/form-header'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Subscribe to the Draft.dev Newsletter',
  description:
    'Sign up to our Draft.dev Newsletter - we publish software development news and occasionally share news about webinars and other free resources.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/newsletter',
  },
}

export default function Newsletter() {
  return (
    <>
      <div className="m-auto">
        <FormHeader
          title={'Sign up for our Newsletter'}
          descriptionOne="Resources, tips, and case studies to help you reach developers."
          descriptionTwo="Delivered to your inbox every month."
        />
      </div>
      <TestimonialsGroup />
      <Testimonial
        quote="Having draft.dev source quality technical content for the Loft Labs blog has been a competitive advantage. It's given us a steadier flow of content, which has helped our brand's visibility, and some of the posts are among the most popular ones we've published."
        name="Rich Burroughs"
        role="Developer Advocate"
        company="Loft Labs"
        imageSrc="/media/testimonials-lg/rich_burroughs_loft_labs_draft_dev.jpg"
        imageAlt="Rich Burroughs"
      />
    </>
  )
}
