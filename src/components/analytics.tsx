'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense, useEffect } from 'react'

const GTM_ID = 'GTM-5W5755G3'

function PageViewTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'pageview',
        page: pathname + searchParams.toString(),
      })
    }
  }, [pathname, searchParams])

  return null
}

export default function Analytics() {
  useEffect(() => {
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || []

    const initGTM = () => {
      console.log('GTM loading now') // Debug line
      if (window.gtmDidInit) return
      window.gtmDidInit = true

      const script = document.createElement('script')
      script.async = true
      script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`
      document.head.appendChild(script)

      window.dataLayer.push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js',
      })
    }

    // Delay GTM loading until user interaction or timeout
    const timeoutId = setTimeout(initGTM, 3500)

    const initOnInteraction = (event) => {
      initGTM()
      event.currentTarget?.removeEventListener(event.type, initOnInteraction)
    }

    document.addEventListener('scroll', initOnInteraction, { once: true })
    document.addEventListener('mousemove', initOnInteraction, { once: true })
    document.addEventListener('touchstart', initOnInteraction, { once: true })

    return () => {
      clearTimeout(timeoutId)
      document.removeEventListener('scroll', initOnInteraction)
      document.removeEventListener('mousemove', initOnInteraction)
      document.removeEventListener('touchstart', initOnInteraction)
    }
  }, [])

  return (
    <>
      {/* GTM NoScript */}
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
