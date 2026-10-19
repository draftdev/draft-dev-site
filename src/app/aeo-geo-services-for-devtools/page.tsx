import FAQ from '@/components/global/faq'
import SocialProof from '@/components/media/social-proof'
import TestimonialCarousel from '@/components/media/testimonials/testimonial-carousel'
import TestimonialsCarousel from '@/components/media/testimonials/testimonials-carousel'
import BookCall from '@/components/page-components/service-landing/book-call'
import CaseStudy from '@/components/page-components/service-landing/case-study'
import Features from '@/components/page-components/service-landing/features'
import Hero from '@/components/page-components/service-landing/hero'
import Partner from '@/components/page-components/service-landing/partner'

import type { Metadata } from 'next'

const description =
  'We build AEO & GEO content engines that get your developer tool cited in AI answers. Our 300+ subject matter experts, backed by an AI-assisted process, create content that resonates with developers, search engines and LLMs.'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'AEO & GEO Services for Developer Tools & Platforms - Draft.dev',
  description,
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/aeo-geo-services-for-devtools',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'AEO & GEO Services for Developer Tools & Platforms - Draft.dev',
    description,
    images: [
      {
        url: '/site/med-landscape/aeo_geo_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'AEO & GEO Services by Draft.dev',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AEO & GEO Services for Developer Tools & Platforms - Draft.dev',
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
      <Hero
        title="AEO & GEO Services for Developer Tools & Platforms"
        description={description}
        primaryCTA={{ text: 'Book a Discovery Call', href: '#book-a-call' }}
        guide={{
          badge: 'Free Guide',
          title: 'AEO & GEO Guide for DevTools',
          href: '/aeo-geo-for-devtools',
          imageSrc: '/site/med-portrait/aeo-geo-for-devtools_draftdev.jpg',
        }}
      />
      <main>
        <Features
          title="Get Your Product Into AI Answers"
          subtitle="Content and strategy built to earn AI mentions and citations"
          features={[
            {
              title: 'A content strategy built for AI answers',
              description:
                'Our engineers use your product. We analyze your competitors, audit your existing content for gaps and opportunities, and conduct SEO and GEO research. Then we build a roadmap of content designed to earn mentions and citations in AI answers.',
              linkText: 'See how we turn content into citations',
              linkHref: '/drive-awareness',
            },
            {
              title: 'Content LLMs can quote',
              description:
                'AI tools quote passages, not pages. We create new explainers, definitions, tutorials and code samples that hold up on their own, and refresh existing pages when needed. Every piece starts with deep research, is checked by one of our 300+ engineers for technical accuracy, and is polished by a technical editor, so it is accurate enough to be cited.',
              linkText: 'See some of our content examples',
              linkHref: '/technical-content-examples',
            },
            {
              title: 'Mentions on the sources AI trusts',
              description:
                'Most of what an LLM knows about you comes from other sites. We distribute your content on developer platforms that AI tools cite heavily, like Dev.to, Hashnode and Coder Legion. Our Influencer Distribution Network of developer micro-influencers also shares it, giving your product more chances to be mentioned and cited.',
              linkText: 'See our approach to content distribution',
              linkHref: '/content-distribution',
            },
          ]}
        />
        <SocialProof title="A growth agency with a track record" compact />
        <Partner
          title="A growth partner with measurable results"
          paragraphs={[
            "Developers increasingly ask an AI assistant before they open a search tab, and most developer marketing teams can't tell whether that answer names their product or a competitor's. A page can rank well on Google and still never be cited.",
            'Unlike agencies that simply renamed SEO as GEO, we treat it as two jobs: making your own pages easy for LLMs to quote, and earning mentions on the third-party sources they trust. Both need people who know your category, because developers, and the AI tools they use, ignore generic content.',
            'We create and publish citation-ready content. Then we share it on developer platforms that AI tools cite, and through our Influencer Distribution Network. Each month, we track your AI mentions and citations alongside traffic and leads, and adjust the roadmap based on what is working.',
          ]}
        />
        <TestimonialCarousel
          testimonials={[
            {
              quote:
                'Having previously worked with draft.dev, I reached out to them within weeks of starting to help us accelerate our content creation. Our first pieces were published within weeks and ranked within the first month.',
              name: 'Dawn Parzych',
              role: 'Head of Marketing',
              company: 'Shorebird',
              imageSrc:
                '/media/testimonials-lg/dawn_parzych_shorebird_draft_dev.jpeg',
              facePosition: '50% 20%',
              faceZoom: 1,
            },
            {
              quote:
                'Draft.dev has been an amazing partner, helping us scale our content program by creating thoughtful and technically-sound developer content and training materials.',
              name: 'Randall Degges',
              role: 'Head of Developer & Security Relations',
              company: 'snyk',
              imageSrc:
                '/media/testimonials-lg/randall_degges_snyk_draft_dev.jpg',
              facePosition: '50% 0%',
              faceZoom: 1,
            },
            {
              quote:
                "It's given us a steadier flow of content, which has helped our brand's visibility, and some of the posts are among the most popular ones we've published.",
              name: 'Rich Burroughs',
              role: 'Developer Advocate',
              company: 'Loft Labs',
              imageSrc:
                '/media/testimonials-lg/rich_burroughs_loft_labs_draft_dev.jpg',
              facePosition: '50% 26%',
              faceZoom: 1,
            },
          ]}
        />
        <CaseStudy
          title="How a GPU cloud platform's new content earned 10x the AI traffic of its legacy pages"
          summary="Original content outperformed refreshed legacy pages that started with more authority. One article was cited by all three major AI assistants in a single month."
          stats={[
            { value: '10x', label: 'AI traffic vs. refreshed legacy pages' },
            {
              value: '3 of 3',
              label: 'Major AI assistants citing one article',
            },
            { value: '29', label: 'Pieces published in under 5 months' },
          ]}
          href="/case-studies/gpu-cloud-platform"
          image={{
            src: '/site/med-portrait/code_session_draft_dev.jpg',
            alt: 'Engineer working on code across two screens',
          }}
        />
        <TestimonialsCarousel
          exclude={[
            'Dawn Parzych',
            'Randall Degges',
            'Rich Burroughs',
            'Robert Gibb',
            'Emily Blitstein',
          ]}
        />
        <TestimonialCarousel
          testimonials={[
            {
              quote:
                'Anyone tasked with marketing to developers knows that they are a community that can smell B.S. from a mile away. Having a dedicated technical resource available is a great support for creating content that both matters to our users and is also useful and accurate.',
              name: 'Em Blitstein',
              role: 'Senior Content Marketing Manager',
              company: 'Sinch Mailgun',
              imageSrc: '/media/testimonials-lg/em_sinch_mailgun.jpg',
              facePosition: '50% 36%',
              faceZoom: 1,
            },
            {
              quote:
                'In a matter of weeks, our referral traffic and organic keyword rankings increased by 3x. One post also hit Hacker News which resulted in 5 demo requests in a single day!',
              name: 'Robert Gibb',
              role: 'Content Marketing Manager',
              company: 'Fabric',
              imageSrc:
                '/media/testimonials-lg/robert_gibb_fabric_draft_dev.jpg',
              facePosition: '50% 30%',
              faceZoom: 1,
            },
            {
              quote:
                'They have helped us double our audience, attract more trial users, and increase our trial conversion rate.',
              name: 'Henry Poydar',
              role: 'Founder & CEO',
              company: 'Status Hero',
              imageSrc:
                '/media/testimonials-lg/henry_poydar_steady_draft_dev.jpg',
              facePosition: '50% 30%',
              faceZoom: 1,
            },
          ]}
        />
      </main>
      <FAQ
        className="pt-14 pb-8"
        callHref="#book-a-call"
        title="Common Questions We Get Asked"
        headingClassName="subheader-mobile-gradient sm:subheader-gradient"
        masonry
        standardFaqs={false}
        pageFaqs={[
          {
            question: 'Is AEO & GEO just SEO with a new name?',
            answer:
              'No. They overlap, but they do different jobs. SEO gets you ranked in a list of links. AEO & GEO get you quoted inside an AI answer. That depends on how easy your content is to quote, and how often your brand shows up on the sites AI trusts. A page can rank well and still never get quoted.',
          },
          {
            question: 'How do you measure whether it is working?',
            answer:
              'We track your AI mentions and citations alongside traffic and leads. In our monthly analytics reviews you see which articles are getting cited and how that is trending, and we adjust the roadmap based on what is earning citations.',
          },
          {
            question: 'Do we still need SEO?',
            answer:
              'Yes. AEO & GEO build on SEO, not replace it. AI answers draw on the same search systems, so strong SEO is still the starting point, and we work on both.',
          },
          {
            question: 'Who checks that the content is accurate?',
            answer:
              'One of our 300+ engineers, who are subject matter experts. They check the technical details, build and test the code, and read the whole piece as a developer would. A technical editor then polishes it to match your brand guidelines.',
          },
          {
            question: 'Where do you share our content?',
            answer:
              'On developer platforms that AI tools cite heavily, like Dev.to, Hashnode and Coder Legion, and through our Influencer Distribution Network of developer micro-influencers.',
          },
          {
            question: 'How long before we see citations?',
            answer:
              'It depends on where you start. One client with a brand-new domain started getting clicks from two major AI tools within weeks of publishing. Sites that already have content usually move faster, because we can improve existing pages as well as add new ones.',
          },
        ]}
      />
      <BookCall />
    </div>
  )
}
