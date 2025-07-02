import FAQ from '@/components/global/faq'
import { MedHeader } from '@/components/global/headers/med-header'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import PastWebinars from '@/components/page-components/webinars/past-webinars'
import UpcomingWebinars from '@/components/page-components/webinars/upcoming'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technical Content Webinars - Draft.dev',
  description:
    'At Draft.dev, we consistently host webinars with industry peers. Watch our previous sessions here and sign up for our upcoming webinars.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/webinars',
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
        quote="It's difficult to find an agency with enough high-quality subject matter expert writers to build up the content pipeline that Draft.dev gives you. It's a shortcut to building an in-house writing team."
        name="Adam Gordon Bell"
        role="Director of Developer Relations"
        company="Earthly"
        imageSrc="/media/testimonials-lg/adam_bell_earthly_draft_dev.jpg"
        imageAlt="Adam Gordon Bell"
      />
      <FAQ />
    </>
  )
}
