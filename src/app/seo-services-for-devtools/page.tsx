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
          subtitle="Built on how your buyers actually search, not guesswork"
          features={[
            {
              title: 'From research to an SEO roadmap',
              description:
                'Our engineers use your product. We review your existing pages and find what your buyers search for: error messages, setup questions, integrations and comparisons. We also check where competitors rank above you. You get a map of topics to cover, a content calendar with clear deliverables, and a list of quick wins we can publish first.',
              linkText: 'See how we turn content into growth',
              linkHref: '/drive-awareness',
            },
            {
              title: 'Content written by vetted engineers',
              description:
                'Developers trust content written by other developers, and they can tell quickly if the writer has never used the tool. Every piece is planned by a strategist, written by one of our 300+ vetted engineer-writers, and edited by a professional technical editor. We write tutorials, how-to guides, integration pages, comparison pages and technical deep dives.',
              linkText: 'See some of our content examples',
              linkHref: '/technical-content-examples',
            },
            {
              title: 'Publishing straight into your CMS',
              description:
                'We publish straight into your CMS, with headings, internal links, metadata, schema markup and images, so nothing sits waiting for your team. When older pages start slipping as versions change, we can refresh them too.',
              linkText: 'See how we publish within weeks',
              linkHref: '/#how-we-work',
            },
          ]}
        />
        <SocialProof title="A growth agency with a track record" compact />
        <Partner
          title="A growth partner that understands technical audiences"
          paragraphs={[
            'Most developer marketing teams face the same problem. The engineers who could write great content are busy building the product. And your blog has two kinds of readers. Engineers find you by searching for error messages, setup problems and integrations. The people who approve the purchase find you through comparisons and alternatives. You need content for both, and most SEO agencies only plan for one.',
            'Unlike generic SEO agencies, we understand that developers trust peer-written content, value technical accuracy over marketing speak, and make decisions based on hands-on experience. We analyze your industry, competitors, positioning, product features, target audience, and brand voice to ensure authentic output. Our vetted writers are engineers who have used the tools they write about.',
            'We write, edit and publish your pages, and refresh the ones losing ground when needed. Every month we report on rankings, traffic and the signups that came from content, not just vanity metrics. Then we adjust the roadmap based on real results.',
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
          summary="Earthly needed high-quality technical content but lacked in-house SEO knowledge. Our subject matter expert writers and keyword research grew its blog to 1,500 visitors per workday."
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
              'Most SEO agencies can run an audit and build a keyword list. Few can write a technical tutorial that an engineer will read to the end. We do both, and our vetted writers are working engineers, not generalists.',
          },
          {
            question: 'What about our documentation? Should it rank too?',
            answer:
              'Often, yes. But your docs and your blog can end up competing for the same search. We review both together and decide what belongs where, so they stop competing.',
          },
          {
            question: 'Do you do link building?',
            answer:
              'Not as a separate service. We earn links by publishing content worth linking to, then sharing it on developer platforms like Dev.to and Hashnode and through our Influencer Distribution Network.',
          },
        ]}
      />
      <BookCall />
    </div>
  )
}
