import Analytics from '@/components/analytics'
import { Footer } from '@/components/global/footer'
import '@/styles/tailwind.css'
// Load only the weights actually used: 400 for body, 700 for headings
import '@fontsource/fira-sans/400.css'
import '@fontsource/fira-sans/700.css'

import DynamicNavbar from '../components/global/nav/navbar-dynamic'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white antialiased">
        <DynamicNavbar />
        <div className="flex min-h-screen flex-col">
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
