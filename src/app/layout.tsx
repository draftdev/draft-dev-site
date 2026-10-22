import Analytics from '@/components/analytics'
import SiteFooter from '@/components/sections/site-footer'
import '@/styles/tailwind.css'

// Import Fontsource CSS files
// Inter: all text - JetBrains Mono: mono accents
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/700.css'
import '@fontsource/jetbrains-mono/500.css'
import '@fontsource/jetbrains-mono/600.css'

import SiteHeader from '@/components/sections/site-header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // suppressHydrationWarning: browser extensions (e.g. GA opt-out) add
    // attributes to <html> before React hydrates; only this element's
    // attribute mismatches are suppressed.
    <html
      lang="en"
      className="scroll-smooth motion-reduce:scroll-auto"
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://candid-cookie.flywheelsites.com" />
        {/* Privacy-friendly analytics by Plausible */}
        <script
          async
          src="https://plausible.io/js/pa-6cBLshVt6Tazaoqfe3wHC.js"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
  plausible.init()`,
          }}
        />
      </head>
      <body className="bg-white antialiased">
        <SiteHeader />
        <div className="flex min-h-screen flex-col">
          <main className="grow">{children}</main>
          <SiteFooter />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
