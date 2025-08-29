// components/analytics.tsx
'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { Suspense, useEffect } from 'react'

const GTM_ID = 'GTM-5W5755G3'

function PageViewTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Always ensure dataLayer exists
    ;(window as any).dataLayer = (window as any).dataLayer || []
    const qs = searchParams.toString()
    const page_path = qs ? `${pathname}?${qs}` : pathname

    window.dataLayer.push({
      event: 'page_view',
      page_path,
      page_location:
        typeof window !== 'undefined' ? window.location.href : undefined,
      page_title: typeof document !== 'undefined' ? document.title : undefined,
    })
  }, [pathname, searchParams])

  return null
}

export default function Analytics() {
  return (
    <>
      <Script id="gtm-loader" strategy="lazyOnload">{`
        (function(w,d,s,l,i){
          w[l]=w[l]||[];
          w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
          var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
          j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `}</Script>

      {/* Noscript fallback (kept intact) */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>

      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
    </>
  )
}
