'use client'

import { useEffect, useState } from 'react'
import loadHubspotScript from './load-hubspot-script'

interface HubSpotFormProps {
  portalId: string
  formId: string
  region: string
}

const FORM_LOAD_TIMEOUT_MS = 8000

const LoadHubSpotForm = ({ portalId, formId, region }: HubSpotFormProps) => {
  const [status, setStatus] = useState<'loading' | 'ready' | 'fallback'>(
    'loading',
  )
  const [attempt, setAttempt] = useState(0)
  const targetId = `hubspotForm-${formId}`

  useEffect(() => {
    let mounted = true
    const target = document.getElementById(targetId)

    if (target) {
      target.innerHTML = ''
      delete target.dataset.hubspotCreating
    }

    setStatus('loading')

    const markReady = () => {
      if (mounted) {
        setStatus('ready')
      }
    }

    const markFallback = () => {
      if (mounted) {
        setStatus('fallback')
      }
    }

    const observer = new MutationObserver(() => {
      if (document.getElementById(targetId)?.hasChildNodes()) {
        markReady()
      }
    })

    if (target) {
      observer.observe(target, {
        childList: true,
        subtree: true,
      })
    }

    const timeoutId = window.setTimeout(() => {
      if (!document.getElementById(targetId)?.hasChildNodes()) {
        markFallback()
      }
    }, FORM_LOAD_TIMEOUT_MS)

    loadHubspotScript(formId, portalId, region, {
      onFormReady: markReady,
      onError: markFallback,
    })

    return () => {
      mounted = false
      observer.disconnect()
      window.clearTimeout(timeoutId)
    }
  }, [attempt, formId, portalId, region, targetId])

  return (
    <div className="hubspot-form-container max-w-7xl">
      {status === 'loading' ? (
        <div className="mb-4 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
          Loading secure form...
        </div>
      ) : null}

      {status === 'fallback' ? (
        <div className="mb-4 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
          <p>We could not load the form right now.</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-700"
              onClick={() => setAttempt((value) => value + 1)}
            >
              Try again
            </button>
            <a
              href="/call"
              className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100"
            >
              Book a discovery call
            </a>
            <a
              href="mailto:sales@draft.dev"
              className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100"
            >
              Email sales
            </a>
          </div>
        </div>
      ) : null}

      <div
        id={targetId}
        className={status === 'ready' ? undefined : 'min-h-[480px]'}
      ></div>
    </div>
  )
}

export default LoadHubSpotForm
