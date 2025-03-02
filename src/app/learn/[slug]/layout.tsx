// app/learn/[slug]/layout.tsx
import Script from 'next/script'
import { Suspense } from 'react'

type BlogLayoutProps = {
  children: React.ReactNode
  params: { slug: string }
}

// Using a separate component for analytics to prevent it from blocking rendering
function AnalyticsScripts() {
  return (
    <>
      {/* Load analytics scripts with proper strategy */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-N4PJMERESN"
        strategy="afterInteractive"
      />
      <Script
        id="gtag-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N4PJMERESN');
          `,
        }}
      />
    </>
  )
}

export default function BlogPostLayout({ children }: BlogLayoutProps) {
  return (
    <>
      {/* Main content - highest priority */}
      {children}

      {/* Load analytics without blocking page rendering */}
      <Suspense fallback={null}>
        <AnalyticsScripts />
      </Suspense>
    </>
  )
}
