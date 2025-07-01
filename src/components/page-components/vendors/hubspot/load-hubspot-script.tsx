const loadHubspotScript = (
  formID: string,
  portalId: string,
  region: string,
) => {
  const scriptId = `hs-script-${formID}`
  const targetDivId = `hubspotForm-${formID}`

  if (document.getElementById(scriptId)) {
    if (
      window.hbspt &&
      !document.getElementById(targetDivId)?.hasChildNodes()
    ) {
      window.hbspt.forms.create({
        region: region,
        portalId: portalId,
        formId: formID,
        target: `#${targetDivId}`,
      })
    }
    return
  }

  const script = document.createElement('script')
  script.id = scriptId
  script.src = '//js.hsforms.net/forms/shell.js'
  script.async = true

  const head = document.querySelector('head') as HTMLHeadElement
  head.appendChild(script)

  script.onload = () => {
    if (window.hbspt) {
      window.hbspt.forms.create({
        region: region,
        portalId: portalId,
        formId: formID,
        target: `#${targetDivId}`,
      })
    }
  }
}

export default loadHubspotScript
