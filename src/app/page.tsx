import {
  generateOrganizationSchema,
  generateServiceSchema,
  generateWebSiteSchema,
} from '@/app/lib/schema'
import FAQ from '@/components/global/faq'
import SocialProof from '@/components/media/social-proof'
import Testimonial from '@/components/media/testimonials/testimonial'
import Testimonials from '@/components/media/testimonials/testimonials-group'
import CaseStudyHome from '@/components/page-components/home/case-study-home'
import Hero from '@/components/page-components/home/hero'
import How from '@/components/page-components/how'
import Why from '@/components/page-components/why'
import type { Metadata } from 'next'
import HowImage from '/public/site/med-portrait/commit_draft_dev.webp'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'AI-powered tech marketing. Vetted by expert engineers and editors - Draft.dev',
  description:
    'We build growth marketing engines for the world\'s best tech companies, blending the speed of AI with the expertise of humans-in-the-loop.',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],

  openGraph: {
    type: 'website',
    url: 'https://draft.dev',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'AI-powered tech marketing. Vetted by expert engineers and editors - Draft.dev',
    description:
      'We build growth marketing engines for the world\'s best tech companies, blending the speed of AI with the expertise of humans-in-the-loop.',
    images: [
      {
        url: '/draft/og/main_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Draft.dev Technical Content Creation Agency',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AI-powered tech marketing. Vetted by expert engineers and editors - Draft.dev',
    description:
      'We build growth marketing engines for the world\'s best tech companies, blending the speed of AI with the expertise of humans-in-the-loop.',
    images: ['/draft/og/main_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },

  alternates: { canonical: 'https://draft.dev' },
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

export default function Home() {
  const organizationSchema = generateOrganizationSchema()
  const serviceSchema = generateServiceSchema()
  const websiteSchema = generateWebSiteSchema()

  // Extract testimonials data for schema
  const testimonialData = [
    {
      quote:
        "Having draft.dev source quality technical content for the Loft Labs blog has been a competitive advantage. It's given us a steadier flow of content, which has helped our brand's visibility, and some of the posts are among the most popular ones we've published.",
      name: 'Rich Burroughs',
      role: 'Developer Advocate',
      company: 'Loft Labs',
    },
    {
      quote:
        "It's difficult to find an agency with enough high-quality subject matter expert writers to build up the content pipeline that Draft.dev gives you. It's a shortcut to building an in-house writing team.",
      name: 'Adam Gordon Bell',
      role: 'Director of Developer Relations',
      company: 'Earthly',
    },
    {
      quote:
        'Draft.dev has helped us create high-quality content that resonates with our audience on a regular basis. They have helped us double our audience, attract more trial users, and increase our trial conversion rate.',
      name: 'Henry Poydar',
      role: 'Founder & CEO',
      company: 'Status Hero',
    },
    {
      quote:
        'Content is one of the biggest and best channels you can invest in. And if you want to quickly scale without compromising the quality and expertise, Draft.dev is the way to go.',
      name: 'Rahul Patwardhan',
      role: 'Senior Director, Demand Generation',
      company: 'Loft Labs',
    },
    {
      quote:
        "I was thoroughly impressed by the smooth onboarding and ability to adapt to our product suite. Draft.dev's attention to detail and dedication to aligning content with our brand have significantly impacted our developer-focused content strategy. The high-quality technical blog posts have been well-received internally, and we're excited to see the full impact on our content program.",
      name: 'Emily Blitstein',
      role: 'Sr. Content Marketing Manager',
      company: 'Sinch Mailgun',
    },
    {
      quote:
        'Draft.dev is our go-to for practical, well-written content that actually resonates with technical audiences and helps us inspire the developer community. It has been invaluable (for our internal team and my sanity) to have their brilliant writers, editors, and PMs in our content corner!',
      name: 'Jenny Medeiros',
      role: 'Head of Content',
      company: 'Redpanda',
    },
    {
      quote:
        'Partnering with Draft.dev has accelerated our technical content output while also extending the bandwidth of our developer relations team to focus more on core product activities. It is truly high-quality content written by devs for devs, helping devs in the process.',
      name: 'Abhishek Iyer',
      role: 'Director, Marketing and Growth',
      company: 'Descope',
    },
    {
      quote:
        "Draft.dev has been an amazing partner, helping us scale our content program by creating thoughtful and technically-sound developer content and training materials. We're constantly iterating to build the best educational materials for developer security and Draft.dev has been instrumental in helping us realize these ambitions.",
      name: 'Randall Degges',
      role: 'Head of Developer & Security Relations',
      company: 'Snyk',
    },
    {
      quote:
        'In a matter of weeks, our referral traffic and organic keyword rankings increased by 3x. One post also hit Hacker News which resulted in 5 demo requests in a single day!',
      name: 'Robert Gibb',
      role: 'Content Marketing',
      company: 'fabric',
    },
    {
      quote:
        "We've seen amazing results with the technical content produced from the team at Draft.dev. The attention to technical detail from start to finish has been a huge addition to our content.",
      name: 'Tony Chan',
      role: 'Co-Founder & CEO',
      company: 'CloudForecast',
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <div className="overflow-hidden">
        <main>
          <Hero />
          <Why
            title="AI-Powered Content That Technical Audiences Actually Respect And Trust"
            subtitle="AI speed meets human expertise for content that performs and converts"
            features={[
              {
                title: 'Vetted and approved by real engineers',
                description:
                  "We all know AI content can produce faulty output. Especially when it comes to code. Don't risk your reputation and sacrifice quality. Our 300+ practicing software engineers with 10+ years of average experience are your 'humans-in-the-loop', reviewing and approving every piece.",
                linkText: 'Why we have engineers-in-the-loop',
                linkHref: '/draft-dev-vs-ai-gen-content',
              },
              {
                title: 'Fast turnaround times AND high-quality output',
                description:
                  'Get the best of both worlds: AI-enabled research and discovery, coupled with a production and review process that has been perfected over years. Our technical editors and copy editors are reviewing each output, making sure each piece is technically correct and authentic.',
                linkText: 'See our process',
                linkHref: '/#how-we-work',
              },
              {
                title: 'Proactive Content Refreshes, measurable results',
                description:
                  'We track and report your performance and conduct frequent content refreshes on existing content. Nobody wants a potential buyer to get a result showing outdated information from a 2yr old blog post. We make sure your pieces stay relevant and perform well in AI results and traditional search engines.',
                linkText: 'Learn about our Content Refreshes',
                linkHref: '/content-refreshes',
              },
            ]}
          />

          {/* <What
            title="Stop begging your engineers to create content..."
            subtitleBold="Impress them"
            subtitleRegular="with the technical content you get from Draft.dev."
            features={[
              {
                title: 'Real Engineers Create Our Content',
                description:
                  "We work with hundreds of practicing software, data, and devops engineers to create in-depth technical tutorials, guides, and comparisons that showcase your product's capabilities while building credibility with developers.",
              },
              {
                title: 'Align Content with Business Goals',
                description:
                  "Our in-house team of content marketing, SEO, and engineering professionals will help you drive measurable business value through content, ensuring that you're getting the most from your efforts.",
              },
              {
                title: 'Build Your Brand and Generate Leads',
                description:
                  "Content creation is just the start. We'll help you promote your content on all the channels developers use to ensure it reaches the right audience, engenders trust, and builds your brand.",
              },
            ]}
            imageSrc={WhatImage.src}
            imageAlt="Technical content development"
          /> */}
          <SocialProof />

          <div id="how-we-work">
            <How
              title="How We Work"
              subtitleBold="Our robust process ensures you get high-quality technical content you can count on every week."
              subtitleRegular="Here's how we help you create content that resonates with developers:"
              steps={[
                {
                  number: '1',
                  title: 'Schedule A Discovery Call',
                  description:
                    "In this 30-minute introductory call, we'll learn about your company and marketing strategy. If Draft.dev is a good fit for your business, we can build a scope of work that fits your budget.",
                },
                {
                  number: '2',
                  title: 'Create Your Content Roadmap',
                  description:
                    "Based on your marketing strategy and goals, we'll leverage our extensive experience in the industry to build a content roadmap just for you. This helps you see exactly what you'll be getting and ensures that your team is aligned on the expectations and priorities.",
                },
                {
                  number: '3',
                  title: 'Ready-to-publish Technical Content',
                  description:
                    "Our team of engineers, editors, and technical content specialists will create detailed outlines for you to review before starting weekly content delivery. Each piece is tested and edited for quality assurance. If our work ever falls short of your expectations, we'll work with you to revise it.",
                },
              ]}
              imageSrc={HowImage.src}
              imageAlt="Technical content development"
            />
          </div>

          <CaseStudyHome />

          <Testimonials />
          <Testimonial
            quote="Having draft.dev source quality technical content for the Loft Labs blog has been a competitive advantage. It's given us a steadier flow of content, which has helped our brand's visibility, and some of the posts are among the most popular ones we've published."
            name="Rich Burroughs"
            role="Developer Advocate"
            company="Loft Labs"
            imageSrc="/media/testimonials-lg/rich_burroughs_loft_labs_draft_dev.jpg"
            imageAlt="Rich Burroughs"
          />
        </main>
        <FAQ />
      </div>
    </>
  )
}
