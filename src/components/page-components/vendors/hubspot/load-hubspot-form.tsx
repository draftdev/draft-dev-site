'use client'

import { useEffect } from 'react'
import loadHubspotScript from './load-hubspot-script'

interface HubSpotFormProps {
  portalId: string
  formId: string
  region: string
}

const LoadHubSpotForm = ({ portalId, formId, region }: HubSpotFormProps) => {
  useEffect(() => {
    loadHubspotScript(formId, portalId, region)
  }, [formId, portalId, region])

  return (
    <div className="hubspot-form-container max-w-7xl">
      <div id={`hubspotForm-${formId}`}></div>
    </div>
  )
}

export default LoadHubSpotForm
