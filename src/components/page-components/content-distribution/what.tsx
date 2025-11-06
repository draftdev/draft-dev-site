import Image from 'next/image'

const What = () => {
  return (
    <div className="overflow-hidden bg-white py-14 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
            <div className="mx-auto max-w-4xl sm:max-w-4xl lg:mx-0">
              <h2 className="sm:subheader-gradient subheader-mobile-gradient">
                A content promotion partner with proven results
              </h2>

              <dl className="paragraph-dark mt-6 max-w-xl space-y-8 text-lg lg:max-w-none">
                <div className="relative">
                  <dd className="my-2">
                    Most developer marketing teams struggle with the same challenge: developers use ad blockers at 3x the average rate, ignore banner ads and traditional PPC campaigns, and are deeply skeptical of marketing messages. But they actively seek valuable content in newsletters, communities, and publications they trust.
                    </dd>
                  </div>
                  <div className="relative">
                    <dd className="my-2">
                    Unlike generic marketing agencies, we know which channels deliver quality traffic and which content formats resonate with technical audiences. We've tested dozens of platforms and only recommend those with proven ROI for developer-focused companies. We analyze promotion and distribution performance, providing actionable insights about what's driving engagement and pipeline, not just vanity metrics.
                  </dd>
                </div>
                <div className="relative">
                  <dd className="my-2">
                    After delivering your content pieces, we create social media posts, create variations for syndication platforms, and book sponsorships and promotions in relevant niche publications. This ensures you get the most out of every single content asset we create for you.
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
