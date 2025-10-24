import Image from 'next/image'

const What = () => {
  return (
    <div className="overflow-hidden bg-white py-14 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
            <div className="mx-auto max-w-4xl sm:max-w-4xl lg:mx-0">
              <h2 className="sm:subheader-gradient subheader-mobile-gradient">
                What sets us apart
              </h2>

              <dl className="paragraph-dark mt-6 max-w-xl space-y-8 text-lg lg:max-w-none">
                <div className="relative">
                  <dd className="my-2">
                    Most developer marketing teams are stuck with the same questions: What content will actually drive results? Is SEO still relevant? What about AI? What's the right CTA? We answer these questions with data-driven content strategies built on comprehensive industry analysis and decades of market experience, not guesswork.
                    </dd>
                  </div>
                  <div className="relative">
                    <dd className="my-2">
                    Unlike generic SEO agencies, we understand that developers trust peer-written content, value technical accuracy over marketing speak, and make decisions based on hands-on experience.
                  </dd>
                </div>

                <div className="relative">
                  <dd className="my-2">
                    We analyze your industry, competitors, positioning, product features, target audience, and brand voice to ensure authentic output. Then we conduct SEO and GEO research, assess your existing content, study your marketing funnel, and deliver a content strategy and roadmap tailored to your business. All of this is done by seasoned software engineers, growth marketers, and editors.
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="hidden lg:ml-auto lg:block">
            <div className="rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
              <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline-1 -outline-offset-1 outline-black/10">
                  <Image
                    alt="Software developers coding."
                    src="/site/med-portrait/coding_draft_dev.jpg"
                    width={400}
                    height={500}
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
