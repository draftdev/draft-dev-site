import Banner from '@/components/media/banner'
import { firaCode, firaSans } from '@/fonts'
import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { headers } from 'next/headers'
import { Suspense } from 'react'

const DynamicNavbar = dynamic(
  () => import('@/components/global/navbar-dynamic'),
  {
    ssr: true,
  },
)

const Footer = dynamic(
  () => import('@/components/global/footer').then((mod) => mod.Footer),
  {
    ssr: false,
    loading: () => <div className="h-64 bg-gradient-brand"></div>,
  },
)

const GoogleAnalytics = dynamic(
  () => import('@/components/global/google-analytics'),
  { ssr: false },
)

export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers()
  const pathname = headersList.get('x-pathname') || '/'

  // Generate page-specific metadata based on URL
  const pageMetadata = getPageMetadata(pathname)

  return {
    metadataBase: new URL('https://draft.dev'),
    title: {
      template: '%s - Draft.dev',
      default: pageMetadata.title,
    },
    description: pageMetadata.description,
    keywords: pageMetadata.keywords,
    authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
    creator: 'Draft.dev',
    publisher: 'Draft.dev',
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

    openGraph: {
      type: 'website',
      url: `https://draft.dev${pathname}`,
      siteName: 'Draft.dev',
      locale: 'en_US',
      title: pageMetadata.title,
      description: pageMetadata.description,
      images: [
        {
          url: pageMetadata.image,
          width: 1200,
          height: 630,
          alt: pageMetadata.imageAlt,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: pageMetadata.title,
      description: pageMetadata.description,
      images: [pageMetadata.image],
      creator: '@draftdev',
      site: '@draftdev',
    },

    alternates: {
      canonical: `https://draft.dev${pathname}`,
    },

    icons: {
      icon: [
        {
          url: '/favicon/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          url: '/favicon/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
      ],
      apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
      other: [{ rel: 'shortcut icon', url: '/favicon/favicon.ico' }],
    },
    formatDetection: {
      telephone: false,
    },
    category: 'Technology',
    classification: 'Business',
  }
}

function getPageMetadata(pathname: string) {
  const defaultImage =
    'https://draft.dev/site/med-landscape/write_draft_dev.jpg'

  const pageConfigs = {
    // Homepage
    '/': {
      title: 'Content Creation Agency for Technical Audiences - Draft.dev',
      description:
        'We are a technical content marketing agency helping Marketing and Developer Relations teams in Tech Companies drive awareness, capture leads, and build trust.',
      keywords:
        'technical content marketing, developer relations, software development content, API documentation, technical writing, developer marketing',
      image: '/draft/og/main_og_draft_dev.jpg',
      imageAlt: 'Draft.dev Technical Content Creation Agency',
    },

    // Blog Landing Page
    '/learn': {
      title: 'Technical Content Marketing Blog - Draft.dev',
      description:
        'Expert insights on technical content marketing, developer relations, software development tutorials, and content strategy for reaching technical audiences.',
      keywords:
        'technical content marketing blog, developer relations insights, software development content, content marketing resources',
      image: '/draft/og/learn_og_draft_dev.jpg',
      imageAlt: 'Draft.dev Technical Content Marketing Blog',
    },

    // Main Service Pages
    '/case-studies': {
      title: 'Case Studies - Draft.dev Success Stories',
      description:
        'Learn why clients like Supabase, Jetbrains, Loft Labs, Redpanda, and others choose Draft.dev for their technical content marketing needs.',
      keywords:
        'draft.dev case studies, technical content marketing results, developer relations success stories, client testimonials',
      image: '/draft/og/case_studies_og_draft_dev.jpg',
      imageAlt: 'Draft.dev Case Studies and Success Stories',
    },

    '/resources': {
      title: 'Technical Content Marketing Resources - Draft.dev',
      description:
        'Free resources to help you create better technical content, improve your developer relations, and build authority in technical communities.',
      keywords:
        'technical content marketing resources, developer relations guides, content strategy templates, technical writing resources',
      image: '/draft/og/resources_og_draft_dev.jpg',
      imageAlt: 'Technical Content Marketing Resources',
    },

    '/about': {
      title: 'About us - Draft.dev',
      description:
        'Draft.dev is a technical content marketing agency run by subject matter experts. Learn more about our mission to help tech companies create authentic technical content.',
      keywords:
        'about draft.dev, technical content marketing team, developer relations experts, content marketing agency team, karl hughes',
      image: '/draft/og/about_og_draft_dev.jpg',
      imageAlt: 'About Draft.dev Technical Content Marketing Team',
    },

    '/call': {
      title: 'Schedule a Discovery Call - Draft.dev',
      description:
        'Ready to transform your technical content marketing? Schedule a 30-minute discovery call to learn how Draft.dev can help you create content that resonates with developers.',
      keywords:
        'technical content marketing consultation, developer content strategy, draft.dev discovery call, technical content agency',
      image: '/draft/og/call_og_draft_dev.jpg',
      imageAlt: 'Schedule a Discovery Call with Draft.dev',
    },

    '/content-marketing-engine': {
      title: 'Content Marketing Engine - Draft.dev',
      description:
        "Transform your technical content marketing with Draft.dev's proven content marketing engine designed to drive consistent results for tech companies.",
      keywords:
        'content marketing engine, technical content automation, content marketing system, scalable content marketing',
      image: '/draft/og/content_engine_og_draft_dev.jpg',
      imageAlt: 'Content Marketing Engine for Tech Companies',
    },

    '/build-trust': {
      title: 'Build Trust with Technical Audiences - Draft.dev',
      description:
        'Learn how Draft.dev helps tech companies build trust with developers through authentic, expert-driven technical content that resonates with technical audiences.',
      keywords:
        'build trust with developers, technical content credibility, developer relations trust, authentic technical content',
      image: '/draft/og/build_trust_og_draft_dev.jpg',
      imageAlt: 'Build Trust with Technical Audiences',
    },

    '/drive-awareness': {
      title: 'Custom Content Marketing that Drives Awareness - Draft.dev',
      description:
        'We establish Inbound Lead Generation Engines for our clients by consistently creating content that technical audiences truly care about and respect.',
      keywords:
        'drive awareness, technical content marketing, developer marketing, inbound lead generation, content strategy',
      image: '/draft/og/awareness_og_draft_dev.jpg',
      imageAlt: 'Drive Awareness with Technical Content Marketing',
    },

    '/capture-leads': {
      title: 'Inbound Lead Generation and Technical Copy Writing - Draft.dev',
      description:
        "Discover how Draft.dev's strategic technical content helps tech companies capture qualified leads from developers and technical decision makers.",
      keywords:
        'capture leads developers, technical lead generation, developer marketing leads, technical content conversion',
      image: '/draft/og/capture_leads_og_draft_dev.jpg',
      imageAlt: 'Capture Leads with Technical Content Marketing',
    },

    '/for-marketers': {
      title: 'Technical Content for Marketers - Draft.dev',
      description:
        'Help marketing teams in tech companies create authentic technical content that resonates with developers and drives business results.',
      keywords:
        'technical content for marketers, developer marketing, marketing to developers, technical marketing strategy',
      image: '/draft/og/marketers_og_draft_dev.jpg',
      imageAlt: 'Technical Content Marketing for Marketing Teams',
    },

    '/for-dev-rels': {
      title: 'Content Marketing for Developer Relations - Draft.dev',
      description:
        'Empower DevRel teams with expert technical content that builds community, drives adoption, and showcases your technical expertise.',
      keywords:
        'developer relations content, devrel content marketing, developer community content, technical community building',
      image: '/draft/og/devrel_og_draft_dev.jpg',
      imageAlt: 'Content Marketing for Developer Relations Teams',
    },

    '/content-types': {
      title: 'Technical Content Types - Draft.dev',
      description:
        'Explore the various types of technical content we create: tutorials, blog posts, documentation, case studies, and more to reach your developer audience.',
      keywords:
        'technical content types, developer content formats, technical tutorials, technical blog posts, technical documentation',
      image: '/draft/og/content_types_og_draft_dev.jpg',
      imageAlt: 'Types of Technical Content We Create',
    },

    '/tutorials': {
      title: 'Developer Tutorials - Draft.dev',
      description:
        "We write tutorials designed to reach software engineers. Learn more about Draft.dev's technical content writing services and see our tutorial samples.",
      keywords:
        'developer tutorials, technical tutorials, software engineering guides, programming tutorials, developer marketing',
      image: '/draft/og/tutorials_og_draft_dev.jpg',
      imageAlt: 'Developer Tutorials by Draft.dev',
    },

    '/video-tutorials': {
      title: 'Technical Video Tutorials - Draft.dev',
      description:
        'Professional technical video content creation including tutorials, demos, and educational content designed to engage developer audiences.',
      keywords:
        'technical video content, developer video tutorials, technical demos, video marketing for developers',
      image: '/draft/og/video_tutorials_og_draft_dev.jpg',
      imageAlt: 'Technical Video Tutorials and Content',
    },

    '/blog-posts': {
      title: 'Technical Blog Posts - Draft.dev',
      description:
        'Expert-written technical blog posts that resonate with developers. See samples of our technical content and learn about our blog writing services.',
      keywords:
        'technical blog posts, developer blog content, technical writing services, engineering blog posts',
      image: '/draft/og/blog_posts_og_draft_dev.jpg',
      imageAlt: 'Technical Blog Posts and Content',
    },

    '/write': {
      title: 'Write for Draft.dev - Join Our Technical Writing Network',
      description:
        "Join our network of 300+ technical experts and get paid to write about cutting-edge technologies. We're looking for experienced developers and technical professionals.",
      keywords:
        'technical writing jobs, freelance developer writing, write for draft.dev, technical content creation, technical writer opportunities',
      image: '/draft/og/write_og_draft_dev.jpg',
      imageAlt: 'Write for Draft.dev - Technical Writing Opportunities',
    },

    '/privacy-policy': {
      title: 'Privacy Policy - Draft.dev',
      description:
        "Draft.dev's privacy policy explaining how we collect, use, and protect your personal information when you use our technical content marketing services.",
      keywords:
        'draft.dev privacy policy, privacy protection, data security, personal information policy',
      image: '/draft/og/privacy_og_draft_dev.jpg',
      imageAlt: 'Draft.dev Privacy Policy',
    },

    '/newsletter': {
      title: 'Technical Content Marketing Newsletter - Draft.dev',
      description:
        'Subscribe to our newsletter for resources, tips, and case studies to help you reach developers through effective technical content marketing.',
      keywords:
        'technical content marketing newsletter, developer marketing newsletter, content marketing tips, technical writing insights',
      image: '/draft/og/newsletter_og_draft_dev.jpg',
      imageAlt: 'Technical Content Marketing Newsletter',
    },

    '/webinars': {
      title: 'Technical Content Marketing Webinars - Draft.dev',
      description:
        'Join our educational webinars on technical content marketing, developer relations, and creating content that resonates with technical audiences.',
      keywords:
        'technical content marketing webinars, developer marketing webinars, content strategy webinars, technical writing education',
      image: '/draft/og/webinars_og_draft_dev.jpg',
      imageAlt: 'Technical Content Marketing Webinars',
    },

    '/ideas': {
      title: 'Technical Content Ideas - Draft.dev',
      description:
        'Get inspired with technical content ideas and topics that resonate with developer audiences. Discover trending topics in technical content marketing.',
      keywords:
        'technical content ideas, developer content topics, technical blog ideas, content inspiration for developers',
      image: '/draft/og/ideas_og_draft_dev.jpg',
      imageAlt: 'Technical Content Ideas and Inspiration',
    },

    '/playbook': {
      title: 'Technical Content Marketing Playbook - Draft.dev',
      description:
        'Download our Technical Marketing Playbook: Learn everything you need to produce high-quality technical marketing content.',
      keywords:
        'technical content marketing playbook, content marketing guide, technical writing resources, developer marketing playbook',
      image: '/draft/og/playbook_og_draft_dev.jpg',
      imageAlt: 'Technical Content Marketing eBook',
    },

    '/orchestrate-technical-content': {
      title: 'How to Orchestrate Technical Content - Draft.dev',
      description:
        'Learn how to orchestrate and manage technical content at scale. Strategic planning and execution for technical content marketing programs.',
      keywords:
        'orchestrate technical content, content orchestration, technical content management, content strategy execution',
      image: '/draft/og/orchestrate_og_draft_dev.jpg',
      imageAlt: 'Orchestrate Technical Content at Scale',
    },

    '/developer-marketing': {
      title: 'Building and Scaling Developer Marketing - Draft.dev',
      description:
        'Specialized developer marketing services to help you reach software engineers and technical decision makers through authentic, expert-driven content.',
      keywords:
        'developer marketing, marketing to developers, developer relations marketing, technical audience marketing',
      image: '/draft/og/developer_marketing_og_draft_dev.jpg',
      imageAlt: 'Developer Marketing eBook',
    },

    '/case-studies/status-hero': {
      title: 'Status Hero Case Study - Draft.dev',
      description:
        "Learn how Status Hero achieved remarkable results with Draft.dev's technical content marketing services and expert-driven content strategy.",
      keywords:
        'status hero case study, draft.dev success story, technical content marketing results, developer marketing case study',
      image: '/draft/og/main_og_draft_dev.jpg',
      imageAlt: 'Status Hero Case Study - Draft.dev Success Story',
    },

    '/case-studies/loft-labs': {
      title: 'Loft Labs Case Study - Draft.dev',
      description:
        "Discover how Loft Labs leveraged Draft.dev's technical content expertise to drive awareness and build authority in the developer community.",
      keywords:
        'loft labs case study, draft.dev client success, kubernetes content marketing, developer relations success',
      image: '/draft/og/main_og_draft_dev.jpg',
      imageAlt: 'Loft Labs Case Study - Draft.dev Success Story',
    },
  }
  return pageConfigs[pathname as keyof typeof pageConfigs] || pageConfigs['/']
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#544b84',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${firaSans.variable} ${firaCode.variable}`}>
      <head>
        <link
          rel="preload"
          href="/draft/logos/draftlogo_main_filled.svg"
          as="image"
        />

        <link
          rel="preload"
          href="/site/small-portrait/coding_draft_dev.jpg"
          as="image"
          fetchPriority="high"
        />
      </head>
      <body className="bg-white antialiased">
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>

        {/* Dynamic Banner - Update as needed */}
        <Banner
          text="Download Our FREE eBook: How to Set Up a Content Marketing Engine in the Age of AI →"
          link="https://draft.dev/content-marketing-engine"
        />

        <DynamicNavbar />

        <div className="flex min-h-screen flex-col">
          <main className="flex-grow">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  )
}
