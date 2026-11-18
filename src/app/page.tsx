import { generateHomePageSchemas, stringifySchemas } from '@/app/lib/schema'

import FAQ from '@/components/global/faq'
import CaseStudiesFeatureHome from '@/components/media/case-studies/featured-home'
import MoreCaseStudies from '@/components/media/case-studies/more-case-studies'
import TestimonialsCarousel from '@/components/media/testimonials/testimonials-carousel'

import Audience from '@/components/page-components/home/audience'
import Hero from '@/components/page-components/home/hero'
import Services from '@/components/page-components/home/services'
import Stats from '@/components/page-components/home/stats'
import Steps from '@/components/page-components/home/steps'
import BookCall from '@/components/page-components/service-landing/book-call'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'GTM Marketing for Developer Tools & AI Platforms - Draft.dev',
  description:
    'Content-powered growth marketing for developer tools and AI platforms. We build technical content engines that reach developers, search engines and LLMs.',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],

  openGraph: {
    type: 'website',
    url: 'https://draft.dev',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'GTM Marketing for Developer Tools & AI Platforms - Draft.dev',
    description:
      'Content-powered growth marketing for developer tools and AI platforms. We build technical content engines that reach developers, search engines and LLMs.',
    images: [
      {
        url: '/draft/og/main_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Draft.dev Technical Content Creation Agency',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'GTM Marketing for Developer Tools & AI Platforms - Draft.dev',
    description:
      'Content-powered growth marketing for developer tools and AI platforms. We build technical content engines that reach developers, search engines and LLMs.',
    images: ['/draft/og/main_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },

  alternates: { canonical: 'https://draft.dev' },
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

export default function Home() {
  const schemaJsonLd = stringifySchemas(generateHomePageSchemas())

  return (
    <>
      {schemaJsonLd.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schema }}
        />
      ))}

      <div className="overflow-hidden">
        <main>
          <Hero />
          <Services />
          <Audience />
          <Steps />
          <Stats />
          <CaseStudiesFeatureHome />
          <MoreCaseStudies />
          <TestimonialsCarousel
            exclude={['Emily Blitstein']}
            className="bg-white py-12 sm:py-16"
          />
          {/* Pricing hidden for now (Mushfiq). To show it again, render <Plans /> here */}
        </main>
        <FAQ
          callHref="#book-a-call"
          className="bg-[#f4f1f8] py-12 sm:py-16"
          title="Common Questions We Get Asked"
          headingClassName="subheader-mobile-gradient sm:subheader-gradient"
          masonry
          centerHeading
        />
        <BookCall />
      </div>
    </>
  )
}
