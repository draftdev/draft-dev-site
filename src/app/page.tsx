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
            title="AI-Powered Content That Technical Audiences Actually Respect And Trust"
            subtitle="AI speed meets human expertise for content that performs and converts"
            features={[
              {
                title: 'Vetted and approved by real engineers',
                description:
                  "We all know AI systems can produce faulty output. Especially when it comes to code. Don't get flagged for high AI signals, risk your reputation and sacrifice quality. Our 300+ practicing software engineers with 10+ years of average experience are your 'humans-in-the-loop', reviewing and approving every piece.",
                linkText: 'Why we have engineers-in-the-loop',
                linkHref: '/draft-dev-vs-ai-gen-content',
              },
              {
                title: 'Fast turnaround AND high-quality output',
                description:
                  'Get the best of both worlds: AI-enabled research and discovery, coupled with a production and review process that has been perfected over years. Our technical editors and copy editors are reviewing each output, making sure each piece is technically correct and authentic.',
                linkText: 'See our process',
                linkHref: '/#how-we-work',
              },
              {
                title: 'Proactive refreshes, measurable results',
                description:
                  'We track and report your performance and conduct frequent content refreshes on existing content. Nobody wants a potential buyer to get a result showing outdated information from a 2yr old blog post. We make sure your pieces stay relevant and perform well in AI results and traditional search engines.',
                linkText: 'Learn about our Content Refreshes',
                linkHref: '/content-refreshes',
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
