import Image from 'next/image'

const What = () => {
  return (
    <div className="overflow-hidden bg-white py-14 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
            <div className="mx-auto max-w-4xl sm:max-w-4xl lg:mx-0">
              <h2 className="sm:subheader-gradient subheader-mobile-gradient">
                We believe great marketing content can also be educational
                content
              </h2>

              <dl className="paragraph-dark mt-6 max-w-xl space-y-8 text-lg lg:max-w-none">
                <div className="relative">
                  <dd className="my-2">
                    With over 8 years of experience as a CTO, Karl Hughes has a
                    deep understanding of the challenges companies face in
                    connecting with software developers. This expertise inspired
                    him to found Draft.dev in 2020, with the mission of helping
                    businesses create authentic technical content that not only
                    engages but also educates their target audience.
                  </dd>
                </div>

                <div className="relative">
                  <dd className="my-2">
                    Draft.dev has expanded its team to include skilled
                    marketers, editors, and engineers, alongside a network of
                    over 300 experienced engineers who contribute high-quality
                    content. This diverse team ensures that our content is not
                    only technically accurate but also resonates with the unique
                    needs of software developers, bridging the gap between
                    marketing and education.
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
