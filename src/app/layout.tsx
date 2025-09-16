import Analytics from '@/components/analytics'
import { Footer } from '@/components/global/footer'
import '@/styles/tailwind.css'
import DynamicNavbar from '../components/global/nav/navbar-dynamic'
import { firaCode, firaSans } from '../fonts/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${firaSans.variable} ${firaCode.variable}`}>
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
