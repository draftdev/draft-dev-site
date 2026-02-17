type HubspotLoadErrorReason =
  | 'script_load_failed'
  | 'forms_api_unavailable'
  | 'target_missing'
  | 'forms_create_failed'

type LoadHubspotScriptOptions = {
  onFormReady?: () => void
  onError?: (reason: HubspotLoadErrorReason) => void
}

const HUBSPOT_SCRIPT_ID = 'hs-script-shell'
const HUBSPOT_SCRIPT_SRC = 'https://js.hsforms.net/forms/shell.js'

const loadHubspotScript = (
  formId: string,
  portalId: string,
  region: string,
  options?: LoadHubspotScriptOptions,
) => {
  const targetDivId = `hubspotForm-${formId}`

  const createFormIfPossible = () => {
    const targetElement = document.getElementById(targetDivId)
    if (!targetElement) {
      options?.onError?.('target_missing')
      return false
    }

    if (targetElement.hasChildNodes()) {
      options?.onFormReady?.()
      return true
    }

    if (targetElement.dataset.hubspotCreating === '1') {
      return true
    }

    if (!window.hbspt?.forms?.create) {
      return false
    }

    targetElement.dataset.hubspotCreating = '1'

    try {
      window.hbspt.forms.create({
        region,
        portalId,
        formId,
        target: `#${targetDivId}`,
        onFormReady: () => {
          delete targetElement.dataset.hubspotCreating
          options?.onFormReady?.()
        },
      })
      return true
    } catch {
      delete targetElement.dataset.hubspotCreating
      options?.onError?.('forms_create_failed')
      return false
    }
  }

  const waitForHubspotApi = () => {
    let attempts = 0
    const maxAttempts = 80

    const check = () => {
      if (createFormIfPossible()) {
        return
      }

      attempts += 1
      if (attempts >= maxAttempts) {
        options?.onError?.('forms_api_unavailable')
        return
      }

      window.setTimeout(check, 100)
    }

    check()
  }

  if (createFormIfPossible()) {
    return
  }

  const handleScriptError = () => {
    options?.onError?.('script_load_failed')
    console.error('Failed to load HubSpot forms script')
  }

  const script = document.getElementById(HUBSPOT_SCRIPT_ID) as
    | HTMLScriptElement
    | null

  if (script) {
    script.addEventListener('load', waitForHubspotApi, { once: true })
    script.addEventListener('error', handleScriptError, { once: true })
    waitForHubspotApi()
    return
  }

  const nextScript = document.createElement('script')
  nextScript.id = HUBSPOT_SCRIPT_ID
  nextScript.src = HUBSPOT_SCRIPT_SRC
  nextScript.async = true
  nextScript.addEventListener('load', waitForHubspotApi, { once: true })
  nextScript.addEventListener('error', handleScriptError, { once: true })
  document.head.appendChild(nextScript)
}

export default loadHubspotScript
