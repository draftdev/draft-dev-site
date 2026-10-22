'use client'

import { useEffect, useState } from 'react'

// Fixed bottom pill that appears once the element with id `watchId` (the
// hero CTA) leaves the viewport. Timing and easing mirror gushwork.ai's
// floating pill: a springy drop into place plus a quick fade.
export default function FloatingCTA({
  watchId,
  children,
}: {
  watchId: string
  children: React.ReactNode
}) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const target = document.getElementById(watchId)
    if (!target) return
    const observer = new IntersectionObserver(
      ([entry]) => setShow(!entry.isIntersecting),
      { threshold: 0 },
    )
    observer.observe(target)
    return () => observer.disconnect()
  }, [watchId])

  return (
    <div
      className="floating-cta fixed bottom-6 left-1/2 z-50"
      style={{
        transition:
          'transform 0.4s cubic-bezier(0.34, 1.2, 0.64, 1), opacity 0.2s',
        transform: show
          ? 'translate(-50%, 0)'
          : 'translate(-50%, -48px)',
        opacity: show ? 1 : 0,
        pointerEvents: show ? 'auto' : 'none',
      }}
    >
      {children}
    </div>
  )
}
