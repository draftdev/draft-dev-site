import { Footer } from '@/components/global/footer'
import DynamicNavbar from '@/components/global/navbar-dynamic'
import Banner from '@/components/media/banner'

import '@/styles/tailwind.css'

import { firaCode, firaSans } from '../fonts/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${firaSans.variable} ${firaCode.variable}`}>
      <body className="bg-white antialiased">
        <Banner
          text="Download Our FREE eBook: How to Set Up a Content Marketing Engine in the Age of AI →"
          link="https://draft.dev/content-marketing-engine"
        />

        <DynamicNavbar />

        <div className="flex min-h-screen flex-col">
          <main className="mb-16 flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
