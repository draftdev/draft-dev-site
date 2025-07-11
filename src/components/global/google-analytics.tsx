'use client'

import { GTM_ID } from '@/app/utils/analytics'
import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense, useEffect } from 'react'

function AnalyticsPathTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      const pageUrl =
        pathname +
        (searchParams?.toString() ? `?${searchParams.toString()}` : '')

      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'pageview',
          page: pageUrl,
        })
      }
    }
  }, [pathname, searchParams])

  return null
}

export default function GoogleAnalytics() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js',
    })

    const initGTM = () => {
      if (window.gtmDidInit) return
      window.gtmDidInit = true

      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = true
      script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`

      script.onload = () => {
        window.dataLayer.push({
          event: 'gtm.js',
          'gtm.start': new Date().getTime(),
          'gtm.uniqueEventId': 0,
        })
      }

      document.head.appendChild(script)
    }

    const timeoutId = setTimeout(initGTM, 3500)

    const initGTMOnEvent = (event: Event) => {
      initGTM()
      document.removeEventListener('scroll', initGTMOnEvent)
      document.removeEventListener('mousemove', initGTMOnEvent)
      document.removeEventListener('touchstart', initGTMOnEvent)
      document.removeEventListener('click', initGTMOnEvent)
    }

    document.addEventListener('scroll', initGTMOnEvent, { once: true })
    document.addEventListener('mousemove', initGTMOnEvent, { once: true })
    document.addEventListener('touchstart', initGTMOnEvent, { once: true })
    document.addEventListener('click', initGTMOnEvent, { once: true })

    return () => {
      clearTimeout(timeoutId)
      document.removeEventListener('scroll', initGTMOnEvent)
      document.removeEventListener('mousemove', initGTMOnEvent)
      document.removeEventListener('touchstart', initGTMOnEvent)
      document.removeEventListener('click', initGTMOnEvent)
    }
  }, [])

  return (
    <Suspense fallback={null}>
      <AnalyticsPathTracker />
    </Suspense>
  )
}

declare global {
  interface Window {
    dataLayer: any[]
    gtmDidInit: boolean
  }
}
