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
  'Technical documentation services for developer tools. We create documentation, product guides and tested code samples, each reviewed by a subject matter expert.'

const heroDescription =
  'Our technical documentation services help developers get started faster. We create docs, product guides and code samples, with every sample tested by an engineer and every page reviewed by a subject matter expert.'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Technical Documentation Services Reviewed by Engineers - Draft.dev',
  description,
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/technical-documentation-for-devtools',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Technical Documentation Services Reviewed by Engineers - Draft.dev',
    description,
    images: [
      {
        url: '/draft/og/content_production_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Technical Documentation Services by Draft.dev',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical Documentation Services Reviewed by Engineers - Draft.dev',
    description,
    images: ['/draft/og/content_production_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: {
    canonical: 'https://draft.dev/technical-documentation-for-devtools',
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

export default function TechnicalDocumentationServices() {
  return (
    <div>
      <Hero
        title={'Technical Documentation\nfor Developer Tools'}
        description={heroDescription}
        primaryCTA={{ text: 'Book a Discovery Call', href: '#book-a-call' }}
        guide={{
          badge: 'Free eBook',
          title: 'How to Orchestrate Technical Content',
          href: '/orchestrate-technical-content',
          imageSrc:
            '/site/med-portrait/orchestrate-technical-content_draftdev.jpg',
        }}
      />
      <main>
        <Features
          title="Docs Developers Can Trust"
          subtitle="Accurate, tested and easy to follow"
          features={[
            {
              title: 'Getting-started guides',
              description:
                'We create quickstarts, how-tos and product guides that take developers from sign-up to a working result, in the same order a new user would follow.',
              linkText: 'See some of our content examples',
              linkHref: '/technical-content-examples',
            },
            {
              title: 'Code samples that run',
              description:
                'One of our engineers runs every code sample and command, so developers can copy, paste and get a working result.',
              linkText: 'See how we edit and test content',
              linkHref: '/technical-editing-services',
            },
            {
              title: 'Reviewed by experts',
              description:
                'A subject matter expert checks every page for technical accuracy, while a technical editor keeps the structure and terms consistent across your docs.',
              linkText: 'See how we helped clients like you',
              linkHref: '/build-trust',
            },
          ]}
        />
        <SocialProof title="A growth agency with a track record" compact />
        <Partner
          title="A growth partner that understands developers"
          paragraphs={[
            'Developers judge a product by its docs. If a quickstart breaks or a guide skips a step, they move on to the next tool.',
            "Many teams know their docs need work but can't spare engineers to write them. That's where technical documentation outsourcing helps, as long as the quality holds up.",
            'Every page goes through an engineer and a subject matter expert before it reaches you, so every page you publish is accurate.',
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
          title="How a developer API platform won 72% of its AI citations with Draft.dev"
          summary="A developer API platform needed guides and quickstart tutorials developers could follow. In seven months, we published 23 new articles and refreshed 3, and they now bring in 9 of every 10 blog views."
          stats={[
            {
              value: '72%',
              label: "Of the site's AI citations come from our articles",
            },
            { value: '10x', label: 'Blog views in seven months' },
            { value: '17 of 22', label: "Our articles on Google's first page" },
          ]}
          href="/case-studies/developer-api-platform"
          image={{
            src: '/site/med-portrait/developers_draft_dev.jpg',
            alt: 'Developers working together at a desk',
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
            question: 'What do your technical documentation services include?',
            answer:
              'Getting-started guides, how-to guides, product guides and tested code samples, each reviewed by a subject matter expert.',
          },
          {
            question:
              'Is technical documentation outsourcing a good fit for us?',
            answer:
              'It is if your engineers are busy building the product. We handle the research, writing and testing, so you get docs that are ready to publish.',
          },
          {
            question:
              'How do your technical documentation writing services work?',
            answer:
              'Every page starts with research into your product. One of our engineers tests the code and checks the steps. A technical editor makes the structure and terms consistent.',
          },
          {
            question: 'Do you offer product documentation services?',
            answer:
              'Yes. We create product guides that explain features, settings and workflows in plain language.',
          },
          {
            question: 'Do you test the code samples?',
            answer:
              'Yes. An engineer runs every code sample and command before the page is published.',
          },
          {
            question: 'Can you match our existing docs style?',
            answer:
              'Yes. Our technical editors follow your style guide, so new pages match the ones you already have.',
          },
        ]}
      />
      <BookCall />
    </div>
  )
}
