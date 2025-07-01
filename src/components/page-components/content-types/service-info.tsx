import Image from 'next/image'

const ServiceInfo = () => {
  return (
    <div className="overflow-hidden bg-white py-14 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto sm:max-w-5xl lg:mx-0">
              <h2 className="subheader-mobile-gradient sm:subheader-gradient">
                Why use different types of content?
              </h2>
              <div className="paragraph-dark py-6 text-xl">
                <p className="pb-2">
                  The most effective developer marketing strategies combine
                  multiple content types to address different stages of the
                  developer journey. Tutorials and guides build awareness and
                  trust, while comparisons and persuasive pieces drive
                  consideration and decisions.
                </p>
              </div>

              <h3 className="subheader-mobile-gradient sm:lead-gradient mt-8">
                Creating the Right Content Mix
              </h3>
              <div className="paragraph-dark text-xl">
                <p className="">
                  At Draft.dev, we help you create the optimal mix of technical
                  content to engage your audience at every stage of their
                  journey.
                </p>
              </div>

              <p className="lead-dark py-6 text-xl">
                <strong>Check out the examples below</strong> to see how
                different content types work together to create a comprehensive
                developer marketing strategy. The right column contains links to
                content we've produced for our clients.
              </p>
            </div>
          </div>

          <div className="hidden lg:ml-auto lg:block">
            <div className="rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
              <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                  <Image
                    alt="coding"
                    src="/site/med-portrait/coding_draft_dev.jpg"
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
