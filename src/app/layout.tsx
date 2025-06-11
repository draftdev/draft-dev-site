// app/layout.tsx
import { generateOrganizationSchema } from '@/app/lib/schema'
import FAQ from '@/components/global/faq'
import Banner from '@/components/media/banner'
import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Fira_Code, Fira_Sans } from 'next/font/google'
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
  display: 'swap', // Display text using fallback font until custom font is loaded
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
  return {
    metadataBase: new URL('https://draft.dev'),
    title: {
      template: '%s - Draft.dev',
      default:
        'Technical Content Marketing Agency for Developer-Focused Companies - Draft.dev',
    },
    description:
      'We help Marketing and Developer Relations teams in tech companies drive awareness, capture leads, and build trust through expert technical content created by subject matter experts.',
    keywords:
      'technical content marketing, developer relations, software development content, API documentation, technical writing, developer marketing, DevOps content, B2B SaaS marketing',
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
      locale: 'en_US',
      url: 'https://draft.dev',
      siteName: 'Draft.dev',
      title: 'Technical Content Marketing Agency - Draft.dev',
      description:
        'Expert technical content creation for developer-focused companies. 300+ subject matter experts, 100+ clients, 3000+ published pieces.',
      images: [
        {
          url: 'https://draft.dev/site/med-landscape/write_draft_dev.jpg',
          width: 1200,
          height: 630,
          alt: 'Draft.dev Technical Content Creation Agency',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Technical Content Marketing Agency - Draft.dev',
      description:
        'Expert technical content creation for developer-focused companies by subject matter experts.',
      creator: '@draftdev',
      site: '@draftdev',
      images: ['https://draft.dev/site/med-landscape/write_draft_dev.jpg'],
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
        <link rel="preconnect" href="https://candid-cookie.flywheelsites.com" />
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

// import FAQ from '@/components/global/faq'
// import Banner from '@/components/media/banner'
// import '@/styles/tailwind.css'
// import type { Metadata } from 'next'
// import dynamic from 'next/dynamic'
// import { Fira_Code, Fira_Sans } from 'next/font/google'
// import { Suspense } from 'react'

// const DynamicNavbar = dynamic(
//   () => import('@/components/global/navbar-dynamic'),
//   {
//     ssr: true,
//   },
// )

// const Footer = dynamic(
//   () => import('@/components/global/footer').then((mod) => mod.Footer),
//   {
//     ssr: false,
//     loading: () => <div className="h-64 bg-gradient-brand"></div>,
//   },
// )

// const GoogleAnalytics = dynamic(
//   () => import('@/components/global/google-analytics'),
//   { ssr: false },
// )

// const firaSans = Fira_Sans({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
//   display: 'swap', // Display text using fallback font until custom font is loaded
//   variable: '--font-fira-sans',
//   preload: true,
// })

// const firaCode = Fira_Code({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
//   display: 'swap',
//   variable: '--font-fira-code',
//   preload: true,
// })

// export async function generateMetadata(): Promise<Metadata> {
//   return {
//     metadataBase: new URL('https://draft.dev'),
//     title: {
//       template: '%s - Draft.dev',
//       default: 'Content Creation Agency for Technical Audiences - Draft.dev',
//     },
//     description:
//       'We are a technical content marketing agency helping Marketing and Developer Relations teams in Tech Companies build trust, drive awareness, and capture leads.',
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
//     formatDetection: {
//       telephone: false,
//     },
//   }
// }

// export const viewport = {
//   width: 'device-width',
//   initialScale: 1,
//   maximumScale: 5,
//   themeColor: '#544b84',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className={`${firaSans.variable} ${firaCode.variable}`}>
//       <head>
//         <link rel="preconnect" href="https://candid-cookie.flywheelsites.com" />
//         <link
//           rel="preload"
//           href="/draft/logos/draftlogo_main_filled.svg"
//           as="image"
//         />
//       </head>
//       <body className="bg-white antialiased">
//         <Suspense fallback={null}>
//           <GoogleAnalytics />
//         </Suspense>
//         {/* <Banner
//           text="Download Our Free E-Book: Building and Scaling Developer Marketing"
//           link="/developer-marketing"
//         /> */}
//         <Banner
//           text="Join Our FREE Webinar: Interactive Content Strategies: Engaging Developers Through Action - June 18th →"
//           link="https://us02web.zoom.us/webinar/register/5917482854805/WN_uezd14aBQmKpihQs7IL2zA"
//         />
//         <DynamicNavbar />

//         <div className="flex min-h-screen flex-col">
//           <main className="flex-grow">{children}</main>
//           <FAQ />
//           <Footer />
//         </div>
//       </body>
//     </html>
//   )
// }
