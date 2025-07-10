'use client'

import { useEffect, useRef, useState } from 'react'
import loadHubspotScript from './load-hubspot-script'

interface HubSpotFormProps {
  portalId: string
  formId: string
  region: string
}

const LoadHubSpotForm = ({ portalId, formId, region }: HubSpotFormProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      {
        root: null,
        rootMargin: '200px',
        threshold: 0.1,
      },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (shouldLoad) {
      loadHubspotScript(formId, portalId, region)
    }
  }, [shouldLoad, formId, portalId, region])

  return (
    <div className="hubspot-form-container max-w-7xl" ref={containerRef}>
      <div id={`hubspotForm-${formId}`} />
    </div>
  )
}

export default LoadHubSpotForm
