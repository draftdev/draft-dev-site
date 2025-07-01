const loadHubspotScript = (
  formID: string,
  portalId: string,
  region: string,
) => {
  const scriptId = `hs-script-${formID}`
  const targetDivId = `hubspotForm-${formID}`

  console.log('🔍 Loading HubSpot form:', { formID, portalId, region })

  // Check if target div exists
  const targetDiv = document.getElementById(targetDivId)
  if (!targetDiv) {
    console.error('❌ Target div not found:', targetDivId)
    return
  }

  // Check if script already loaded
  if (document.getElementById(scriptId)) {
    console.log('✅ Script already loaded, creating form...')

    // Check if hbspt is available
    if (window.hbspt && window.hbspt.forms) {
      // Only create if form hasn't been created yet
      if (!targetDiv.hasChildNodes()) {
        console.log('📝 Creating form in existing container...')
        window.hbspt.forms.create({
          region: region,
          portalId: portalId,
          formId: formID,
          target: `#${targetDivId}`,
        })
      } else {
        console.log('⚠️ Form already exists in container')
      }
    } else {
      console.error('❌ window.hbspt not available despite script being loaded')
    }
    return
  }

  console.log('📥 Loading HubSpot script...')
  const script = document.createElement('script')
  script.id = scriptId
  script.src = '//js.hsforms.net/forms/shell.js'
  script.async = true

  const head = document.querySelector('head') as HTMLHeadElement
  head.appendChild(script)

  script.onload = () => {
    console.log('✅ HubSpot script loaded successfully')

    // Add a small delay to ensure hbspt is initialized
    setTimeout(() => {
      if (window.hbspt && window.hbspt.forms) {
        console.log('📝 Creating form after script load...')
        window.hbspt.forms.create({
          region: region,
          portalId: portalId,
          formId: formID,
          target: `#${targetDivId}`,
        })
      } else {
        console.error('❌ window.hbspt still not available after script load')
      }
    }, 100)
  }

  script.onerror = (error) => {
    console.error('❌ Failed to load HubSpot script:', error)
  }
}

export default loadHubspotScript
