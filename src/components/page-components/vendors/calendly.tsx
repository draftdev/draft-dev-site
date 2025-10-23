'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

type CalendlyWidgetProps = {
  url: string
  minWidth?: number
  height?: number
}

export default function CalendlyWidget({
  url,
  minWidth = 320,
  height = 1200,
}: CalendlyWidgetProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <div
        className="calendly-inline-widget"
        data-url={url}
        style={{
          minWidth: `${minWidth}px`,
          width: '100%',
          height: `${height}px`,
        }}
      />
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
    </>
  )
}
