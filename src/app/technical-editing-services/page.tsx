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
  'Technical editing services for developer tools. An engineer tests the code, an SME checks the accuracy, and a technical editor polishes each piece to your brand voice.'

const heroDescription =
  'Our technical editing services make sure every piece is accurate before developers see it. An engineer tests the code, while a subject matter expert checks the facts. A technical editor polishes it to your brand voice.'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Technical Editing Services with Engineer-Tested Code - Draft.dev',
  description,
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/technical-editing-services',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Technical Editing Services with Engineer-Tested Code - Draft.dev',
    description,
    images: [
      {
        url: '/draft/og/content_production_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Technical Editing Services by Draft.dev',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical Editing Services with Engineer-Tested Code - Draft.dev',
    description,
    images: ['/draft/og/content_production_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: {
    canonical: 'https://draft.dev/technical-editing-services',
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

export default function TechnicalEditingServices() {
  return (
    <div>
      <Hero
        title={'Technical Editing\nfor Developer Tools'}
        description={heroDescription}
        primaryCTA={{ text: 'Book a Discovery Call', href: '#book-a-call' }}
        guide={{
          badge: 'Free eBook',
          title: 'Technical Content Marketing Playbook',
          href: '/playbook',
          imageSrc:
            '/site/med-portrait/technical-content-playbook_draftdev.jpg',
        }}
      />
      <main>
        <Features
          title="Editing That Holds Up"
          subtitle="Three checks before anything reaches your readers"
          features={[
            {
              title: 'Code tested by engineers',
              description:
                'One of our engineers runs every code sample and command. If something breaks or a version is out of date, we fix it before the piece moves on.',
              linkText: 'See how we produce content',
              linkHref: '/content-production',
            },
            {
              title: 'Facts checked by experts',
              description:
                'A subject matter expert reads each piece as a developer would. They check the technical claims, the terminology and whether the steps make sense for your audience.',
              linkText: 'See some of our content examples',
              linkHref: '/technical-content-examples',
            },
            {
              title: 'Polished to your voice',
              description:
                'A technical editor shapes the structure, clarity and tone to match your brand guidelines. The result reads well for developers without losing technical depth.',
              linkText: 'See how we helped clients like you',
              linkHref: '/build-trust',
            },
          ]}
        />
        <SocialProof title="A growth agency with a track record" compact />
        <Partner
          title="A growth partner that understands developers"
          paragraphs={[
            'Developers notice small mistakes. One broken code sample or outdated version number is enough for them to stop trusting the whole piece, and your product with it.',
            "That's why editing at Draft.dev is more than proofreading. Every piece passes through an engineer, a subject matter expert and a technical editor before it reaches you.",
            "You get content that's ready to publish, so your team spends less time on reviews.",
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
          title="How Sinch Mailgun revived its developer-first content strategy and achieved 20–45% CTR with Draft.dev"
          summary="Sinch Mailgun's engineers had no time to create content. Our subject matter experts took over tutorials and testing content, which reached a 20–45% click-through rate and saved the team weeks of internal time."
          stats={[
            {
              value: '20–45%',
              label: 'Click-through rate on developer content',
            },
            { value: 'Weeks', label: 'Of internal engineering time saved' },
          ]}
          href="/case-studies/sinch-mailgun"
          image={{
            src: '/site/med-portrait/tutorials_draft_dev.jpg',
            alt: 'Developers working through a tutorial together',
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
            question: 'What do your technical editing services include?',
            answer:
              'Code testing by an engineer, a technical accuracy check by a subject matter expert, plus editing for structure, clarity and brand voice.',
          },
          {
            question: 'Who edits the content?',
            answer:
              'A technical editor does the final edit. Before that, one of our engineers tests the code and a subject matter expert checks the technical details.',
          },
          {
            question: 'Is editing included in content production?',
            answer:
              'Yes. Every piece we produce goes through the same editing process.',
          },
          {
            question: 'Can you follow our style guide?',
            answer:
              'Yes. Our technical editors polish every piece to match your brand guidelines.',
          },
          {
            question: 'Do you test the code samples?',
            answer:
              'Yes. An engineer runs every code sample and command before the piece is published.',
          },
          {
            question: 'Can you update our older articles?',
            answer:
              'Yes. Our content refreshes bring older articles up to date with current versions, tested code and better structure.',
          },
        ]}
      />
      <BookCall />
    </div>
  )
}
