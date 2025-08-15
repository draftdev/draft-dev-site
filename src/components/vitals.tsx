'use client'
import { useEffect } from 'react'

export default function Vitals() {
  useEffect(() => {
    if ((window as any).__vitalsInit) return
    ;(window as any).__vitalsInit = true

    import('web-vitals/attribution').then(({ onLCP, onCLS, onINP }) => {
      const log = (metric: any) => console.log(metric)
      onLCP(log, { reportAllChanges: true })
      onCLS(log, { reportAllChanges: true })
      onINP(log, { reportAllChanges: true })
    })
  }, [])
  return null
}
