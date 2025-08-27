// app/_components/DeferStyles.tsx
'use client'

import { useEffect } from 'react'

export default function DeferStyles() {
  useEffect(() => {
    const link = document.querySelector(
      'link[data-defer-style="extra"]',
    ) as HTMLLinkElement | null
    if (!link) return

    const enable = () => {
      try {
        link.media = 'all'
      } catch {
        /* noop */
      }
    }

    // If it already loaded before hydration, link.sheet exists — just flip.
    if ((link as any).sheet) {
      enable()
      return
    }

    // Otherwise, flip when it finishes loading.
    link.addEventListener('load', enable)
    return () => link.removeEventListener('load', enable)
  }, [])

  return null
}
