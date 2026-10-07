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
                    Most developer marketing teams have tried paid ads and
                    weren't impressed. Developers use ad blockers 3x more than
                    average, ignore banner ads, and don't trust marketing
                    messages. But the people who approve the purchase search
                    for comparisons and alternatives. And an engineer who gets
                    stuck in your docs is one click away from a trial. Paid ads
                    work when they reach people who are already looking. They
                    waste money when they try to interrupt people who aren't.
                  </dd>
                </div>
                <div className="relative">
                  <dd className="my-2">
                    Unlike generic PPC agencies, we understand that developers
                    trust peer-written content, value technical accuracy over
                    marketing speak, and make decisions based on hands-on
                    experience. We analyze your industry, competitors,
                    positioning, product features, target audience, and brand
                    voice to ensure authentic output. Then the same vetted
                    engineer-writers who create your technical content write
                    your landing pages.
                  </dd>
                </div>
                <div className="relative">
                  <dd className="my-2">
                    Once we agree on the account setup, we run the campaigns,
                    build and test the landing pages, and report every month on
                    cost per lead and cost per signup. We show you which
                    searches bring in pipeline, not just vanity metrics, and
                    move budget based on real results.
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
