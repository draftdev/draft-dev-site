import { generateHomePageSchemas, stringifySchemas } from '@/app/lib/schema'

import Hero from '@/components/sections/home-hero'
import LogoCollab from '@/components/sections/logo-collab'
import CaseResults from '@/components/sections/case-results'
import EbookCta from '@/components/sections/ebook-cta'
import FaqReveal from '@/components/sections/faq-reveal'
import GrowthCta from '@/components/sections/growth-cta'
import ProcessSteps from '@/components/sections/process-steps'
import FeatureRows from '@/components/sections/feature-rows'
import TeamMarquee from '@/components/sections/team-marquee'
import TestimonialBento from '@/components/sections/testimonial-bento'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title:
    'Content-Powered Growth Marketing for Developer Tools & Platforms - Draft.dev',
  description:
    'We build technical content systems that compound and resonate with developers, search engines and LLMs. Backed by research, proven frameworks, and human-verified AI workflows.',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],

  openGraph: {
    type: 'website',
    url: 'https://draft.dev',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title:
      'Content-Powered Growth Marketing for Developer Tools & Platforms - Draft.dev',
    description:
      'We build technical content systems that compound and resonate with developers, search engines and LLMs. Backed by research, proven frameworks, and human-verified AI workflows.',
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
    title:
      'Content-Powered Growth Marketing for Developer Tools & Platforms - Draft.dev',
    description:
      'We build technical content systems that compound and resonate with developers, search engines and LLMs. Backed by research, proven frameworks, and human-verified AI workflows.',
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
          <LogoCollab />
          <FeatureRows />
          <ProcessSteps />
          <TeamMarquee />
          <CaseResults />


          <TestimonialBento />
          <EbookCta />
        </main>
        <GrowthCta />
        <FaqReveal />
      </div>
    </>
  )
}
