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
  'We build content strategies that put your developer tool in front of the right engineers at the right time. Our technical experts use your product, study your market and turn what they find into a clear roadmap.'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title:
    'Content Strategy Services for Developer Tools & Platforms - Draft.dev',
  description,
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/content-strategy-services',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title:
      'Content Strategy Services for Developer Tools & Platforms - Draft.dev',
    description,
    images: [
      {
        url: '/draft/og/content_strategy_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Content Strategy by Draft.dev',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Content Strategy Services for Developer Tools & Platforms - Draft.dev',
    description,
    images: ['/draft/og/content_strategy_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: {
    canonical: 'https://draft.dev/content-strategy-services',
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

export default function ContentStrategyServices() {
  return (
    <div>
      <Hero
        title="Content Strategy for Developer Tools"
        description={description}
        primaryCTA={{ text: 'Book a Discovery Call', href: '#book-a-call' }}
        guide={{
          badge: 'Free Checklist',
          title: 'The Content Engine Checklist',
          href: '/content-engine-checklist',
          imageSrc: '/site/med-portrait/content-engine-checklist_draftdev.jpg',
        }}
      />
      <main>
        <Features
          title="Strategy Built on Research"
          subtitle="Every roadmap starts with your product and your buyers"
          features={[
            {
              title: 'Product research',
              description:
                'Our engineers sign up and use your product the way your users do. We study your competitors and the questions developers ask search engines and AI tools, so we know where your content can win.',
              linkText: 'See how we turn content into growth',
              linkHref: '/drive-awareness',
            },
            {
              title: 'Roadmap tied to your goals',
              description:
                'We audit your existing content for gaps and quick wins, then build a roadmap of tutorials, comparisons, guides and refreshes. Each piece maps to a stage of the buyer journey and lines up with your product releases.',
              linkText: 'See some of our content examples',
              linkHref: '/technical-content-examples',
            },
            {
              title: 'Monthly reviews',
              description:
                "Every month, we review rankings, AI citations, traffic and signups with you. We keep what works, drop what doesn't and update the roadmap based on real results.",
              linkText: 'See how we helped clients like you',
              linkHref: '/build-trust',
            },
          ]}
        />
        <SocialProof title="A growth agency with a track record" compact />
        <Partner
          title="A growth partner that understands developers"
          paragraphs={[
            'Most developer marketing teams face the same questions: which content will drive results, whether SEO still matters, and how AI search changes things. A good strategy answers them with research into your product, your market and your buyers.',
            'Developers trust content made for them, value technical accuracy and decide based on hands-on experience. So our technical experts start by using your product, and our growth marketers study how your buyers search.',
            'The result is a roadmap your team can act on, reviewed with you every month and updated as your product and market change.',
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
          summary="A GPU cloud platform needed a plan for every buyer stage. Our audit and dated roadmap led to 29 pieces in under five months, and one article got cited by all three major LLMs."
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
            question: 'What does a content strategy include?',
            answer:
              'Product and competitor research, an audit of your existing content, search and AI visibility research, and a roadmap of pieces mapped to your buyer journey.',
          },
          {
            question: 'Do you look at our existing content?',
            answer:
              'Yes. We audit what you have, find gaps and pages worth refreshing, and add quick wins to the roadmap.',
          },
          {
            question: 'Does the strategy cover AI search as well as Google?',
            answer:
              'Yes. We research what developers ask both search engines and AI tools like ChatGPT, and plan content that can rank and get cited.',
          },
          {
            question: 'What types of content go into the roadmap?',
            answer:
              'Tutorials, technical deep dives, comparison pages, thought leadership, ebooks, whitepapers, content refreshes and social posts, depending on your goals.',
          },
          {
            question: 'How do you measure success?',
            answer:
              "We track rankings, AI citations, traffic and signups, and review them with you every month. Then we update the roadmap based on what's working.",
          },
          {
            question: 'Can you produce the content too?',
            answer:
              'Yes. Our content production team can write, review and publish every piece on the roadmap.',
          },
        ]}
      />
      <BookCall />
    </div>
  )
}
