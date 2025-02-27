'use client'
// components/global/analytics-provider.tsx

import { useEffect, useRef } from 'react'
import {
  initUserInteractionTracking,
  trackScroll,
} from '../../app/utils/analytics'
import GoogleAnalytics from './google-analytics'
import GoogleTagManagerNoScript from './gtm-noscript'

export default function AnalyticsProvider({
  children,
}: {
  children: React.ReactNode
}) {
  // Use refs to track if event listeners are initialized
  const scrollTrackingInitialized = useRef(false)
  const interactionTrackingInitialized = useRef(false)

  useEffect(() => {
    // Only initialize once
    if (!scrollTrackingInitialized.current) {
      // Initialize scroll tracking with IntersectionObserver
      const scrollCleanup = trackScroll()
      scrollTrackingInitialized.current = true

      return () => {
        scrollCleanup()
        scrollTrackingInitialized.current = false
      }
    }
  }, [])

  useEffect(() => {
    // Only initialize once
    if (!interactionTrackingInitialized.current) {
      // Initialize user interaction tracking
      const interactionCleanup = initUserInteractionTracking()
      interactionTrackingInitialized.current = true

      return () => {
        interactionCleanup()
        interactionTrackingInitialized.current = false
      }
    }
  }, [])

  return (
    <>
      <GoogleTagManagerNoScript />
      <GoogleAnalytics />
      {children}
    </>
  )
}
