// components/analytics.tsx
'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { Suspense, useEffect, useState } from 'react'

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

function useDeferredGtmLoad(delayMs = 4000) {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    if (shouldLoad) return

    const trigger = () => setShouldLoad(true)
    const timeoutId = window.setTimeout(trigger, delayMs)
    const opts = { once: true, passive: true } as AddEventListenerOptions

    window.addEventListener('scroll', trigger, opts)
    window.addEventListener('pointerdown', trigger, opts)
    window.addEventListener('keydown', trigger, opts)

    return () => {
      window.clearTimeout(timeoutId)
      window.removeEventListener('scroll', trigger)
      window.removeEventListener('pointerdown', trigger)
      window.removeEventListener('keydown', trigger)
    }
  }, [delayMs, shouldLoad])

  return shouldLoad
}

export default function Analytics() {
  const shouldLoadGtm = useDeferredGtmLoad()

  return (
    <>
      {shouldLoadGtm && (
        <Script id="gtm-loader" strategy="afterInteractive">{`
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
            j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}</Script>
      )}

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
