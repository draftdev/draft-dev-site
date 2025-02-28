import Image from 'next/image'

const ServiceInfo = () => {
  return (
    <div className="overflow-hidden bg-white py-14 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto sm:max-w-5xl lg:mx-0">
              <h2 className="subheader-mobile-gradient sm:subheader-gradient">
                Why Start a Developer Blog?
              </h2>
              <div className="paragraph-dark py-6 text-xl">
                <p className="pb-2">
                  Marketing to developers can be tricky, but one of the best
                  ways to build trust with them is to give away high-quality
                  content for free. Blog posts, tutorials, and guides can all
                  help you attract new customers and build relationships with
                  existing leads.
                </p>

                <p className="pt-2">
                  A developer blog is also great for search engine optimization,
                  social media engagement, and sales enablement.
                </p>
              </div>

              <h3 className="subheader-mobile-gradient sm:lead-gradient mt-8">
                What Makes Great a Developer Blog?
              </h3>
              <div className="paragraph-dark text-xl">
                <p className="">
                  In short, you have to have to consistently deliver great
                  content over time. For your developer blog to be an effective
                  marketing channel, your content must be accurate, helpful, and
                  useful. Here are some examples of content we've created for
                  our clients' developer blogs:
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:ml-auto lg:block">
            <div className="rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
              <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                  <Image
                    alt="Developer blog"
                    src="/site/med-portrait/sales_draft_dev.jpg"
                    width={400}
                    height={600}
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

export default ServiceInfo
