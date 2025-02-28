import Image from 'next/image'

const What = () => {
  return (
    <div className="overflow-hidden bg-white py-14 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-4xl sm:max-w-4xl lg:mx-0">
              <h2 className="sm:subheader-gradient subheader-mobile-gradient">
                We believe great marketing content can also be educational
                content
              </h2>

              <dl className="paragraph-dark mt-6 max-w-xl space-y-8 lg:max-w-none">
                <div className="relative">
                  <dd className="my-2">
                    After spending 8 years as a CTO, building software
                    engineering teams in venture-funded startups, Karl Hughes
                    founded Draft.dev to help companies create authentic
                    technical content that resonates with software developers.
                  </dd>
                </div>

                <div className="relative">
                  <dd className="my-2">
                    Since founding the company in 2020, the team has grown to
                    include marketers, editors, engineers, and over 300
                    engineers who write content for us.
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="hidden lg:ml-auto lg:block">
            <div className="rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
              <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                  <Image
                    alt="Sofware developers coding."
                    src="/site/med-portrait/coding_draft_dev.jpg"
                    width={400}
                    height={600}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default What
