import { generateOrganizationSchema } from '@/app/lib/schema'
import FAQ from '@/components/global/faq'
import Banner from '@/components/media/banner'
import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Fira_Code, Fira_Sans } from 'next/font/google'
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

const firaSans = Fira_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-fira-sans',
  preload: true,
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-fira-code',
  preload: true,
})

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
    '/': {
      title:
        'Technical Content Marketing Agency for Developer-Focused Companies - Draft.dev',
      description:
        'We help Marketing and Developer Relations teams in tech companies drive awareness, capture leads, and build trust through expert technical content created by subject matter experts.',
      keywords:
        'technical content marketing, developer relations, software development content, API documentation, technical writing, developer marketing',
      image: defaultImage,
      imageAlt: 'Draft.dev Technical Content Creation Agency',
    },
    '/about': {
      title: 'About Draft.dev - Technical Content Marketing Experts',
      description:
        "Learn about Draft.dev's mission to help tech companies create authentic technical content that resonates with developers through our network of 300+ subject matter experts.",
      keywords:
        'about draft.dev, technical content marketing team, developer relations experts, content marketing agency',
      image: defaultImage,
      imageAlt: 'About Draft.dev Technical Content Marketing Team',
    },
    '/call': {
      title: 'Schedule a Discovery Call - Draft.dev',
      description:
        'Ready to transform your technical content marketing? Schedule a 30-minute discovery call to learn how Draft.dev can help you create content that resonates with developers.',
      keywords:
        'technical content marketing consultation, developer content strategy, draft.dev discovery call',
      image: defaultImage,
      imageAlt: 'Schedule a Discovery Call with Draft.dev',
    },
    '/write': {
      title: 'Write for Draft.dev - Join Our Technical Writing Network',
      description:
        "Join our network of 300+ technical experts and get paid to write about cutting-edge technologies. We're looking for experienced developers and technical professionals.",
      keywords:
        'technical writing jobs, freelance developer writing, write for draft.dev, technical content creation',
      image: defaultImage,
      imageAlt: 'Write for Draft.dev - Technical Writing Opportunities',
    },
    '/case-studies': {
      title: 'Case Studies - Draft.dev Success Stories',
      description:
        'See how Draft.dev has helped tech companies drive awareness, capture leads, and build trust through expert technical content marketing campaigns.',
      keywords:
        'draft.dev case studies, technical content marketing results, developer relations success stories',
      image: defaultImage,
      imageAlt: 'Draft.dev Case Studies and Success Stories',
    },
    '/resources': {
      title: 'Technical Content Marketing Resources - Draft.dev',
      description:
        'Free resources to help you create better technical content, improve your developer relations, and build authority in technical communities.',
      keywords:
        'technical content marketing resources, developer relations guides, content strategy templates',
      image: defaultImage,
      imageAlt: 'Technical Content Marketing Resources',
    },
    '/learn': {
      title: 'Technical Content Marketing Blog - Draft.dev',
      description:
        'Expert insights on technical content marketing, developer relations, software development tutorials, and content strategy for reaching technical audiences.',
      keywords:
        'technical content marketing blog, developer relations insights, software development content',
      image: defaultImage,
      imageAlt: 'Draft.dev Technical Content Marketing Blog',
    },
  }

  // Return specific page config or default to homepage
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
  // Generate organization schema for the entire site
  const organizationSchema = generateOrganizationSchema()

  return (
    <html lang="en" className={`${firaSans.variable} ${firaCode.variable}`}>
      <head>
        <link
          rel="preload"
          href="/draft/logos/draftlogo_main_filled.svg"
          as="image"
        />

        {/* Organization Schema - Global for entire site */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="bg-white antialiased">
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>

        {/* Dynamic Banner - Update as needed */}
        <Banner
          text="Join Our FREE Webinar: Interactive Content Strategies: Engaging Developers Through Action - June 18th →"
          link="https://us02web.zoom.us/webinar/register/5917482854805/WN_uezd14aBQmKpihQs7IL2zA"
        />

        <DynamicNavbar />

        <div className="flex min-h-screen flex-col">
          <main className="flex-grow">{children}</main>
          <FAQ />
          <Footer />
        </div>
      </body>
    </html>
  )
}
