'use client'

import Script from 'next/script'
import { useCallback, useEffect, useRef, useState } from 'react'

type CalendlyWidgetProps = {
  url: string
  minWidth?: number
  height?: number
}

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string
        parentElement: HTMLElement
      }) => void
    }
  }
}

export default function CalendlyWidget({
  url,
  minWidth = 320,
  height = 1200,
}: CalendlyWidgetProps) {
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // widget.js only scans the page for embeds once, when it first loads. If it
  // is already on the page (client-side navigation, or React re-running
  // effects in dev), a new embed would stay blank, so start it explicitly.
  const initWidget = useCallback(() => {
    const el = containerRef.current
    if (!el || !window.Calendly || el.querySelector('iframe')) return
    window.Calendly.initInlineWidget({ url, parentElement: el })
  }, [url])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) initWidget()
  }, [mounted, initWidget])

  return (
    <>
      {/*
        Hoisted to <head> by React 19. These sit outside the `mounted` gate on
        purpose: they ship with the SSR response, so the browser opens the
        connections and fetches widget.js while React is still hydrating,
        instead of starting from cold once the widget mounts.
      */}
      <link rel="preconnect" href="https://assets.calendly.com" />
      <link rel="preconnect" href="https://calendly.com" />
      <link
        rel="preload"
        as="script"
        href="https://assets.calendly.com/assets/external/widget.js"
      />
      {mounted ? (
        <>
          <div
            ref={containerRef}
            style={{
              minWidth: `${minWidth}px`,
              width: '100%',
              height: `${height}px`,
            }}
          />
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            onReady={initWidget}
          />
        </>
      ) : null}
    </>
  )
}
