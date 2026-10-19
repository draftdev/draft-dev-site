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
  'We help your developer tool rank for what your buyers search. Our 300+ subject matter experts write content that brings in traffic and signups.'

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
          title: 'Building and Scaling Developer Marketing',
          href: '/developer-marketing',
          imageSrc:
            '/site/med-portrait/building-scaling-developer-marketing_draftdev.jpg',
        }}
      />
      <main>
        <Features
          title="SEO That Reaches Engineers and the People Who Buy"
          subtitle="Content built around what your buyers search, not guesswork"
          features={[
            {
              title: 'From research to an SEO roadmap',
              description:
                'Our engineers use your product. Then we find what your buyers search for, like error messages, setup questions and comparisons, and where competitors outrank you. You get a clear content plan, starting with quick wins.',
              linkText: 'See how we turn content into growth',
              linkHref: '/drive-awareness',
            },
            {
              title: 'Content written by vetted engineers',
              description:
                'Developers can tell when a writer has never used the tool. So every piece is planned by a strategist, written by one of our 300+ engineer-writers, and edited by a technical editor. We write tutorials, how-to guides, integration pages and comparisons.',
              linkText: 'See some of our content examples',
              linkHref: '/technical-content-examples',
            },
            {
              title: 'Publishing straight into your CMS',
              description:
                'We publish straight into your CMS, with headings, links, metadata and images, so your team does not have to. When older pages start to slip, we refresh them too.',
              linkText: 'See how we publish within weeks',
              linkHref: '/#how-we-work',
            },
          ]}
        />
        <SocialProof title="A growth agency with a track record" compact />
        <Partner
          title="A growth partner that understands technical audiences"
          paragraphs={[
            'Your blog has two kinds of readers. Engineers search for error messages, setup help and integrations. Buyers search for comparisons and alternatives. You need content for both, and most SEO agencies only plan for one.',
            'Developers trust content from people who have used the tools. That is why our writers are engineers, not generalists. We study your product, competitors and audience, so every piece sounds like it came from your team.',
            'We write, edit and publish your pages. Every month we report on rankings, traffic and signups from content, then adjust the plan based on what is working.',
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
          summary="Earthly needed technical content but lacked SEO know-how. Our engineer-writers and keyword research grew its blog to 1,500 visitors per workday."
          stats={[
            { value: '346%', label: 'Increase in monthly blog visitors' },
            { value: '1,500', label: 'Blog visitors per workday' },
            { value: '6%', label: 'Conversion rate on blog content' },
          ]}
          href="/case-studies/earthly"
          image={{
            src: '/media/testimonials-lg/adam_bell_earthly_draft_dev.jpg',
            alt: 'Adam Gordon Bell, Director of Developer Relations, Earthly',
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
        pageFaqs={[
          {
            question: 'How is this different from a regular SEO agency?',
            answer:
              'Most SEO agencies can build a keyword list. Few can write a tutorial an engineer will read to the end. We do both, because our writers are engineers.',
          },
          {
            question: 'Should our documentation rank too?',
            answer:
              'Often, yes. But your docs and your blog can compete for the same search. We look at both and decide what belongs where.',
          },
          {
            question: 'Do you do link building?',
            answer:
              'Not as a separate service. We earn links with content worth linking to. Then we share it on developer platforms like Dev.to and Hashnode, and through our Influencer Distribution Network.',
          },
        ]}
      />
      <BookCall />
    </div>
  )
}
