import Image from 'next/image'

const Partner = () => {
  return (
    <div className="overflow-hidden bg-white py-14 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
            <div className="mx-auto max-w-4xl sm:max-w-4xl lg:mx-0">
              <h2 className="sm:subheader-gradient subheader-mobile-gradient">
                An AI search partner with measurable results
              </h2>

              <dl className="paragraph-dark mt-6 max-w-xl space-y-8 text-lg lg:max-w-none">
                <div className="relative">
                  <dd className="my-2">
                    Developers increasingly ask an AI assistant before they
                    open a search tab, and most developer marketing teams can't
                    tell whether that answer names their product or a
                    competitor's. A page can rank well on Google and still
                    never be cited.
                  </dd>
                </div>
                <div className="relative">
                  <dd className="my-2">
                    Unlike agencies that simply renamed SEO as GEO, we treat it
                    as two jobs: making your own pages easy for LLMs to quote,
                    and earning mentions on the third-party sources they trust.
                    Both need vetted writers who know your category, because
                    developers, and the AI tools they use, ignore generic
                    content.
                  </dd>
                </div>
                <div className="relative">
                  <dd className="my-2">
                    After the roadmap is approved, we create and publish
                    citation-ready content and earn mentions on the sources AI
                    tools trust. In monthly analytics reviews we track your AI
                    mentions and citations alongside traffic and leads, and
                    adjust the roadmap based on what is actually earning
                    citations.
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
