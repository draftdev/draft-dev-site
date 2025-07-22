'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID as string

declare global {
  interface Window {
    dataLayer: any[]
    gtmDidInit: boolean
  }
}

export default function GTM() {
  const pathname = usePathname()

  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js',
    })

    const handleRouteChange = (url: string) => {
      window.dataLayer.push({
        event: 'pageview',
        page: url,
      })
    }

    const initGTM = () => {
      if (window.gtmDidInit) return
      window.gtmDidInit = true
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = true
      script.onload = () => {
        window.dataLayer.push({
          event: 'gtm.js',
          'gtm.start': new Date().getTime(),
          'gtm.uniqueEventId': 0,
        })
      }
      script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`
      document.head.appendChild(script)
    }

    const timeoutId = setTimeout(initGTM, 3500)

    const initGTMOnEvent = (event: Event) => {
      initGTM()
      event.currentTarget?.removeEventListener(event.type, initGTMOnEvent)
    }

    document.addEventListener('scroll', initGTMOnEvent, { once: true })
    document.addEventListener('mousemove', initGTMOnEvent, { once: true })
    document.addEventListener('touchstart', initGTMOnEvent, { once: true })

    handleRouteChange(pathname)

    return () => {
      clearTimeout(timeoutId)
      document.removeEventListener('scroll', initGTMOnEvent)
      document.removeEventListener('mousemove', initGTMOnEvent)
      document.removeEventListener('touchstart', initGTMOnEvent)
    }
  }, [pathname])

  return null
}
