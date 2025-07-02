const loadHubspotScript = (
  formID: string,
  portalId: string,
  region: string,
) => {
  const scriptId = `hs-script-${formID}`
  const targetDivId = `hubspotForm-${formID}`

  // Check if HubSpot is already loaded
  if (window['hbspt']) {
    if (!document.getElementById(targetDivId)?.hasChildNodes()) {
      window['hbspt'].forms.create({
        region: region,
        portalId: portalId,
        formId: formID,
        target: `#${targetDivId}`,
      })
    }
    return
  }

  // Check if script is already being loaded
  if (document.getElementById(scriptId)) {
    // Wait for the script to load then create form
    const checkHubSpot = () => {
      if (window['hbspt']) {
        window['hbspt'].forms.create({
          region: region,
          portalId: portalId,
          formId: formID,
          target: `#${targetDivId}`,
        })
      } else {
        setTimeout(checkHubSpot, 100)
      }
    }
    checkHubSpot()
    return
  }

  const script = document.createElement('script')
  script.id = scriptId
  script.src = '//js.hsforms.net/forms/shell.js'
  script.async = true

  script.onerror = () => {
    console.error('Failed to load HubSpot forms script')
  }

  document.head.appendChild(script)

  script.onload = () => {
    if (window['hbspt']) {
      window['hbspt'].forms.create({
        region: region,
        portalId: portalId,
        formId: formID,
        target: `#${targetDivId}`,
      })
    }
  }
}

export default loadHubspotScript
