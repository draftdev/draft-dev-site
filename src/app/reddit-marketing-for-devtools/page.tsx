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
  'We get your product mentioned on Reddit, in the threads your buyers already read. Each comment is written by a vetted engineer who knows the topic. These threads already show up in Google and in AI answers.'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Reddit Marketing for Developer Tools & Platforms - Draft.dev',
  description,
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/reddit-marketing-for-devtools',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Reddit Marketing for Developer Tools & Platforms - Draft.dev',
    description,
    images: [
      {
        url: '/draft/og/distributing_content_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Reddit Marketing by Draft.dev',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reddit Marketing for Developer Tools & Platforms - Draft.dev',
    description,
    images: ['/draft/og/distributing_content_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: {
    canonical: 'https://draft.dev/reddit-marketing-for-devtools',
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

export default function RedditMarketing() {
  return (
    <div>
      <Hero
        title="Reddit Marketing for Developer Tools & Platforms"
        description={description}
        primaryCTA={{ text: 'Book a Discovery Call', href: '#book-a-call' }}
        guide={{
          badge: 'Free eBook',
          title: 'Distributing Content on Social Media',
          href: '/distributing-content-on-social-media',
          imageSrc:
            '/site/med-portrait/distributing-content-social-media_draftdev.jpg',
        }}
      />
      <main>
        <Features
          title="Get Mentioned in Reddit Threads That Already Rank"
          subtitle="Helpful answers from real engineers, in the threads your buyers already read"
          features={[
            {
              title: 'Find the right threads',
              description:
                "After your kickoff call, our engineers use your product. Then we find the subreddits where people talk about tools like yours. We pick threads that already show up in Google, where a mention of your product would really help the person asking. We don't start new threads, host AMAs (Ask Me Anything sessions), or buy Reddit ads.",
              linkText: 'See how we turn content into growth',
              linkHref: '/drive-awareness',
            },
            {
              title: 'Mentions written by subject matter experts',
              description:
                "Reddit removes ads and self-promotion, and developers spot it right away. So every comment is written by one of our 300+ vetted engineer-writers who has used tools like yours. It answers the question and doesn't include a link. A comment only lasts if it is helpful on its own.",
              linkText: 'See some of our content examples',
              linkHref: '/technical-content-examples',
            },
            {
              title: 'Measure what matters, not clicks',
              description:
                "These comments don't include links, so clicks aren't the right measure. Instead, we track where your mentions appear, how those threads rank in Google, and how often AI tools mention and cite your product. Each month you see the before and after.",
              linkText: 'See our approach to AEO and GEO',
              linkHref: '/aeo-geo-services-for-devtools',
            },
          ]}
        />
        <SocialProof title="A growth agency with a track record" compact />
        <Partner
          title="A distribution partner that understands technical communities"
          paragraphs={[
            "Developers talk about your category on Reddit, and those threads often rank above your own website, in Google and in AI answers. But developers don't trust marketing, and subreddits quickly remove anything that looks like promotion. So most teams stay out.",
            "That is why we don't sell upvotes or post lots of comments. We follow each subreddit's rules, and our vetted writers only comment where they can actually answer the question, like a helpful engineer, not a marketer.",
            'Once you approve the list of threads, we post the comments and watch how each thread performs. Every month, we show you which threads help people find you, and we update the list based on what works.',
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
                'Content is one of the biggest and best channels you can invest in. And if you want to quickly scale without compromising the quality and expertise, Draft.dev is the way to go.',
              name: 'Rahul Patwardhan',
              role: 'Senior Director, Demand Generation',
              company: 'Loft Labs',
              imageSrc:
                '/media/testimonials-lg/rahul_patwardhan_loft_labs_draft_dev.jpg',
              facePosition: '50% 20%',
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
            src: '/site/med-portrait/dev_3.jpg',
            alt: 'Engineers reviewing code together',
          }}
        />
        <TestimonialsCarousel
          exclude={[
            'Emily Blitstein',
            'Robert Gibb',
            'Rich Burroughs',
            'Randall Degges',
          ]}
        />
        <TestimonialCarousel
          testimonials={[
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
        pageFaqs={[
          {
            question: 'Will this get us banned?',
            answer:
              "We avoid that by following each subreddit's rules. We don't start threads, host AMAs, buy ads, or post where the rules don't allow it. We only add comments that are helpful even without your product name in them.",
          },
          {
            question: "Why don't the comments include a link?",
            answer:
              'Subreddits often remove comments with links because they look like promotion. A mention without a link still helps. These threads show up in Google and in AI answers, so people see your product name when they are choosing a tool.',
          },
          {
            question: 'How do you measure results without clicks?',
            answer:
              'We track where your mentions appear, how those threads rank in Google, and how often AI tools mention and cite your product. You see the before and after in our monthly reviews.',
          },
        ]}
      />
      <BookCall />
    </div>
  )
}
