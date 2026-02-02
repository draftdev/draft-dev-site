import { generateHomePageSchemas, stringifySchemas } from '@/app/lib/schema'

import FAQ from '@/components/global/faq'
import SinglePricingList from '@/components/global/single-price-list'
import SinglePricing from '@/components/global/single-pricing'
import CaseStudiesFeatureHome from '@/components/media/case-studies/featured-home'
import MoreCaseStudies from '@/components/media/case-studies/more-case-studies'

import SocialProof from '@/components/media/social-proof'
import Testimonials from '@/components/media/testimonials/testimonials-group'
import Hero from '@/components/page-components/home/hero'
import Why from '@/components/page-components/why'
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
          <Why
            title="Turn developer content into a reliable growth driver"
            subtitle="For teams launching, introducing new products, or scaling existing content engines"
            features={[
              {
                title: 'From zero to growth',
                description:
                  'No content team yet? No problem. We bring the strategy, production, and distribution across many content types: Blog posts, videos, social collateral, comparison pages, lead magnets, and more. Let us drive your first wave of developer signups. You build product, we build your developer audience.',
                linkText: 'See our process',
                linkHref: '/#how-we-work',
              },
              {
                title: 'Content strategies for new product releases',
                description:
                  'Introduciong a new product or feature means educating a market that does not know it exists yet. We help you build awareness fast with a coordinated content strategy across blogs, video, social, comparison and feature pages, and lead magnets. All backed by competitive analysis and SEO/GEO insights. ',
                linkText: 'See how we drive awareness',
                linkHref: '/drive-awareness',
              },
              {
                title: 'Scale output without scaling headcount',
                description:
                  'More channels, more content. We integrate seamlessly with your existing team to expand content production across channels: on-site articles, guest posts, video content, newsletter campaigns, social distribution, and more. We analyze, refresh, and report on your content performance.',
                linkText: 'See some of our technical content examples',
                linkHref: '/technical-content-examples',
              },
            ]}
          />
          <SocialProof />
          <CaseStudiesFeatureHome />
          <MoreCaseStudies />
          <SinglePricing
            title="Lead Generation Package"
            description="Our Lead Generation service is a comprehensive 3-step framework designed to drive awareness, uncover existing demand, and deliver clear ROI through strategic technical content."
            callToActionURL="/call"
            priceText="Generate qualified leads"
            price="$10,000"
            currency="/Month"
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
            disclaimerOne="Six Month Minimum"
            disclaimerTwo="Delivery starts after initial planning period"
            disclaimerThree="Draft.dev recommends supporting the content with promotional campaigns to drive traffic"
          />

          <SinglePricingList
            title="Lead Generation Package"
            description="Our Lead Generation service is a comprehensive 3-step framework designed to drive awareness, uncover existing demand, and deliver clear ROI through strategic technical content."
            callToActionURL="/call"
            priceText="Generate qualified leads"
            price="$10,000"
            currency="/Month"
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
            disclaimerOne="Six Month Minimum"
            disclaimerTwo="Delivery starts after initial planning period"
            disclaimerThree="Draft.dev recommends supporting the content with promotional campaigns to drive traffic"
          />
          <Testimonials />
        </main>
        <FAQ />
      </div>
    </>
  )
}
