import { generateHomePageSchemas, stringifySchemas } from '@/app/lib/schema'

import FAQ from '@/components/global/faq'
import SinglePricingList from '@/components/global/single-price-list'
import SinglePricing from '@/components/global/single-pricing'
import CaseStudiesFeatureHome from '@/components/media/case-studies/featured-home'
import MoreCaseStudies from '@/components/media/case-studies/more-case-studies'

import SocialProof from '@/components/media/social-proof'
import Testimonials from '@/components/media/testimonials/testimonials-group'
import Audience from '@/components/page-components/home/audience'
import Hero from '@/components/page-components/home/hero'
import Services from '@/components/page-components/home/services'
import Steps from '@/components/page-components/home/steps'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title:
    'Go-to-Market Marketing Agency for Developer Tools & Platforms - Draft.dev',
  description:
    'Draft.dev is a go-to-market marketing agency for developer tools and platforms: strategy, content, SEO & GEO, distribution and paid growth.',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],

  openGraph: {
    type: 'website',
    url: 'https://draft.dev',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title:
      'Go-to-Market Marketing Agency for Developer Tools & Platforms - Draft.dev',
    description:
      'Draft.dev is a go-to-market marketing agency for developer tools and platforms: strategy, content, SEO & GEO, distribution and paid growth.',
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
      'Go-to-Market Marketing Agency for Developer Tools & Platforms - Draft.dev',
    description:
      'Draft.dev is a go-to-market marketing agency for developer tools and platforms: strategy, content, SEO & GEO, distribution and paid growth.',
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
          <SocialProof title="A Growth Agency with a Track Record" />
          <CaseStudiesFeatureHome />
          <MoreCaseStudies />
          <SinglePricing
            title="Lead Generation Package"
            description="Our Lead Generation service is a comprehensive 3-step framework designed to drive awareness, uncover existing demand, and deliver clear ROI through strategic technical content."
            callToActionURL="/call"
            priceText="Generate qualified leads"
            price="From $9K"
            currency="/month"
            includedFeatures={[
              {
                leadText: 'Strategic Content Creation:',
                text: 'Full-funnel technical content, including landing pages, tutorials and demo apps, code samples, and social collateral.',
              },
              {
                leadText: 'Comprehensive Campaign Strategy:',
                text: 'Analysis of your product and features, your existing content, competitor research, and measurable goals',
              },
              {
                leadText: 'Lead Collection System:',
                text: 'Downloadable assets with landing page copy optimized for MQL/SQL conversion.',
              },
              {
                leadText: 'Performance Optimization:',
                text: 'Monthly analytics reviews tracking cost per lead and content effectiveness.',
              },
            ]}
            disclaimerOne="3-month minimum, then month to month"
            disclaimerTwo="Delivery starts after initial planning period"
            disclaimerThree="Draft.dev recommends supporting the content with promotional campaigns to drive traffic"
          />

          <SinglePricingList
            title="Lead Generation Package"
            description="Our Lead Generation service is a comprehensive 3-step framework designed to drive awareness, uncover existing demand, and deliver clear ROI through strategic technical content."
            callToActionURL="/call"
            priceText="Generate qualified leads"
            price="From $9K"
            currency="/month"
            includedFeatures={[
              {
                leadText: 'Strategic Content Creation:',
                text: 'Full-funnel technical content, including landing pages, tutorials and demo apps, code samples, and social collateral.',
              },
              {
                leadText: 'Comprehensive Campaign Strategy:',
                text: 'Analysis of your product and features, your existing content, competitor research, and measurable goals.',
              },
              {
                leadText: 'Lead Collection System:',
                text: 'Downloadable assets with landing page copy optimized for MQL/SQL conversion.',
              },
              {
                leadText: 'Performance Optimization:',
                text: 'Monthly analytics reviews tracking cost per lead and content effectiveness.',
              },
            ]}
            disclaimerOne="3-month minimum, then month to month"
            disclaimerTwo="Delivery starts after initial planning period"
            disclaimerThree="Draft.dev recommends supporting the content with promotional campaigns to drive traffic"
          />
          <Testimonials />
        </main>
        <FAQ
          className="py-12 sm:py-16"
          headingClassName="subheader-mobile-gradient sm:subheader-gradient"
          masonry
        />
      </div>
    </>
  )
}
