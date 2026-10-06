import FAQ from '@/components/global/faq'
import ServiceHeader from '@/components/global/headers/service-header-content-strategy'
import MedCaseEarthly from '@/components/media/case-studies/med-case-earthly'
import { LogosDark } from '@/components/media/logos-dark'
import SocialProof from '@/components/media/social-proof'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import Partner from '@/components/page-components/aeo-geo-services/partner'
import Why from '@/components/page-components/why'

import type { Metadata } from 'next'

const description =
  'We build AEO and GEO content engines that help your developer tool get cited in AI answers. Proven AI workflows and 300+ vetted subject matter experts create content that resonates with developers, search engines and LLMs.'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'AEO and GEO Services for Developer Tools & Platforms - Draft.dev',
  description,
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/aeo-geo-services-for-devtools',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'AEO and GEO Services for Developer Tools & Platforms - Draft.dev',
    description,
    images: [
      {
        url: '/site/med-landscape/aeo_geo_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'AEO and GEO Services by Draft.dev',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AEO and GEO Services for Developer Tools & Platforms - Draft.dev',
    description,
    images: ['/site/med-landscape/aeo_geo_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: {
    canonical: 'https://draft.dev/aeo-geo-services-for-devtools',
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

export default function AEOGEOServices() {
  return (
    <div>
      <ServiceHeader
        title="AEO and GEO Services for Developer Tools & Platforms"
        description={description}
        leadMagnet={{
          badge: 'Free Guide',
          text: 'AEO & GEO Guide for DevTools',
          href: '/aeo-geo-for-devtools',
        }}
        primaryCTA={{
          text: 'Book a Discovery Call',
          href: '/call',
        }}
        secondaryCTA={{
          text: 'Learn what AEO and GEO mean for developer marketing',
          href: '/aeo-geo-for-devtools',
        }}
      />
      <main>
        <div className="bg-gradient-brand">
          <SocialProof showHeading={false} />
        </div>
        <Why
          title="Get Your Product Into AI Answers"
          subtitle="Content and strategy built to earn AI mentions and citations, not guesswork"
          subtitleBold=""
          features={[
            {
              title: 'A content strategy built for AI answers',
              description:
                'After your kickoff call, our engineers use your product. We analyze your competitors, audit your existing content for gaps and opportunities, and conduct SEO and GEO research. Then we build a roadmap of content designed to earn mentions and citations in AI answers.',
              linkText: 'See how we turn content into citations',
              linkHref: '/drive-awareness',
            },
            {
              title: 'Content LLMs can quote',
              description:
                'AI tools quote passages, not pages. Our vetted engineer-writers refresh your existing content and create new explainers, definitions, tutorials and code samples that hold up on their own. Every piece is reviewed by real developers and edited by professional technical editors, so it is accurate enough to be cited.',
              linkText: 'See some of our content examples',
              linkHref: '/technical-content-examples',
            },
            {
              title: 'Mentions on the sources AI trusts',
              description:
                'Most of what an LLM knows about you comes from other sites. We earn mentions where developers and AI tools look: guest posts in developer publications, helpful answers on Reddit and Quora, placements in reviews and roundups, and Wikipedia where your product qualifies.',
              linkText: 'See our approach to content distribution',
              linkHref: '/content-distribution',
            },
          ]}
        />
        <div className="bg-gradient-brand">
          <SocialProof />
        </div>
        <Partner />
        <Testimonial
          quote="Having previously worked with draft.dev, I reached out to them within weeks of starting to help us accelerate our content creation. Our first pieces were published within weeks and ranked within the first month."
          name="Dawn Parzych"
          role="Head of Marketing"
          company="Shorebird"
          imageSrc="/media/testimonials-lg/dawn_parzych_shorebird_draft_dev.jpeg"
          imageAlt="Dawn Parzych"
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
            question: 'Is AEO and GEO just SEO with a new name?',
            answer:
              'No. They overlap, but they do different jobs. SEO gets you ranked in a list of links. AEO and GEO get you quoted inside an AI answer. That depends on how easy your content is to quote, and how often your brand shows up on the sites AI trusts. A page can rank well and still never get quoted.',
          },
          {
            question: 'How do you measure whether it is working?',
            answer:
              'We track your AI mentions and citations alongside traffic and leads. In our monthly analytics reviews you see which articles are getting cited and how that is trending, and we adjust the roadmap based on what is earning citations.',
          },
          {
            question: 'How long before we see citations?',
            answer:
              'It depends on where you start. One client with a brand-new domain got clicks from two major AI tools about eight weeks after publishing. Sites that already have content usually move faster, because we can improve existing pages as well as add new ones.',
          },
        ]}
      />
    </div>
  )
}
