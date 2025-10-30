import Image from 'next/image'

const What = () => {
  return (
    <div className="overflow-hidden bg-white py-14 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
            <div className="mx-auto max-w-4xl sm:max-w-4xl lg:mx-0">
              <h2 className="sm:subheader-gradient subheader-mobile-gradient">
                We ensure high impact with minimal lift from your team
              </h2>

              <dl className="paragraph-dark mt-6 max-w-xl space-y-8 text-lg lg:max-w-none">
                <div className="relative">
                  <dd className="my-2">
                    We're built to minimize your team's time investment while maximizing content impact. Within 3 weeks, our engineer-writers and editors deliver your first piece. Your involvement? A kickoff call, quarterly roadmap reviews, and occasional feedback on drafts. We handle everything else.
                    </dd>
                  </div>
                  <div className="relative">
                    <dd className="my-2">
                    You'll get unlimited revisions throughout the engagement, optional CMS publication support, and a full range of content tailored to your funnel: blog posts and tutorials, comparison pages, landing pages, technical product guides, thought leadership, lead magnets, and more.
                  </dd>
                </div>

                <div className="relative">
                  <dd className="my-2">
                    Unlike generic content agencies, we combine comprehensive industry analysis, SEO and AEO research, and decades of market experience with writers who understand that developers trust peer-written content and make decisions based on hands-on experience. Every piece is crafted by seasoned software engineers, growth marketers, and editors who know your space.
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
