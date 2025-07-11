import Banner from '@/components/media/banner'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import localFont from 'next/font/local'
import Script from 'next/script'
import { Suspense } from 'react'

import '@/styles/tailwind.css'

const DynamicNavbar = dynamic(
  () => import('@/components/global/navbar-dynamic'),
  {
    ssr: true,
    loading: () => <div className="h-16 bg-white" />,
  },
)

const Footer = dynamic(
  () => import('@/components/global/footer').then((mod) => mod.Footer),
  {
    ssr: false,
    loading: () => <div className="h-64 animate-pulse bg-gradient-brand" />,
  },
)

const GoogleAnalytics = dynamic(
  () => import('@/components/global/google-analytics'),
  { ssr: false },
)

const firaSans = localFont({
  src: [
    { path: '../fonts/FiraSans-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../fonts/FiraSans-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../fonts/FiraSans-Bold.ttf', weight: '700', style: 'normal' },
    {
      path: '../fonts/FiraSans-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-fira-sans',
  preload: true,
})

const firaCode = localFont({
  src: [{ path: '../fonts/FiraCode-VariableFont_wght.ttf', style: 'normal' }],
  display: 'swap',
  variable: '--font-fira-code',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: {
    template: '%s - Draft.dev',
    default: 'Content Creation Agency for Technical Audiences - Draft.dev',
  },
  description:
    'We are a technical content marketing agency helping Marketing and Developer Relations teams in Tech Companies drive awareness, capture leads, and build trust.',
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
    siteName: 'Draft.dev',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@draftdev',
    site: '@draftdev',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
  },
  formatDetection: {
    telephone: false,
  },
  category: 'Technology',
  classification: 'Business',
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
        <link rel="dns-prefetch" href="https://js.hsforms.net" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="bg-white antialiased">
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>

        {/* Defer HubSpot loading */}
        <Script
          src="https://js.hsforms.net/forms/shell.js"
          strategy="lazyOnload"
        />

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
