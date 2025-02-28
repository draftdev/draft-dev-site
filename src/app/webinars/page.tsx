import { MedHeader } from '@/components/global/headers/med-header'
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
}

export default function Webinars() {
  return (
    <>
      <MedHeader
        title="Draft.Dev Webinars"
        descriptionOne="Elevate your developer marketing expertise with our monthly webinar series."
        descriptionTwo=""
      />

      <UpcomingWebinars />
      <PastWebinars />
      <TestimonialsGroup />
    </>
  )
}
