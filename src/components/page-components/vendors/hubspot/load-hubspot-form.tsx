'use client'

import { useEffect, useState } from 'react'
import loadHubspotScript from './load-hubspot-script'

interface HubSpotFormProps {
  portalId: string
  formId: string
}

const LoadHubSpotForm = ({ portalId, formId }: HubSpotFormProps) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Validate inputs
    if (!portalId || !formId) {
      setError('Missing required form configuration')
      setLoading(false)
      return
    }

    // Ensure DOM is ready
    const loadForm = () => {
      try {
        loadHubspotScript(formId, portalId)

        // Check if form loaded after a delay
        setTimeout(() => {
          const formContainer = document.getElementById(`hubspotForm-${formId}`)
          if (formContainer && formContainer.hasChildNodes()) {
            setLoading(false)
          } else {
            setError('Form failed to load - check console for details')
            setLoading(false)
          }
        }, 3000) // Give it 3 seconds to load
      } catch (err) {
        console.error('Error loading HubSpot form:', err)
        setError('Failed to load form')
        setLoading(false)
      }
    }

    // Ensure we're in the browser and DOM is ready
    if (typeof window !== 'undefined') {
      if (document.readyState === 'complete') {
        loadForm()
      } else {
        window.addEventListener('load', loadForm)
        return () => window.removeEventListener('load', loadForm)
      }
    }
  }, [formId, portalId])

  return (
    <div className="hubspot-form-container max-w-7xl">
      {loading && (
        <div className="py-8 text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-b-2 border-gray-900"></div>
          <p className="mt-2 text-gray-600">Loading form...</p>
        </div>
      )}
      {error && (
        <div className="rounded border border-red-200 bg-red-50 px-4 py-3 text-red-700">
          <p className="font-semibold">Error loading form</p>
          <p className="text-sm">{error}</p>
          <p className="mt-2 text-xs">
            Portal ID: {portalId}, Form ID: {formId}
          </p>
        </div>
      )}
      <div
        id={`hubspotForm-${formId}`}
        style={{ minHeight: loading ? '400px' : 'auto' }}
      ></div>
    </div>
  )
}

export default LoadHubSpotForm
