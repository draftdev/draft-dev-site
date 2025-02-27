'use client'

import { useState } from 'react'

interface SubscribeFormState {
  email: string
  firstName: string
  status: 'idle' | 'loading' | 'success' | 'error'
  errorMessage: string
}

export default function NLSubscribeForm() {
  const [formState, setFormState] = useState<SubscribeFormState>({
    email: '',
    firstName: '',
    status: 'idle',
    errorMessage: '',
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState((prev) => ({ ...prev, status: 'loading' }))

    try {
      const form = e.currentTarget
      const formData = new FormData(form)

      const response = await fetch(
        'https://dev.us15.list-manage.com/subscribe/post?u=4eba8b205fc13380cd3e6f3fc&id=d9774be985&f_id=009078e0f0',
        {
          method: 'POST',
          body: formData,
          mode: 'no-cors',
        },
      )

      setFormState((prev) => ({
        ...prev,
        status: 'success',
        email: '',
        firstName: '',
      }))
    } catch (error) {
      setFormState((prev) => ({
        ...prev,
        status: 'error',
        errorMessage: 'An error occurred. Please try again later.',
      }))
    }
  }

  return (
    <div className="relative w-full lg:shrink-0 xl:max-w-4xl">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6"
        target="_blank"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        method="post"
      >
        <div className="paragraph-light text-sm">
          <span className="text-secondary">*</span> indicates required
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="mce-EMAIL" className="paragraph-light">
            Email Address <span className="text-secondary">*</span>
          </label>
          <input
            type="email"
            name="EMAIL"
            id="mce-EMAIL"
            value={formState.email}
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, email: e.target.value }))
            }
            required
            className="w-full rounded-sm border-2 border-white bg-transparent px-4 py-3 text-white shadow-md placeholder:text-gray-400 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
            placeholder="Enter your email"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="mce-FNAME" className="paragraph-light">
            First Name <span className="text-secondary">*</span>
          </label>
          <input
            type="text"
            name="FNAME"
            id="mce-FNAME"
            value={formState.firstName}
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, firstName: e.target.value }))
            }
            required
            className="w-full rounded-sm border-2 border-white bg-transparent px-4 py-3 text-white shadow-md placeholder:text-gray-400 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
            placeholder="Enter your first name"
          />
        </div>

        {/* Response messages */}
        <div id="mce-responses" className="clear">
          <div id="mce-error-response" style={{ display: 'none' }}></div>
          <div id="mce-success-response" style={{ display: 'none' }}></div>
        </div>

        {/* Honeypot field */}
        <div
          className="absolute left-[-5000px] bg-transparent"
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_4eba8b205fc13380cd3e6f3fc_d9774be985"
            tabIndex={-1}
            value=""
            readOnly
          />
        </div>

        {formState.status === 'error' && (
          <div className="text-sm text-secondary">{formState.errorMessage}</div>
        )}

        {formState.status === 'success' && (
          <div className="paragraph-light text-sm">
            Thank you for subscribing!
          </div>
        )}

        <button
          type="submit"
          disabled={formState.status === 'loading'}
          id="mc-embedded-subscribe"
          name="subscribe"
          className="hero-cta-primary border-1 mt-2 border-white bg-transparent text-white shadow-md transition-all duration-200 hover:bg-white hover:text-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {formState.status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    </div>
  )
}
