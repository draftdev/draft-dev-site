import Image from 'next/image'

const Partner = () => {
  return (
    <div className="overflow-hidden bg-white py-14 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
            <div className="mx-auto max-w-4xl sm:max-w-4xl lg:mx-0">
              <h2 className="sm:subheader-gradient subheader-mobile-gradient">
                A distribution partner that understands technical audiences
              </h2>

              <dl className="paragraph-dark mt-6 max-w-xl space-y-8 text-lg lg:max-w-none">
                <div className="relative">
                  <dd className="my-2">
                    Many developer marketing teams reach the same point. They
                    have great content, but not enough people see it.
                    Developers use ad blockers 3x more than average, ignore
                    banner ads, and don't trust marketing messages. But they
                    will watch a long video from a creator they trust, and they
                    take that creator's recommendations seriously.
                  </dd>
                </div>
                <div className="relative">
                  <dd className="my-2">
                    Some influencer platforms sell reach by the thousand. We
                    don't. We pick creators for technical credibility and only
                    recommend those whose audience matches your buyers. Our
                    approach focuses on authenticity and value, avoiding the
                    marketing speak that developers immediately tune out. We've
                    tested dozens of channels and only recommend the ones with
                    proven results for developer-focused companies.
                  </dd>
                </div>
                <div className="relative">
                  <dd className="my-2">
                    Once you approve the list of creators, we handle outreach,
                    negotiation, briefs and scheduling. Every month we show you
                    what each partnership produced and which creators are
                    driving pipeline, not just vanity metrics. Then we update
                    the list based on real results.
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
