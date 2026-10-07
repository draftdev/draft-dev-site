import FAQ from '@/components/global/faq'
import ServiceHeader from '@/components/global/headers/service-header-content-strategy'
import MedCaseEarthly from '@/components/media/case-studies/med-case-earthly'
import { LogosDark } from '@/components/media/logos-dark'
import SocialProof from '@/components/media/social-proof'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import Partner from '@/components/page-components/seo-services/partner'
import Why from '@/components/page-components/why'

import type { Metadata } from 'next'

const description =
  'We build SEO content engines for technical products. Our 300+ vetted engineer-writers research how developers actually search, create content that resonates with developers and search engines, and publish it straight into your CMS.'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'SEO Services for Developer Tools & Platforms - Draft.dev',
  description,
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/seo-services-for-devtools',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'SEO Services for Developer Tools & Platforms - Draft.dev',
    description,
    images: [
      {
        url: '/draft/og/content_strategy_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'SEO Services by Draft.dev',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Services for Developer Tools & Platforms - Draft.dev',
    description,
    images: ['/draft/og/content_strategy_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: {
    canonical: 'https://draft.dev/seo-services-for-devtools',
  },
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

export default function SEOServices() {
  return (
    <div>
      <ServiceHeader
        title="SEO Services for Developer Tools & Platforms"
        description={description}
        primaryCTA={{
          text: 'Book a Discovery Call',
          href: '/call',
        }}
        secondaryCTA={{
          text: 'See how we publish within weeks',
          href: '/#how-we-work',
        }}
      />
      <main>
        <div className="bg-gradient-brand">
          <SocialProof showHeading={false} />
        </div>
        <Why
          title="Technical SEO That Reaches Engineers and the People Who Buy"
          subtitle="Built on how your buyers actually search, not guesswork"
          subtitleBold=""
          features={[
            {
              title: 'From research to an SEO roadmap',
              description:
                'After your kickoff call, our engineers use your product. We audit your existing pages, research the error messages, setup questions, integration searches and comparison terms your buyers search for, and analyze where competitors rank instead of you. You get a topical map, a content calendar with clear deliverables, and a list of quick wins we can publish first.',
              linkText: 'See how we turn content into growth',
              linkHref: '/drive-awareness',
            },
            {
              title: 'Content written by vetted engineers',
              description:
                'Developers trust peer-written content and can tell within a paragraph whether the writer has used the tool. Every piece is planned by a strategist, written by one of our 300+ vetted engineer-writers, and edited by a professional technical editor. We create tutorials, how-to guides, integration pages, comparison and alternative pages, and technical deep dives.',
              linkText: 'See some of our content examples',
              linkHref: '/technical-content-examples',
            },
            {
              title: 'Publishing and content refreshes',
              description:
                'We publish directly into your CMS with headings, internal links, metadata, schema and images, so nothing sits in a doc waiting for your team. Content decay affects nearly 60% of blog posts within 12 to 24 months as version numbers change and technical details go out of date, so we also refresh the pages that are slipping.',
              linkText: 'See our approach to content refreshes',
              linkHref: '/content-refreshes',
            },
          ]}
        />
        <div className="bg-gradient-brand">
          <SocialProof />
        </div>
        <Partner />
        <Testimonial
          quote="In a matter of weeks, our referral traffic and organic keyword rankings increased by 3x. One post also hit Hacker News which resulted in 5 demo requests in a single day!"
          name="Robert Gibb"
          role="Content Marketing Manager"
          company="Fabric"
          imageSrc="/media/testimonials-lg/robert_gibb_fabric_draft_dev.jpg"
          imageAlt="Robert Gibb"
        />
        <MedCaseEarthly />
        <LogosDark />
        <TestimonialsGroup />
        <Testimonial
          quote="Anyone tasked with marketing to developers knows that they are a community that can smell B.S. from a mile away. Having a dedicated technical resource available is a great support for creating content that both matters to our users and is also useful and accurate."
          name="Em Blitstein"
          role="Senior Content Marketing Manager"
          company="Sinch Mailgun"
          imageSrc="/media/testimonials-lg/em_sinch_mailgun.jpg"
          imageAlt="Em Blitstein"
        />
      </main>
      <FAQ
        pageFaqs={[
          {
            question: 'How is this different from a regular SEO agency?',
            answer:
              'Most SEO agencies can run an audit and build a keyword list. Few can write a technical tutorial that a platform engineer will read to the end. We do both, and our vetted writers are working engineers, not generalists briefed on your category.',
          },
          {
            question: 'What about our documentation? Should it rank too?',
            answer:
              'Often, yes. But your docs and your blog often compete for the same search. We audit both together and decide what belongs where, so they stop working against each other.',
          },
          {
            question: 'Do you do link building?',
            answer:
              'Not as a standalone service. We earn links by publishing content worth linking to, and we place guest posts on developer publications when it fits your strategy.',
          },
        ]}
      />
    </div>
  )
}
