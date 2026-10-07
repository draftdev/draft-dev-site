import Image from 'next/image'

const Partner = () => {
  return (
    <div className="overflow-hidden bg-white py-14 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
            <div className="mx-auto max-w-4xl sm:max-w-4xl lg:mx-0">
              <h2 className="sm:subheader-gradient subheader-mobile-gradient">
                A distribution partner that understands technical communities
              </h2>

              <dl className="paragraph-dark mt-6 max-w-xl space-y-8 text-lg lg:max-w-none">
                <div className="relative">
                  <dd className="my-2">
                    Many developer marketing teams have the same problem with
                    Reddit. People are talking about their category there, and
                    those threads often rank above their own website. But
                    developers use ad blockers 3x more than average, they don't
                    trust marketing messages, and subreddits quickly remove
                    anything that looks like promotion. So most teams stay out,
                    even though these threads often show up in Google and AI
                    answers.
                  </dd>
                </div>
                <div className="relative">
                  <dd className="my-2">
                    Some agencies sell upvotes and post lots of comments. We
                    don't. We follow each subreddit's rules and write like a
                    helpful engineer, not a marketer. Our vetted writers only
                    comment where they can actually answer the question.
                  </dd>
                </div>
                <div className="relative">
                  <dd className="my-2">
                    Once you approve the list of threads, we post the comments
                    and keep an eye on how each thread performs. Every month we
                    show you which threads are helping people find you, not
                    just vanity metrics, and we update the list based on real
                    results.
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
