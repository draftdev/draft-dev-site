import { Container } from '@/components/global/container'
import Testimonial from '@/components/media/testimonials/testimonial'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Content Marketing Services - Draft.dev',
  description:
    'Learn more about the Content Marketing Services we offer at Draft.dev',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: '/services',
  },
}

function Header() {
  return (
    <Container className="mt-16">
      <h1>Content Marketing Services</h1>
      <h3 className="mt-6 max-w-3xl">
        Companies all over the world have closed millions of deals with Radiant.
        Sign up today and start selling smarter.
      </h3>
    </Container>
  )
}

export default function Services() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Testimonial
          quote="Having draft.dev source quality technical content for the Loft Labs blog has been a competitive advantage. It's given us a steadier flow of content, which has helped our brand's visibility, and some of the posts are among the most popular ones we've published."
          name="Rich Burroughs"
          role="Developer Advocate"
          company="Loft Labs"
          imageSrc="/media/testimonials-lg/rich_burroughs_loft_labs_draft_dev.jpg"
          imageAlt="Rich Burroughs"
        />
      </main>
    </>
  )
}
