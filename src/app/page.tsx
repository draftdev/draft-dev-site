import {
  generateOrganizationSchema,
  generateServiceSchema,
  generateTestimonialSchema,
} from '@/app/lib/schema'
import SocialProof from '@/components/media/social-proof'
import Hero from '@/components/page-components/home/hero'
import dynamic from 'next/dynamic'

import What from '@/components/page-components/what'
import type { Metadata } from 'next'

const FAQ = dynamic(() => import('@/components/global/faq'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
})

const Testimonial = dynamic(
  () => import('@/components/media/testimonials/testimonial'),
  {
    loading: () => <div className="h-64 animate-pulse bg-gray-50" />,
  },
)

const Testimonials = dynamic(
  () => import('@/components/media/testimonials/testimonials-group'),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
  },
)

const CaseStudyHome = dynamic(
  () => import('@/components/page-components/home/case-study-home'),
)
const How = dynamic(() => import('@/components/page-components/how'))
const Why = dynamic(() => import('@/components/page-components/why'))
const SinglePricing = dynamic(
  () => import('@/components/page-components/resources/single-pricing'),
)

export const metadata: Metadata = {
  title: 'Content Creation Agency for Technical Audiences - Draft.dev',
  description:
    'We are a technical content marketing agency helping Marketing and Developer Relations teams in Tech Companies drive awareness, capture leads, and build trust.',
  keywords:
    'technical content marketing, developer relations, software development content, API documentation, technical writing, developer marketing',
  openGraph: {
    title: 'Content Creation Agency for Technical Audiences - Draft.dev',
    description:
      'We are a technical content marketing agency helping Marketing and Developer Relations teams in Tech Companies drive awareness, capture leads, and build trust.',
    url: 'https://draft.dev',
    images: [
      {
        url: 'https://draft.dev/draft/og/main_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Draft.dev Technical Content Creation Agency',
      },
    ],
  },
  twitter: {
    title: 'Content Creation Agency for Technical Audiences - Draft.dev',
    description:
      'We are a technical content marketing agency helping Marketing and Developer Relations teams in Tech Companies drive awareness, capture leads, and build trust.',
    images: ['https://draft.dev/draft/og/main_og_draft_dev.jpg'],
  },
  alternates: {
    canonical: 'https://draft.dev',
  },
}

export default function Home() {
  const organizationSchema = generateOrganizationSchema()
  const serviceSchema = generateServiceSchema()

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

  const testimonialSchema = generateTestimonialSchema(testimonialData)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            organizationSchema,
            serviceSchema,
            testimonialSchema,
          ]),
        }}
      />

      <div className="overflow-hidden">
        <main>
          <Hero />
          <What
            title="Technical Content Marketing by Subject Matter Experts"
            subtitleBold="Transform your technical marketing"
            subtitleRegular="with expert-written content that resonates with developers and generates qualified leads."
            features={[
              {
                title: 'Drive Technical Authority',
                description:
                  "We create in-depth technical tutorials, guides, and documentation that showcase your product's capabilities while building credibility with developers.",
              },
              {
                title: 'Scale Your Content Program',
                description:
                  'Our network of technical experts delivers consistent, high-quality content that frees your team to focus on core business priorities.',
              },
              {
                title: 'Generate Developer Interest',
                description:
                  'From technical blog posts to product tutorials, we create content that attracts developers and converts them into engaged users.',
              },
            ]}
            imageSrc="/site/med-portrait/pair_programming_draft_dev.jpg"
            imageAlt="Technical content development"
          />
          <SocialProof />
          <Why
            title="The Draft.dev Difference"
            subtitle="Partner with technical content experts who understand your industry and deliver results."
            subtitleBold="You'll only pay for content if you're 100% satisfied."
            features={[
              {
                title: 'Subject Matter Experts',
                description:
                  'We create expert-driven technical content for software professionals. Our global network of developers and subject matter experts delivers in-depth coverage across diverse technologies.',
                linkText: 'How we build trust with technical audiences',
                linkHref: '/build-trust',
              },
              {
                title: 'Consistent Quality and Style',
                description:
                  "If you've worked with freelancers before, you know the quality can vary. Our editors ensure that every piece of content is technically accurate, meets our quality standards, and has a consistent style.",
                linkText: 'What our clients say about our work',
                linkHref: '/case-studies',
              },
              {
                title: 'Content You Can Count On',
                description:
                  "Never worry about whether you'll have a new post ready for your blog again. When you work with Draft.dev, you'll get ready-to-publish blog posts or videos every 1-2 weeks depending on your needs.",
                linkText: 'How we predictably generate demand',
                linkHref: '/drive-awareness',
              },
            ]}
          />
          <SinglePricing
            title="Lead Generation Package"
            description="Our Lead Generation service is a comprehensive 3-step framework designed to drive awareness, uncover existing demand, and deliver clear ROI through strategic technical content."
            callToActionURL="/call"
            priceText="Generate qualified leads"
            price="$9,000"
            currency="/Month"
            includedFeatures={[
              {
                leadText: 'Strategic Content Creation:',
                text: 'Full-funnel technical content with demo apps, code samples, and social collateral.',
              },
              {
                leadText: 'Comprehensive Campaign Strategy:',
                text: 'Analysis of existing content, competitor research, and measurable goals.',
              },
              {
                leadText: 'Lead Collection System:',
                text: 'Downloadable assets with landing page copy optimized for MQL/SQL conversion.',
              },
              {
                leadText: 'Performance Optimization:',
                text: 'Monthly analytics reviews tracking cost per lead and content effectiveness.',
              },
            ]}
            disclaimerTwo="Delivery starts after initial planning period"
            disclaimerThree="Draft.dev recommends supporting the content with promotional campaigns to drive traffic"
          />

          <How
            title="Your Path to Technical Content"
            subtitleBold="Our streamlined process ensures consistent, high-quality
                    technical content delivered on time."
            subtitleRegular="Here's how we help you create content that resonates with
                  developers."
            steps={[
              {
                number: '1',
                title: 'Schedule A Discovery Call',
                description:
                  "In this 30-minute introductory call, we'll learn about your company and marketing strategy. If Draft.dev is a good fit for your business, we can start the onboarding process.",
              },
              {
                number: '2',
                title: 'Create Your Content Plan',
                description:
                  "Based on your budget, goals, and marketing strategy, we'll create your customized content plan. This helps you see exactly what you'll be getting and ensures that we meet your expectations.",
              },
              {
                number: '3',
                title: 'Ready-to-publish Technical Content',
                description:
                  "Once your content plan is approved and our team will get started, you'll receive tested and edited content that's ready to publish every 1-2 weeks. If our work ever falls short of your expectations, we'll work with you to revise it.",
              },
            ]}
            imageSrc="/site/med-portrait/commit_draft_dev.jpg"
            imageAlt="Technical content development"
          />

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
