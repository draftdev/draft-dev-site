// app/layout.tsx
import '@/styles/tailwind.css'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { firaCode, firaSans } from '../fonts/fonts'

const Analytics = dynamic(() => import('@/components/analytics'), {
  ssr: false,
})
const DynamicNavbar = dynamic(
  () => import('@/components/global/nav/navbar-dynamic'),
  { ssr: true },
)
const Footer = dynamic(
  () => import('@/components/global/footer').then((m) => m.Footer),
  {
    ssr: false,
    loading: () => <div className="bg-gradient-brand h-64" />,
  },
)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${firaSans.variable} ${firaCode.variable}`}>
      <body className="bg-white antialiased">
        {/* <Banner
          text="Download Our FREE eBook: How to Set Up a Content Marketing Engine in the Age of AI →"
          link="https://draft.dev/content-marketing-engine"
        /> */}

        <DynamicNavbar />

        <div className="flex min-h-screen flex-col">
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>

        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
