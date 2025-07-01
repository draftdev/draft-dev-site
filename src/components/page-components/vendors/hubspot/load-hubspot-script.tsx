const loadHubspotScript = (formID: string, portalId: string) => {
  const scriptId = `hs-script-${formID}`
  const targetDivId = `hubspotForm-${formID}`

  const targetDiv = document.getElementById(targetDivId)
  if (!targetDiv) {
    console.error('❌ Target div not found:', targetDivId)
    return
  }

  if (document.getElementById(scriptId)) {
    if (window.hbspt && window.hbspt.forms) {
      if (!targetDiv.hasChildNodes()) {
        window.hbspt.forms.create({
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

  const script = document.createElement('script')
  script.id = scriptId
  script.src = 'https://js.hsforms.net/forms/shell.js'

  script.async = true

  const head = document.querySelector('head') as HTMLHeadElement
  head.appendChild(script)

  script.onload = () => {
    setTimeout(() => {
      if (window.hbspt && window.hbspt.forms) {
        window.hbspt.forms.create({
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
