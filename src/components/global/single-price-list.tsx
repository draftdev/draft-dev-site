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
          We plan, produce, publish, and promote your first pieces within weeks.
        </h3>
        <a
          className="paragraph-light text-lg underline"
          href="/technical-content-examples"
        >
          Interested in what we can create for you? Check out content examples
          for 40+ different clients here.
        </a>
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
                      We get to know you and define a plan
                    </h4>
                    <p className="text-base sm:text-lg">
                      We analyze your industry, competitors, positioning,
                      product features, target audience, and make sure to
                      understand your brand and tone of voice, ensuring
                      authentic output. We conduct SEO and GEO research, assess
                      your existing content, study your existing marketing
                      funnel, and delivery a content strategy and roadmap for
                      your feedback.
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
                      <span className="block">Step 2:</span> Content Production
                    </h3>
                  </div>
                  <div className="w-full bg-white p-8 sm:p-10 lg:w-[calc(100%-384px)]">
                    <h4 className="subheader-gradient text-2xl sm:text-3xl">
                      We publish your first pieces within weeks
                    </h4>
                    <p className="text-base sm:text-lg">
                      We create strategically relevant content pieces for you.
                      These include blog posts and tutorials, comparison pages,
                      landing pages and onboarding content, technical product
                      guides and use case deep-dives, thought leadership pieces,
                      lead magnets and gated assets and more. To ensure fast
                      turnaround times we use proven AI workflows to help draft
                      your pieces. Each single piece is reviewed by real
                      developers and edited by professional technical editors to
                      ensure accuracy, clarity, and value for your audience. We
                      can manage publication of your content via all major CMSs.
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
                      <span className="block">Step 3:</span> Content Promotion
                    </h3>
                  </div>
                  <div className="w-full bg-white p-8 sm:p-10 lg:w-[calc(100%-384px)]">
                    <h4 className="subheader-gradient text-2xl sm:text-3xl">
                      We help you get reach and click-throughs
                    </h4>
                    <p className="text-base sm:text-lg">
                      We help promoting your content on Reddit, LinkedIn,
                      Twitter/X, and more. We create variations you can use for
                      third-party syndication and assist in publishing and
                      advertising your pieces niche publications and newsletters
                      that are read by your target audience.
                    </p>
                    <div className="my-8 bg-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*       <div className="my-6">
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
      </div> */}
    </div>
  )
}

export default SinglePricingList
