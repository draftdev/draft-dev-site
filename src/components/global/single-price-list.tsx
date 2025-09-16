interface SinglePricingListProps {
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

const SinglePricingList: React.FC<SinglePricingListProps> = ({
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
    <div id="how-we-work" className="bg-gradient-brand sm:py-32">
      <div className="mx-auto max-w-4xl px-6 py-12 sm:py-0 sm:pb-6 lg:max-w-4xl lg:text-center">
        <h2 className="subheader-light">See Our Process</h2>

        <h3 className="paragraph-light py-3 text-lg">
          We combine AI workflows with human expertise, ensuring fast turnaround
          and high-quality output.
        </h3>
      </div>

      <div className="my-6">
        {' '}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl shadow-[inset_0_0_2px_1px_#ffffff4d]">
            <div className="p-2">
              <div className="overflow-hidden rounded-[20px] bg-white/5 shadow-2xl">
                <div className="flex flex-col lg:flex-row">
                  <div className="flex min-h-12 w-full flex-col justify-center text-left lg:w-96">
                    <h3 className="subheader-light pl-10 text-lg sm:text-4xl">
                      <span className="block">Step 1:</span> Research & Strategy
                    </h3>
                  </div>
                  <div className="w-full bg-white p-8 sm:p-10 lg:w-[calc(100%-384px)]">
                    <h4 className="subheader-gradient text-2xl sm:text-3xl">
                      Clarity and Authenticity
                    </h4>
                    <p className="text-base sm:text-lg">
                      We analyze your industry, competitors, positioning,
                      product features, target audience, and make sure to
                      understand your brand and tone of voice, ensuring
                      authentic output.
                    </p>
                    <div className="my-8 bg-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-6">
        {' '}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl shadow-[inset_0_0_2px_1px_#ffffff4d]">
            <div className="p-2">
              <div className="overflow-hidden rounded-[20px] bg-white/5 shadow-2xl">
                <div className="flex flex-col lg:flex-row">
                  <div className="flex min-h-12 w-full flex-col justify-center text-left lg:w-96">
                    <h3 className="subheader-light pl-10 text-lg sm:text-4xl">
                      <span className="block">Step 2:</span> Content Generation
                    </h3>
                  </div>
                  <div className="w-full bg-white p-8 sm:p-10 lg:w-[calc(100%-384px)]">
                    <h4 className="subheader-gradient text-2xl sm:text-3xl">
                      Blending AI Efficiency and Human Accuracy
                    </h4>
                    <p className="text-base sm:text-lg">
                      We build expert-crafted AI workflows customized to your
                      unique situation. We provide content types like product
                      tutorials, videos, comparisons, how-tos, guides, and much
                      more.
                    </p>
                    <div className="my-8 bg-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-6">
        {' '}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl shadow-[inset_0_0_2px_1px_#ffffff4d]">
            <div className="p-2">
              <div className="overflow-hidden rounded-[20px] bg-white/5 shadow-2xl">
                <div className="flex flex-col lg:flex-row">
                  <div className="flex min-h-12 w-full flex-col justify-center text-left lg:w-96">
                    <h3 className="subheader-light pl-10 text-lg sm:text-4xl">
                      <span className="block">Step 3:</span> Technical Experts
                      Review
                    </h3>
                  </div>
                  <div className="w-full bg-white p-8 sm:p-10 lg:w-[calc(100%-384px)]">
                    <h4 className="subheader-gradient text-2xl sm:text-3xl">
                      Technical & Journalistic Expertise
                    </h4>
                    <p className="text-base sm:text-lg">
                      We have over 300+ practicing software engineers reviewing
                      your content. Our journalists and editors conduct copy
                      edits and grammar edits to ensure your content is of the
                      highest quality, technically correct, and authentic to
                      your brand's voice.
                    </p>
                    <div className="my-8 bg-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-6">
        {' '}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl shadow-[inset_0_0_2px_1px_#ffffff4d]">
            <div className="p-2">
              <div className="overflow-hidden rounded-[20px] bg-white/5 shadow-2xl">
                <div className="flex flex-col lg:flex-row">
                  <div className="flex min-h-12 w-full flex-col justify-center text-left lg:w-96">
                    <h3 className="subheader-light pl-10 text-lg sm:text-4xl">
                      <span className="block">Step 4:</span> Content Refreshes
                    </h3>
                  </div>
                  <div className="w-full bg-white p-8 sm:p-10 lg:w-[calc(100%-384px)]">
                    <h4 className="subheader-gradient text-2xl sm:text-3xl">
                      Stay Relevant & Rank Well
                    </h4>
                    <p className="text-base sm:text-lg">
                      It's crucial to keep your content fresh. Nobody wants to
                      have a prospective customer use ChatGPT to get a result
                      that shows outdated information about your product. We run
                      recurring content analysis and technical, as well as
                      SEO/GEO refreshes.
                    </p>
                    <div className="my-8 bg-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-6">
        {' '}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl shadow-[inset_0_0_2px_1px_#ffffff4d]">
            <div className="p-2">
              <div className="overflow-hidden rounded-[20px] bg-white/5 shadow-2xl">
                <div className="flex flex-col lg:flex-row">
                  <div className="flex min-h-12 w-full flex-col justify-center text-left lg:w-96">
                    <h3 className="subheader-light pl-10 text-lg sm:text-4xl">
                      <span className="block">Step 5:</span> Analyze & Optimize
                    </h3>
                  </div>
                  <div className="w-full bg-white p-8 sm:p-10 lg:w-[calc(100%-384px)]">
                    <h4 className="subheader-gradient text-2xl sm:text-3xl">
                      Insights and Transparency
                    </h4>
                    <p className="text-base sm:text-lg">
                      We provide recurring reports and insights around your
                      performance and apply content improvements based on our
                      internal SEO and AI Optimization platform when new
                      opportunities for updates present themselves
                    </p>
                    <div className="my-8 bg-gray-300" />
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

export default SinglePricingList
