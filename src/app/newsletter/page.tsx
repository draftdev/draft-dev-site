import { FormHeader } from '@/components/global/headers/form-header'
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
    </>
  )
}
