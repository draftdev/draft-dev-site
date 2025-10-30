import Image from 'next/image'

const What = () => {
  return (
    <div className="overflow-hidden bg-white py-14 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
            <div className="mx-auto max-w-4xl sm:max-w-4xl lg:mx-0">
              <h2 className="sm:subheader-gradient subheader-mobile-gradient">
                A developer content agency building growth engines for tech companies
              </h2>

              <dl className="paragraph-dark mt-6 max-w-xl space-y-8 text-lg lg:max-w-none">
                <div className="relative">
                  <dd className="my-2">
                    Draft.dev delivers a breadth of authentic developer content backed by real engineering expertise. Founded in 2020 by former CTO Karl Hughes, we combine strategic marketing with hands-on technical knowledge to create content that performs.

Our network of 300+ seasoned engineers produces technically accurate content that resonates with developer audiences, search and answer engines, and algorithms. Experienced marketers and editors ensure every piece is derived from strategic goals and drives results while maintaining the depth developers expect.
                  </dd>
                </div>

                <div className="relative">
                  <dd className="my-2">
                    <strong>From strategy, to production, to distribution within weeks.</strong> We handle the full content lifecycle: planning, production, and promotion. Proven AI workflows combined with hundreds of subject matter experts ensure fast turnaround times and high quality.
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
