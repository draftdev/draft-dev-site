'use client'

import { useState } from 'react'

interface SubscribeFormState {
  email: string
  firstName: string
  lastName: string
  companyName: string
  companySize: string
  status: 'idle' | 'loading' | 'success' | 'error'
  errorMessage: string
}

export default function FiftyIdeasSubscribeForm() {
  const [formState, setFormState] = useState<SubscribeFormState>({
    email: '',
    firstName: '',
    lastName: '',
    companyName: '',
    companySize: '',
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
        'https://dev.us15.list-manage.com/subscribe/post?u=4eba8b205fc13380cd3e6f3fc&id=d9774be985&f_id=009978e0f0',
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
        lastName: '',
        companyName: '',
        companySize: '',
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
        <div className="flex flex-col gap-3">
          <label htmlFor="mce-EMAIL" className="paragraph-dark text-lg">
            Email Address *
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
            className="w-full rounded-sm border-2 border-gray-200 bg-transparent p-2 text-gray-800 shadow-sm placeholder:text-gray-400 focus:border-secondary focus:outline-none"
            placeholder="Enter your email"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="mce-FNAME" className="paragraph-dark text-lg">
            First Name *
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
            className="border-gray-22 w-full rounded-sm border-2 bg-transparent p-2 text-gray-800 shadow-sm placeholder:text-gray-400 focus:border-secondary focus:outline-none"
            placeholder="Enter your first name"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="mce-LNAME" className="paragraph-dark text-lg">
            Last Name *
          </label>
          <input
            type="text"
            name="LNAME"
            id="mce-LNAME"
            value={formState.lastName}
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, lastName: e.target.value }))
            }
            required
            className="w-full rounded-sm border-2 border-gray-200 bg-transparent p-2 text-gray-800 shadow-sm placeholder:text-gray-400 focus:border-secondary focus:outline-none"
            placeholder="Enter your last name"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="mce-MMERGE8" className="paragraph-dark text-lg">
            Company Name *
          </label>
          <input
            type="text"
            name="MMERGE8"
            id="mce-MMERGE8"
            value={formState.companyName}
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, companyName: e.target.value }))
            }
            required
            className="w-full rounded-sm border-2 border-gray-200 bg-transparent p-2 text-gray-800 shadow-sm placeholder:text-gray-400 focus:border-secondary focus:outline-none"
            placeholder="Enter your company name"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="mce-MMERGE9" className="paragraph-dark text-lg">
            How many employees work in your company? *
          </label>
          <select
            name="MMERGE9"
            id="mce-MMERGE9"
            value={formState.companySize}
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, companySize: e.target.value }))
            }
            required
            className="w-full rounded-sm border-2 border-gray-200 bg-transparent p-2 text-gray-800 shadow-sm placeholder:text-gray-400 focus:border-secondary focus:outline-none"
          >
            <option value="" disabled selected>
              Select company size
            </option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-150">51-150</option>
            <option value="151-1000">151-1000</option>
            <option value="1000+">1000+</option>
          </select>
        </div>

        {/* Hidden tags field */}
        <input type="hidden" name="tags" value="259232" />

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
          <div className="paragraph-light text-sm">Thank you!</div>
        )}

        <button
          type="submit"
          disabled={formState.status === 'loading'}
          id="mc-embedded-subscribe"
          name="subscribe"
          className="mt-2 rounded-md bg-gradient-brand p-2 shadow-sm transition-all duration-200 hover:bg-white hover:bg-none hover:text-gradient-1 hover:ring-2 hover:ring-gradient-1 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {formState.status === 'loading' ? 'Confirming...' : 'Download'}
        </button>
      </form>
    </div>
  )
}
