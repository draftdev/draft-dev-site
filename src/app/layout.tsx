import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Fira_Code, Fira_Sans } from 'next/font/google'
import { Suspense } from 'react'

// Import styles
import '@/styles/tailwind.css'

// Dynamically import components that aren't needed for initial render
const DynamicNavbar = dynamic(
  () => import('@/components/global/navbar-dynamic'),
  {
    ssr: true, // Still render on server for SEO and initial paint
  },
)

const Footer = dynamic(
  () => import('@/components/global/footer').then((mod) => mod.Footer),
  {
    ssr: false, // Load client-side to improve initial page load
    loading: () => <div className="h-64 bg-gradient-brand"></div>, // Simple placeholder with correct background
  },
)

const GoogleAnalytics = dynamic(
  () => import('@/components/global/google-analytics'),
  { ssr: false },
)

// Optimize fonts loading
const firaSans = Fira_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap', // Display text using fallback font until custom font is loaded
  variable: '--font-fira-sans',
  preload: true, // Preload the font
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-fira-code',
  preload: true,
})

// Provide site-wide defaults, but no canonical
export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL('https://draft.dev'),
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
    // Add performance-related meta tags
    viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
    themeColor: '#544b84', // Primary color
    formatDetection: {
      telephone: false, // Prevent Safari from detecting phone numbers
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${firaSans.variable} ${firaCode.variable}`}>
      <head>
        {/* Preconnect to WordPress domain - reduce initial connection time */}
        <link rel="preconnect" href="https://candid-cookie.flywheelsites.com" />

        {/* Add preload hints for critical resources */}
        <link
          rel="preload"
          href="/draft/logos/draftlogo_main_filled.svg"
          as="image"
        />
      </head>
      <body className="bg-white antialiased">
        {/* Load analytics only on client */}
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>

        <DynamicNavbar />

        <div className="flex min-h-screen flex-col">
          <main className="flex-grow">{children}</main>

          {/* Load footer with delay */}
          <Footer />
        </div>
      </body>
    </html>
  )
}

// import AnalyticsProvider from '@/components/global/analytics-provider'
// import { BookDiscoveryCall } from '@/components/global/cta/book-discovery-call'
// import FAQ from '@/components/global/faq'
// import { Footer } from '@/components/global/footer'
// import GoogleAnalytics from '@/components/global/google-analytics'
// import DynamicNavbar from '@/components/global/navbar-dynamic'
// import '@/styles/tailwind.css'
// import type { Metadata } from 'next'
// import { Fira_Code, Fira_Sans } from 'next/font/google'

// const firaSans = Fira_Sans({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
//   display: 'swap',
//   variable: '--font-fira-sans',
// })

// const firaCode = Fira_Code({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
//   display: 'swap',
//   variable: '--font-fira-code',
// })

// // Provide site-wide defaults, but no canonical
// export async function generateMetadata(): Promise<Metadata> {
//   return {
//     metadataBase: new URL('https://draft.dev'),
//     title: {
//       template: '%s - Draft.dev',
//       default: 'Content Creation Agency for Technical Audiences - Draft.dev',
//     },
//     description:
//       'We are a technical content marketing agency helping Marketing and Developer Relations teams in Tech Companies drive awareness, capture leads, and build trust.',
//     robots: {
//       index: true,
//       follow: true,
//     },
//     openGraph: {
//       type: 'website',
//       locale: 'en_US',
//       siteName: 'Draft.dev',
//       images: [
//         {
//           url: '/site/med-landscape/write_draft_dev.jpg',
//           width: 1200,
//           height: 630,
//           alt: 'Draft.dev Technical Content Creation',
//         },
//       ],
//     },
//     twitter: {
//       card: 'summary_large_image',
//       images: ['/site/med-landscape/write_draft_dev.jpg'],
//     },
//     icons: {
//       icon: [
//         {
//           url: '/favicon/favicon-32x32.png',
//           sizes: '32x32',
//           type: 'image/png',
//         },
//         {
//           url: '/favicon/favicon-16x16.png',
//           sizes: '16x16',
//           type: 'image/png',
//         },
//       ],
//       apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
//       other: [{ rel: 'shortcut icon', url: '/favicon/favicon.ico' }],
//     },
//   }
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className={`${firaSans.variable} ${firaCode.variable}`}>
//       <body className="bg-white antialiased">
//         <GoogleAnalytics />

//         <AnalyticsProvider>
//           <DynamicNavbar />
//           <div className="flex min-h-screen flex-col">
//             <main className="flex-grow">{children}</main>
//             <BookDiscoveryCall />
//             <FAQ />
//             <Footer />
//           </div>
//         </AnalyticsProvider>
//       </body>
//     </html>
//   )
// }
