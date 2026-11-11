import { CheckCircleIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

interface SinglePricingProps {
  title: string
  description: string
  callToActionURL: string
  priceText: string
  price: string | number
  currency: string
  includedFeatures: Array<
    | {
        text: string
        leadText?: string
      }
    | string
  >
  disclaimerOne?: string
  disclaimerTwo?: string
  disclaimerThree?: string
  // Section background
  className?: string
}

const SinglePricing: React.FC<SinglePricingProps> = ({
  callToActionURL,
  price,
  currency,
  includedFeatures,
  disclaimerOne,
  disclaimerTwo,
  disclaimerThree,
  className = 'bg-white',
}) => {
  const normalizeFeature = (
    feature: string | { text: string; leadText?: string },
  ) => {
    if (typeof feature === 'string') {
      return { text: feature, leadText: undefined }
    }
    return feature
  }

  const disclaimers = [disclaimerOne, disclaimerTwo, disclaimerThree].filter(
    Boolean,
  )

  return (
    <section className={`${className} py-12 sm:py-16`} id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-[#5e5285]/15 lg:flex">
          {/* Price panel */}
          <div className="bg-gradient-brand relative isolate flex flex-col overflow-hidden lg:w-96 lg:shrink-0">
            <div
              aria-hidden="true"
              className="absolute -top-20 -right-20 -z-10 h-56 w-56 rounded-full bg-amber-300/20 blur-3xl"
            />
            <div className="flex flex-1 flex-col items-center justify-center px-8 py-12 text-center">
              <p className="font-code flex items-baseline justify-center gap-x-1 font-semibold text-white">
                <span className="text-5xl">{price}</span>
                <span className="text-xl text-white/80">{currency}</span>
              </p>
              <p className="mt-3 text-sm text-white/80">
                Retainers and custom offers available upon request
              </p>
              <Link
                href={callToActionURL}
                className="mt-8 rounded-md bg-amber-400 px-6 py-3.5 text-base font-semibold text-gray-900 shadow-lg shadow-black/20 transition hover:bg-amber-300"
              >
                Book a Discovery Call
              </Link>
            </div>
            {disclaimers.length > 0 && (
              <ul className="space-y-2 bg-black/15 px-8 py-6 text-sm text-white/90">
                {disclaimers.map((item) => (
                  <li key={item} className="flex gap-x-2">
                    <span aria-hidden="true" className="text-amber-300">
                      •
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* What's included */}
          <div className="bg-white p-8 sm:p-10 lg:flex-1">
            <h2 className="font-code text-secondary text-2xl font-semibold sm:text-3xl">
              Let’s talk about your growth engine
            </h2>
            <p className="mt-4 text-base text-gray-600 lg:text-lg">
              Get started with our compounding growth engine approved by real
              engineers. A Draft.dev subscription provides you with a Developer
              Content Strategy, Content Creation & Review, Lead Magnets, Content
              Refreshes, and ongoing Analysis and Reporting.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-5 border-t border-gray-100 pt-8 sm:grid-cols-2">
              {includedFeatures.map((feature, index) => {
                const { text, leadText } = normalizeFeature(feature)
                return (
                  <li key={index} className="flex gap-x-3 text-base">
                    <CheckCircleIcon
                      aria-hidden="true"
                      className="text-secondary mt-0.5 size-5 shrink-0"
                    />
                    <span className="text-gray-600">
                      {leadText && (
                        <span className="font-semibold text-gray-900">
                          {leadText}
                        </span>
                      )}{' '}
                      {text}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SinglePricing
