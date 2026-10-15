import CalendlyWidget from '@/components/page-components/vendors/calendly'
import FormInquiry from '@/components/page-components/vendors/hubspot/form-inquiry'

// The /call page's booking options, embedded so visitors can book without
// leaving the page.
const BookCall = () => {
  return (
    <section id="book-a-call" className="scroll-mt-32 bg-white py-16 sm:py-20">
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

        <div className="mx-auto mt-10 max-w-4xl">
          <CalendlyWidget
            url="https://calendly.com/mushfiq-draft/draft-dev-discovery-call"
            minWidth={320}
            height={760}
          />
          <div id="inquiry-form" className="mx-auto mt-12 max-w-3xl scroll-mt-32">
            <h3 className="text-secondary font-code text-xl font-semibold sm:text-2xl">
              Prefer to send a message?
            </h3>
            <p className="pt-3 pb-8 text-base text-gray-600">
              Tell us about your goals, or email{' '}
              <a
                href="mailto:sales@draft.dev"
                className="text-secondary font-semibold underline underline-offset-4"
              >
                sales@draft.dev
              </a>{' '}
              directly.
            </p>
            <FormInquiry />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookCall
