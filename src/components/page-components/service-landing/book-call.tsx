import CalendlyWidget from '@/components/page-components/vendors/calendly'
import FormInquiry from '@/components/page-components/vendors/hubspot/form-inquiry'
import {
  CalendarDaysIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline'

// The /call page's booking options, embedded so visitors can book without
// leaving the page: Calendly on the left, the inquiry form on the right.
const BookCall = () => {
  return (
    // Extra bottom padding: the footer CTA overlaps the last section by ~136px.
    <section
      id="book-a-call"
      className="scroll-mt-32 bg-gray-50 pt-14 pb-48 sm:pt-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="subheader-mobile-gradient sm:subheader-gradient">
            Book a Discovery Call
          </h2>
          <p className="sm:paragraph-dark pt-3 text-lg text-gray-600">
            Pick a time that works for you, or send us a message and we&apos;ll
            reply within 24 hours.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-200">
            <div className="flex items-center gap-x-4 border-b border-gray-100 px-6 py-5 sm:px-8">
              <span className="bg-gradient-brand flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                <CalendarDaysIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
              <div>
                <h3 className="text-secondary font-code text-lg font-semibold sm:text-xl">
                  Schedule a call
                </h3>
                <p className="text-sm text-gray-600">
                  Choose a time on our calendar.
                </p>
              </div>
            </div>
            <CalendlyWidget
              url="https://calendly.com/mushfiq-draft/draft-dev-discovery-call"
              minWidth={320}
              height={900}
            />
          </div>

          <div
            id="inquiry-form"
            className="flex scroll-mt-32 flex-col rounded-3xl bg-white shadow-sm ring-1 ring-gray-200"
          >
            <div className="flex items-center gap-x-4 border-b border-gray-100 px-6 py-5 sm:px-8">
              <span className="bg-gradient-brand flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                <EnvelopeIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
              <div>
                <h3 className="text-secondary font-code text-lg font-semibold sm:text-xl">
                  Send a message
                </h3>
                <p className="text-sm text-gray-600">
                  Or email{' '}
                  <a
                    href="mailto:sales@draft.dev"
                    className="text-secondary font-semibold underline underline-offset-4"
                  >
                    sales@draft.dev
                  </a>
                </p>
              </div>
            </div>
            <div className="flex-1 px-6 py-6 sm:px-8">
              <FormInquiry />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookCall
