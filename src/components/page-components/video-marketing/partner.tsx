import Image from 'next/image'

const Partner = () => {
  return (
    <div className="overflow-hidden bg-white py-14 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
            <div className="mx-auto max-w-4xl sm:max-w-4xl lg:mx-0">
              <h2 className="sm:subheader-gradient subheader-mobile-gradient">
                A video partner that understands technical audiences
              </h2>

              <dl className="paragraph-dark mt-6 max-w-xl space-y-8 text-lg lg:max-w-none">
                <div className="relative">
                  <dd className="my-2">
                    Most developer marketing teams know video belongs in the
                    mix, but get stuck on the same two problems. The engineers
                    who could explain the product are busy building it, and a
                    general video production company can make something
                    polished without understanding what it shows. The result is
                    either no video at all, or a video developers close after
                    fifteen seconds.
                  </dd>
                </div>
                <div className="relative">
                  <dd className="my-2">
                    Unlike generic video agencies, we understand that developers
                    trust peer-written content, value technical accuracy over
                    marketing speak, and make decisions based on hands-on
                    experience. Our scripts are written by vetted practitioners
                    who have shipped with the tools they demonstrate, and
                    reviewed by a subject matter expert before production
                    starts. We analyze your industry, competitors, positioning,
                    product features, target audience, and brand voice to
                    ensure authentic output.
                  </dd>
                </div>
                <div className="relative">
                  <dd className="my-2">
                    After the script is approved, we produce and publish the
                    video, then turn the footage into micro-clips and social
                    collateral that extend its reach. In monthly analytics
                    reviews we report on watch time, the pages where video
                    lifts conversion, and which topics are worth filming next,
                    and adjust the roadmap based on real performance data.
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
                    alt="Technical video production."
                    src="/site/med-portrait/video_tutorials_draft_dev.jpg"
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
