import {
  generateOrganizationSchema,
  generateServiceSchema,
  generateWebSiteSchema,
} from '@/app/lib/schema'

import FAQ from '@/components/global/faq'
import SinglePricingList from '@/components/global/single-price-list'
import SinglePricing from '@/components/global/single-pricing'
import CaseStudiesFeatureHome from '@/components/media/case-studies/featured-home'
import SocialProof from '@/components/media/social-proof'
import Testimonials from '@/components/media/testimonials/testimonials-group'
import Hero from '@/components/page-components/home/hero'
import Why from '@/components/page-components/why'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title:
    'AI-powered tech marketing. Vetted by expert engineers and editors - Draft.dev',
  description:
    "We build growth marketing engines for the world's best tech companies, blending the speed of AI with the expertise of humans-in-the-loop.",
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],

  openGraph: {
    type: 'website',
    url: 'https://draft.dev',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title:
      'AI-powered tech marketing. Vetted by expert engineers and editors - Draft.dev',
    description:
      "We build growth marketing engines for the world's best tech companies, blending the speed of AI with the expertise of humans-in-the-loop.",
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
      'AI-powered tech marketing. Vetted by expert engineers and editors - Draft.dev',
    description:
      "We build growth marketing engines for the world's best tech companies, blending the speed of AI with the expertise of humans-in-the-loop.",
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
  const organizationSchema = generateOrganizationSchema()
  const serviceSchema = generateServiceSchema()
  const websiteSchema = generateWebSiteSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

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
                  "No content team yet? No problem. We bring the strategy, production, and distribution across many content types: Blog posts, videos, social collateral, comparison pages, lead magnets, and more. Let us drive your first wave of developer signups. You build product, we build your developer audience.",
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

          <Why
            title="Why Draft.dev"
            subtitle="How we compare to other solutions"
            features={[
              {
                title: 'Draft.dev vs. Freelancers',
                description:
                  'Finding good technical writers is hard. Managing them is even harder. Freelancer quality varies wildly. One Freelancer delivers gold, another produces trash. Your content becomes a patchwork of different voices, depths, and quality levels. Draft.dev provides the benefits of Freelancers (specialized expertise and flexible capacity) without the chaos. Our managed services includes writer vetting and matching, quality control and editing, consistent voice and standards, guaranteed delivery schedules, and seamless scale.',
                linkText: 'Compare us to a Freelancer setup',
                linkHref: '/draft-dev-vs-freelancers',
              },
              {
                title: 'Draft.dev vs. SEO Agencies',
                description:
                  "Generic content agencies treat technical content like any other B2B vertical: stuff it full of the right keywords, churn out 500-word posts, and hope for rankings. However, developers have the industry's best BS detectors. They spot shallow content immediately, mock it publicly, and blacklist brands that publish it. Technical accuracy isn't optional: it's table stakes. One wrong code example, outdated best practice, or fundemental misunderstanding destroys your credibility instantly. Generic agencies using 'technical' writers who took a coding bootcamp simply can't deliver the depth developers demand.",
                linkText: 'Compare us to regular SEO agencies',
                linkHref: '/draft-dev-vs-seo-agency',
              },
              {
                title: 'Draft.dev vs. AI Content',
                description:
                  "AI content seems like a miracle. It can create instant articles for pennies. Unfortunately, for technical companies, developers can spot AI-gen content immediately. It's generic, lacks context, and offers no original insights. The hidden costs are devastating: search rankings collapse, domain authority erodes, developer trust evaporates, and recovery takes months, if not years. What seemed like savings becomes your most expensive mistake when you factor in lost traffic, damaged reputation, and the cost of replacing all of that worthless content.",
                linkText: 'Compare us to AI Content tools',
                linkHref: '/draft-dev-vs-ai-gen-content',
              },
            ]}
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
                text: 'Full-funnel technical content with demo apps, code samples, and social collateral.',
              },
              {
                leadText: 'Comprehensive Campaign Strategy:',
                text: 'Analysis of existing content, competitor research, and measurable goals.',
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
                text: 'Full-funnel technical content with demo apps, code samples, and social collateral.',
              },
              {
                leadText: 'Comprehensive Campaign Strategy:',
                text: 'Analysis of existing content, competitor research, and measurable goals.',
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
          <CaseStudiesFeatureHome />
        </main>
        <FAQ />
      </div>
    </>
  )
}
