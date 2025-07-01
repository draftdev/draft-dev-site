const loadHubspotScript = (
  formID: string,
  portalId: string,
  region: string,
) => {
  const scriptId = `hs-script-${formID}`
  const targetDivId = `hubspotForm-${formID}`

  console.log(
    `Loading form: ${formID} for portal: ${portalId} in region: ${region}`,
  )

  // Check if script already exists
  if (document.getElementById(scriptId)) {
    console.log('Script already exists, checking if form needs to be created')
    // If script exists but form hasn't been created yet
    if (
      window.hbspt &&
      !document.getElementById(targetDivId)?.hasChildNodes()
    ) {
      console.log('Creating form with existing script')
      window.hbspt.forms.create({
        region: region,
        portalId: portalId,
        formId: formID,
        target: `#${targetDivId}`,
      })
    }
    return
  }

  console.log('Creating new HubSpot script')
  // Create new script - using shell.js which was working before
  const script = document.createElement('script')
  script.id = scriptId
  script.src = 'https://js.hsforms.net/forms/shell.js'
  script.async = true

  const head = document.querySelector('head') as HTMLHeadElement
  head.appendChild(script)

  script.onload = () => {
    console.log('HubSpot script loaded successfully')
    if (window.hbspt) {
      console.log('Creating form after script load')
      window.hbspt.forms.create({
        region: region,
        portalId: portalId,
        formId: formID,
        target: `#${targetDivId}`,
      })
    } else {
      console.error('HubSpot API not available after script load')
    }
  }

  script.onerror = (error) => {
    console.error('Failed to load HubSpot script:', error)
  }
}

export default loadHubspotScript
