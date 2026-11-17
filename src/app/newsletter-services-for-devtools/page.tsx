import FAQ from '@/components/global/faq'
import SocialProof from '@/components/media/social-proof'
import TestimonialCarousel from '@/components/media/testimonials/testimonial-carousel'
import TestimonialsCarousel from '@/components/media/testimonials/testimonials-carousel'
import BookCall from '@/components/page-components/service-landing/book-call'
import CaseStudy from '@/components/page-components/service-landing/case-study'
import Features from '@/components/page-components/service-landing/features'
import Hero from '@/components/page-components/service-landing/hero'

import type { Metadata } from 'next'

const title =
  'Developer Newsletter Services for DevTools & AI Platforms - Draft.dev'

const description =
  'Developer newsletter services for devtools and AI platforms. We curate the news in your niche, write each issue, and send it from your email tool with your brand front and center.'

const heroDescription =
  'We write a developer newsletter that rounds up the news in your niche, with your brand front and center. Each issue keeps your product top of mind with the customers you already have.'

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
        title={'Newsletters for\nDevTools & AI Platforms'}
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
          eyebrow="Example Issue"
          title="See a real issue of DevTool Content Weekly"
          summary="Our own newsletter covers technical content, AI search and developer marketing news for DevRel and developer marketing teams. Yours follows the same format, built around your niche and your brand."
          stats={[
            { value: '30%', label: 'Average open rate' },
            { value: '8,500+', label: 'Sends' },
          ]}
          href="/newsletter"
          ctaText="See our newsletter"
          secondaryLink={{
            text: 'Book a discovery call',
            href: '#book-a-call',
          }}
          image={{
            src: '/site/med-portrait/newsletter-example-issue_draftdev.jpg',
            alt: 'DevTool Content Weekly, issue 4',
          }}
          imagePosition="top"
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
