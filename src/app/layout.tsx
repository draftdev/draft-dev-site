import AnalyticsProvider from '@/components/global/analytics-provider'
import { BookDiscoveryCall } from '@/components/global/cta/book-discovery-call'
import FAQ from '@/components/global/faq'
import { Footer } from '@/components/global/footer'
import GoogleAnalytics from '@/components/global/google-analytics'
import DynamicNavbar from '@/components/global/navbar-dynamic'
import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { Fira_Code, Fira_Sans } from 'next/font/google'
import { headers } from 'next/headers'

export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers()
  const path = headersList.get('x-pathname') || ''
  const host = headersList.get('host') || 'draft.dev'

  // Determine protocol based on host
  let protocol = 'https'
  if (host.includes('localhost') || host.includes('127.0.0.1')) {
    protocol = 'http'
  }

  // Construct canonical URL
  const canonicalUrl = `${protocol}://${host}${path === '/' ? '' : path}`

  return {
    metadataBase: new URL(`${protocol}://${host}`),
    title: {
      template: '%s - Draft.dev',
      default: 'Content Creation Agency for Technical Audiences - Draft.dev',
    },
    description:
      'We are a technical content marketing agency helping Marketing and Developer Relations teams in Tech Companies drive awareness, capture leads, and build trust.',
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: canonicalUrl,
      types: {
        'application/rss+xml': [
          {
            title: 'Draft.dev Blog',
            url: '/learn/feed.xml',
          },
        ],
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: 'Draft.dev',
      images: [
        {
          url: '/site/med-landscape/write_draft_dev.jpg',
          width: 1200,
          height: 630,
          alt: 'Draft.dev Technical Content Creation',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      images: ['/site/med-landscape/write_draft_dev.jpg'],
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
  }
}

const firaSans = Fira_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-fira-sans',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-fira-code',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${firaSans.variable} ${firaCode.variable} !scroll-smooth`}
    >
      <body className="bg-white antialiased">
        <GoogleAnalytics />

        <AnalyticsProvider>
          <DynamicNavbar />
          <div className="flex min-h-screen flex-col">
            <main className="flex-grow">{children}</main>
            <BookDiscoveryCall />
            <FAQ />
            <Footer />
          </div>
        </AnalyticsProvider>
      </body>
    </html>
  )
}
