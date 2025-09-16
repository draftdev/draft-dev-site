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
}

const SinglePricing: React.FC<SinglePricingProps> = ({
  title,
  description,
  callToActionURL,
  priceText,
  price,
  currency,
  includedFeatures,
  disclaimerOne,
  disclaimerTwo,
  disclaimerThree,
}) => {
  const normalizeFeature = (
    feature: string | { text: string; leadText?: string },
  ) => {
    if (typeof feature === 'string') {
      return { text: feature, leadText: undefined }
    }
    return feature
  }

  return (
    <div
      className="bg-gradient-brand py-24 sm:py-32"
      id="pricing"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className=" ">
          <div className="rounded-3xl shadow-[inset_0_0_2px_1px_#ffffff4d]">
            <div className="p-2">
              <div className="overflow-hidden rounded-[20px] bg-white/5 shadow-2xl">
                <div className="flex flex-col lg:flex-row">
                  <div className="flex w-full flex-col lg:w-96">
                    <div className="flex flex-1 flex-col items-center justify-center px-8 py-16 sm:py-0">
                      <h3 className="subheader-light flex items-baseline justify-center gap-x-2 text-center text-2xl">
                        Retainers and custom offers available upon request
                      </h3>
                      <Link
                        href={callToActionURL}
                        className="rounded-md bg-white px-6 py-4 text-base font-semibold text-gray-700 shadow-sm hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:text-base"
                      >
                        Book a Discovery Call
                      </Link>
                    </div>

                    {(disclaimerOne || disclaimerTwo || disclaimerThree) && (
                      <div className="bg-black/15 px-8 py-6">
                        <ul className="space-y-2 text-xs font-semibold text-white/90">
                          {disclaimerOne && (
                            <li className="flex items-center gap-x-2">
                              <span className="inline-block text-white/60">
                                •
                              </span>
                              <span>Three month minimum</span>
                            </li>
                          )}
                          {disclaimerTwo && (
                            <li className="flex items-center gap-x-2">
                              <span className="inline-block text-white/60">
                                •
                              </span>
                              <span>{disclaimerTwo}</span>
                            </li>
                          )}
                          {disclaimerThree && (
                            <li className="flex items-center gap-x-2">
                              <span className="inline-block text-white/60">
                                •
                              </span>
                              <span>{disclaimerThree}</span>
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="w-full bg-white p-8 sm:p-10 lg:w-[calc(100%-384px)]">
                    <h3 className="subheader-gradient text-3xl">
                      Let's talk about AI-enabled growth
                    </h3>
                    <p className="text-base lg:text-lg">
                      Get started with our expert-vetted, compounding growth engine
                      approved by real engineers. A Draft.dev subscription
                      provides you with a Developer Content Strategy, Content
                      Creation & Review, Lead Magnets, Content Refreshes, and
                      ongoing Analysis and Reporting.
                    </p>
                    <div className="my-8 h-px bg-gray-300" />
                    <ul className="grid grid-cols-1 gap-4 text-sm text-gray-600 sm:grid-cols-2">
                      {includedFeatures.map((feature, index) => {
                        const { text, leadText } = normalizeFeature(feature)
                        return (
                          <li key={index} className="flex items-center gap-x-3">
                            {leadText ? (
                              <span>
                                <span className="font-semibold">
                                  {leadText}
                                </span>{' '}
                                {text}
                              </span>
                            ) : (
                              text
                            )}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePricing
