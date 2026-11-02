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
  'Content audit services for developer tools. We review your technical content against competitors and SEO and AEO data, then map the gaps to fill and the posts to refresh first.'

const heroDescription =
  'We review your technical content against competitors, search data and AI answers. You get a clear list of the gaps worth filling and the older posts to refresh first.'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title:
    'Content Audit Services with SEO and AEO Visibility Research - Draft.dev',
  description,
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/content-audit-for-devtools',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title:
      'Content Audit Services with SEO and AEO Visibility Research - Draft.dev',
    description,
    images: [
      {
        url: '/draft/og/content_strategy_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Content Audit Services by Draft.dev',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Content Audit Services with SEO and AEO Visibility Research - Draft.dev',
    description,
    images: ['/draft/og/content_strategy_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: {
    canonical: 'https://draft.dev/content-audit-for-devtools',
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

export default function ContentAuditServices() {
  return (
    <div>
      <Hero
        title={'Content Audit Services\nfor Developer Tools'}
        description={heroDescription}
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
          title="Audits Built on Real Data"
          subtitle="See where your content stands, then fix what matters most"
          features={[
            {
              title: 'Content inventory',
              description:
                'We review every post on your blog for what it covers, how it ranks and whether AI tools cite it. Our engineers also check older tutorials for outdated versions or code that no longer runs.',
              linkText: 'See how we turn content into growth',
              linkHref: '/drive-awareness',
            },
            {
              title: 'Competitor gaps',
              description:
                "We compare your content with your competitors' to find the questions developers ask that you don't answer yet. Each gap comes with a suggested format, from tutorials to comparison pages.",
              linkText: 'See some of our content examples',
              linkHref: '/technical-content-examples',
            },
            {
              title: 'Ranked action plan',
              description:
                'You get a ranked list of what to fix first. Quick wins come before big rewrites, so older posts start winning back rankings and AI citations sooner.',
              linkText: 'See how we helped clients like you',
              linkHref: '/build-trust',
            },
          ]}
        />
        <SocialProof title="A growth agency with a track record" compact />
        <Partner
          title="A growth partner that understands developers"
          paragraphs={[
            "Most technical blogs grow one post at a time. After a few years, nobody knows which posts still rank, which ones have broken code, or what competitors cover that you don't.",
            'Our content audit services answer those questions. Our engineers read your content as developers would, while our growth marketers dig into search and AI visibility data.',
            'The result is a short, ranked plan your team can act on. We can also carry it out for you through our content production team.',
          ]}
        />
        <TestimonialCarousel
          testimonials={[
            {
              quote:
                'What impressed me the most was that as traffic grew, I was expecting a slight drop in conversion rates from visitors to signups, surprisingly it stayed consistent at 10-15%. Helping us not only hit our goals but exceed them.',
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
          title="How a GPU cloud platform got 10x more AI traffic with Draft.dev"
          summary="A GPU cloud platform had strong older pages that had gone stale. Our audit found the gaps, and the roadmap that followed led to 29 pieces in under five months."
          stats={[
            { value: '10x', label: 'More AI traffic than older pages' },
            { value: '3 of 3', label: 'Major LLMs cited one article' },
            { value: '29', label: 'Pieces published in under 5 months' },
          ]}
          href="/case-studies/gpu-cloud-platform"
          image={{
            src: '/site/med-portrait/laptop_draft_dev.jpg',
            alt: 'Developer planning work on a laptop',
          }}
        />
        <TestimonialsCarousel
          exclude={[
            'Dawn Parzych',
            'Robert Gibb',
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
                'Content is one of the biggest and best channels you can invest in. And if you want to quickly scale without compromising the quality and expertise, Draft.dev is the way to go.',
              name: 'Rahul Patwardhan',
              role: 'Senior Director, Demand Generation',
              company: 'Loft Labs',
              imageSrc:
                '/media/testimonials-lg/rahul_patwardhan_loft_labs_draft_dev.jpg',
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
            question: 'What do your content audit services include?',
            answer:
              'A review of your existing content, a comparison with competitors, SEO and AEO visibility research, plus a ranked plan of gaps to fill and posts to refresh.',
          },
          {
            question: 'What do we get at the end?',
            answer:
              'A ranked list of actions: new pieces to create, older posts to refresh, with the reason behind each one.',
          },
          {
            question: 'Does the audit cover AI search?',
            answer:
              'Yes. We check whether AI tools like ChatGPT cite your pages, then look for content that could earn more citations.',
          },
          {
            question: 'Can you check our code samples?',
            answer:
              'Yes. Our engineers review older tutorials for outdated versions or code that no longer runs.',
          },
          {
            question: 'Can you fix what the audit finds?',
            answer:
              'Yes. Our team can write new pieces and refresh older ones based on the plan.',
          },
          {
            question: 'How is this different from an SEO audit?',
            answer:
              'An SEO audit looks at rankings. We also check technical accuracy, working code and AI visibility, with engineers who know your space.',
          },
        ]}
      />
      <BookCall />
    </div>
  )
}
