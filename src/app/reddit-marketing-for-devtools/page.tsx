import FAQ from '@/components/global/faq'
import ServiceHeader from '@/components/global/headers/service-header-content-strategy'
import MedCaseEarthly from '@/components/media/case-studies/med-case-earthly'
import { LogosDark } from '@/components/media/logos-dark'
import SocialProof from '@/components/media/social-proof'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import Partner from '@/components/page-components/reddit-marketing/partner'
import Why from '@/components/page-components/why'

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
      <ServiceHeader
        title="Reddit Marketing for Developer Tools & Platforms"
        description={description}
        leadMagnet={{
          badge: 'Free Guide',
          text: 'Distributing Content on Social Media and Generating Leads from Gated Assets',
          href: '/distributing-content-on-social-media',
        }}
        primaryCTA={{
          text: 'Book a Discovery Call',
          href: '/call',
        }}
        secondaryCTA={{
          text: 'See our full approach to content distribution',
          href: '/content-distribution',
        }}
      />
      <main>
        <div className="bg-gradient-brand">
          <SocialProof showHeading={false} />
        </div>
        <Why
          title="Get Mentioned in Reddit Threads That Already Rank"
          subtitle="Helpful answers from real engineers, in the threads your buyers already read"
          subtitleBold=""
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
        <div className="bg-gradient-brand">
          <SocialProof />
        </div>
        <Partner />
        <Testimonial
          quote="Having draft.dev source quality technical content for the Loft Labs blog has been a competitive advantage. It's given us a steadier flow of content, which has helped our brand's visibility, and some of the posts are among the most popular ones we've published."
          name="Rich Burroughs"
          role="Developer Advocate"
          company="Loft Labs"
          imageSrc="/media/testimonials-lg/rich_burroughs_loft_labs_draft_dev.jpg"
          imageAlt="Rich Burroughs"
        />
        <MedCaseEarthly />
        <LogosDark />
        <TestimonialsGroup />
        <Testimonial
          quote="Anyone tasked with marketing to developers knows that they are a community that can smell B.S. from a mile away. Having a dedicated technical resource available is a great support for creating content that both matters to our users and is also useful and accurate."
          name="Em Blitstein"
          role="Senior Content Marketing Manager"
          company="Sinch Mailgun"
          imageSrc="/media/testimonials-lg/em_sinch_mailgun.jpg"
          imageAlt="Em Blitstein"
        />
      </main>
      <FAQ
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
    </div>
  )
}
