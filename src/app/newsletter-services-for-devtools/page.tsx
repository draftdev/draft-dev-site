import FAQ from '@/components/global/faq'
import SocialProof from '@/components/media/social-proof'
import TestimonialsCarousel from '@/components/media/testimonials/testimonials-carousel'
import BookCall from '@/components/page-components/service-landing/book-call'
import Features from '@/components/page-components/service-landing/features'
import Hero from '@/components/page-components/service-landing/hero'
import Partner from '@/components/page-components/service-landing/partner'

import type { Metadata } from 'next'

const title =
  'Developer Newsletter Services for DevTools & AI Platforms - Draft.dev'

const description =
  'Developer newsletter services for devtools and AI platforms. We curate the news in your niche, write each issue, and send it from your email tool with your brand front and center.'

const heroDescription =
  'We write a roundup of the news in your niche that developers want to read, with your brand front and center. Each issue keeps your product top of mind with the customers you already have.'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title,
  description,
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/newsletter-services-for-devtools',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title,
    description,
    images: [
      {
        url: '/draft/og/newsletter_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Developer Newsletter Services by Draft.dev',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/draft/og/newsletter_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: {
    canonical: 'https://draft.dev/newsletter-services-for-devtools',
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

export default function NewsletterServices() {
  return (
    <div>
      <Hero
        title={'Developer Newsletters for\nDevTools & AI Platforms'}
        description={heroDescription}
        primaryCTA={{ text: 'Book a Discovery Call', href: '#book-a-call' }}
        guide={{
          badge: 'Free Newsletter',
          title: 'DevTool Content Weekly',
          href: '/newsletter',
          imageSrc: '/site/med-portrait/newsletter-services_draftdev.jpg',
          cta: 'See an example issue',
        }}
      />
      <main>
        <Features
          title="How Each Issue Comes Together"
          subtitle="Curate, write and send, monthly or twice a month"
          features={[
            {
              title: 'Curated for your niche',
              description:
                'We track the news, releases and debates in your space, then pick the stories your developers care about.',
              linkText: 'See our own newsletter',
              linkHref: '/newsletter',
            },
            {
              title: 'Written and checked',
              description:
                'We write each story to be short and easy to scan. Subject matter experts check the technical stories, just like our articles.',
              linkText: 'See how we produce content',
              linkHref: '/content-production',
            },
            {
              title: 'Sent with your brand',
              description:
                'Your brand and links run through every issue. We send it to your list from your own email tool.',
              linkText: 'See how we distribute content',
              linkHref: '/content-distribution',
            },
          ]}
        />
        <SocialProof title="A growth agency with a track record" compact />
        <Partner
          title="A Newsletter Your Customers Open"
          paragraphs={[
            'Developers who already use your product still need a reason to come back. A short roundup of what changed in their world gives them one, every month or twice a month.',
            "Because it's your newsletter, every issue puts your brand next to news they care about, without reading like an ad.",
            'Our own newsletter, DevTool Content Weekly, averages a 30% open rate across 8,500+ sends. We bring the same approach to yours.',
          ]}
        />
        <TestimonialsCarousel />
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
            question: 'What is a developer newsletter service?',
            answer:
              'We write and send a roundup newsletter for your audience. Each issue covers the news in your niche and carries your brand.',
          },
          {
            question: 'How often do you send it?',
            answer:
              'Monthly or twice a month. You choose the schedule that fits your audience.',
          },
          {
            question: 'Who sends the newsletter?',
            answer:
              'We do. Each issue goes out to your list from your own email tool, so it comes from your brand.',
          },
          {
            question: 'Who checks the technical stories?',
            answer:
              'Our subject matter experts check them, the same way they review our articles.',
          },
          {
            question: 'Will the newsletter promote our product?',
            answer:
              'Yes. Your brand and links run through every issue, next to the news your developers want to read.',
          },
          {
            question: 'Can we combine it with other services?',
            answer:
              'Yes. The newsletter works on its own or alongside our content, distribution and paid programs.',
          },
        ]}
      />
      <BookCall />
    </div>
  )
}
