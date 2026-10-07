import Image from 'next/image'

const Partner = () => {
  return (
    <div className="overflow-hidden bg-white py-14 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
            <div className="mx-auto max-w-4xl sm:max-w-4xl lg:mx-0">
              <h2 className="sm:subheader-gradient subheader-mobile-gradient">
                A paid partner that understands technical audiences
              </h2>

              <dl className="paragraph-dark mt-6 max-w-xl space-y-8 text-lg lg:max-w-none">
                <div className="relative">
                  <dd className="my-2">
                    Most developer marketing teams have tried paid and come away
                    skeptical. Developers use ad blockers at 3x the average
                    rate, ignore banner ads, and distrust marketing messages.
                    But the people who approve the purchase search for
                    comparisons and alternatives, and the engineer who hit a
                    wall in your documentation is one click from a trial. Paid
                    works on this audience when it captures demand that already
                    exists, and wastes money when it tries to create it.
                  </dd>
                </div>
                <div className="relative">
                  <dd className="my-2">
                    Unlike generic PPC agencies, we understand that developers
                    trust peer-written content, value technical accuracy over
                    marketing speak, and make decisions based on hands-on
                    experience. We analyze your industry, competitors,
                    positioning, product features, target audience, and brand
                    voice to ensure authentic output, then write your landing
                    pages with the same vetted engineer-writers who create your
                    technical content.
                  </dd>
                </div>
                <div className="relative">
                  <dd className="my-2">
                    After the account structure is agreed, we run the
                    campaigns, build and test the landing pages, and report
                    monthly on cost per lead and cost per signup. We provide
                    actionable insights about which searches are producing
                    pipeline, not just vanity metrics, and shift budget based
                    on real performance data.
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

export default Partner
