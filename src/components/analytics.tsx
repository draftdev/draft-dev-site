// components/analytics.tsx
'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense, useEffect } from 'react'

const GTM_ID = 'GTM-5W5755G3'

// Small polyfill so we can use requestIdleCallback where supported
const onIdle = (cb: () => void, timeout = 2500) => {
  if (typeof (window as any).requestIdleCallback === 'function') {
    ;(window as any).requestIdleCallback(cb, { timeout })
  } else {
    setTimeout(cb, timeout)
  }
}

function PageViewTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!window.dataLayer) return
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
  useEffect(() => {
    // Initialize dataLayer once
    ;(window as any).dataLayer = (window as any).dataLayer || []

    const initGTM = () => {
      if ((window as any).gtmDidInit) return
      ;(window as any).gtmDidInit = true

      // Match official snippet order: push event BEFORE injecting the script
      ;(window as any).dataLayer.push({
        'gtm.start': Date.now(),
        event: 'gtm.js',
      })

      const script = document.createElement('script')
      script.async = true
      script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`
      document.head.appendChild(script)
    }

    // Load after idle, or on first interaction (whichever comes first)
    const idleTimer = onIdle(initGTM, 3000)

    const initOnInteraction = (event: Event) => {
      initGTM()
      event.currentTarget?.removeEventListener(
        event.type,
        initOnInteraction as any,
      )
    }

    document.addEventListener('scroll', initOnInteraction, {
      once: true,
      passive: true,
    })
    document.addEventListener('mousemove', initOnInteraction, { once: true })
    document.addEventListener('touchstart', initOnInteraction, {
      once: true,
      passive: true,
    })
    document.addEventListener('keydown', initOnInteraction, { once: true })

    return () => {
      // timers/listeners cleaned up automatically by { once: true }, but be tidy:
      document.removeEventListener('scroll', initOnInteraction as any)
      document.removeEventListener('mousemove', initOnInteraction as any)
      document.removeEventListener('touchstart', initOnInteraction as any)
      document.removeEventListener('keydown', initOnInteraction as any)
    }
  }, [])

  return (
    <>
      {/* This <noscript> is rendered on the server too, so it still appears when JS is disabled */}
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
