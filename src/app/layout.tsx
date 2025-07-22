import Banner from '@/components/media/banner'
import { firaCode, firaSans } from '@/fonts'
import '@/styles/tailwind.css'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Analytics = dynamic(() => import('@/components/analytics'), {
  ssr: false,
})

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
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link
          rel="preload"
          href="/draft/logos/draftlogo_main_filled.svg"
          as="image"
        />
      </head>
      <body className="bg-white antialiased">
        <Suspense fallback={null}>
          <Analytics />
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
