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
import Link from 'next/link'

const description =
  'We build SEO content engines that help your product show up when engineers and buyers search. Our 300+ subject matter experts create technically accurate content that ranks on Google and turns readers into signups.'

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
      <Hero
        title="SEO Services for Developer Tools & Platforms"
        description={description}
        primaryCTA={{ text: 'Book a Discovery Call', href: '#book-a-call' }}
        guide={{
          badge: 'Free eBook',
          title: 'Keyword Audit & Topic Clusters',
          href: '/keyword-audit-topic-clusters',
          imageSrc: '/site/med-portrait/keyword-audit-guide_draftdev.jpg',
        }}
      />
      <main>
        <Features
          title="SEO That Reaches Engineers and the People Who Buy"
          subtitle="Content built around what your buyers search"
          features={[
            {
              title: 'Roadmap from research',
              description:
                'We study your product, competitors and existing content, then research what your buyers search for, like error messages, setup questions and comparisons. You get a content roadmap that starts with quick wins.',
              linkText: 'See how we turn content into growth',
              linkHref: '/drive-awareness',
            },
            {
              title: 'Content engineers trust',
              description:
                'We create the tutorials, how-to guides, integration pages and comparisons on that roadmap. A subject matter expert reviews every piece and tests the code, then a technical editor polishes it.',
              linkText: 'See some of our content examples',
              linkHref: '/technical-content-examples',
            },
            {
              title: 'Pages that keep ranking',
              description:
                "Each finished piece goes straight into your CMS with headings, links, metadata and images, so your team doesn't have to. Every month, we report on rankings, traffic and signups, and refresh pages that start to slip.",
              linkText: 'See how we publish within weeks',
              linkHref: '/#how-we-work',
            },
          ]}
        />
        <SocialProof title="A growth agency with a track record" compact />
        <Partner
          title="A growth partner that understands technical audiences"
          paragraphs={[
            'Your blog has to reach two kinds of readers. Engineers find you when they search for error messages, setup help or integrations. Buyers find you when they compare tools and look for alternatives. Most SEO agencies only focus on one of them. We create content for both.',
            "Content for engineers has to get the technical details right. That's why every piece is reviewed by a technical expert in your space, not a generalist. Before we start, we study your product, your competitors and your audience, so every piece sounds like it came from your own team.",
            'Once a piece is ready, we edit it and publish it for you. Every month, we report on your rankings, traffic and the signups your content brings in, and use what we learn to plan what comes next.',
          ]}
        />
        <TestimonialCarousel
          testimonials={[
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
          title="How Earthly increased its monthly blog visitors by 346% with Draft.dev"
          summary="Earthly needed technical content but lacked SEO know-how. Our keyword research and technical content grew its blog to 1,500 visitors per workday."
          stats={[
            { value: '346%', label: 'Increase in monthly blog visitors' },
            { value: '1,500', label: 'Blog visitors per workday' },
            { value: '6%', label: 'Conversion rate on blog content' },
          ]}
          href="/case-studies/earthly"
          image={{
            src: '/site/med-portrait/commit_draft_dev.jpg',
            alt: 'Engineer working on code across a laptop and monitor',
          }}
        />
        <TestimonialsCarousel
          exclude={[
            'Robert Gibb',
            'Dawn Parzych',
            'Rich Burroughs',
            'Randall Degges',
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
            question: 'How is this different from a regular SEO agency?',
            answer:
              'Most SEO agencies can build a keyword list. Few can produce a tutorial an engineer will read to the end. We do both, because our technical experts review every piece.',
          },
          {
            question: 'Who reviews the content?',
            answer:
              'One of our 300+ subject matter experts verifies the technical details, builds and tests the code, and reads the piece as a developer would. A technical editor then polishes it to your brand guidelines.',
          },
          {
            question: 'What kind of SEO content do you create?',
            answer:
              'Tutorials, how-to guides, integration pages, comparisons and alternatives pages. We also refresh older pages when their rankings start to slip.',
          },
          {
            question: 'Should our documentation rank too?',
            answer:
              'Often, yes. But your docs and your blog can compete for the same search. We look at both and decide what belongs where.',
          },
          {
            question: 'Do you do link building?',
            answer: (
              <>
                Yes, as an add-on service. We can also share your content on
                Dev.to, and through our{' '}
                <Link
                  href="/influencer-distribution-for-devtools"
                  className="text-secondary font-semibold underline"
                >
                  Influencer Distribution Network
                </Link>
                .
              </>
            ),
          },
          {
            question: 'How do you measure results?',
            answer:
              'Every month, we report on your rankings, traffic and the signups your content brings in. Then we use what we learn to plan what comes next.',
          },
        ]}
      />
      <BookCall />
    </div>
  )
}
