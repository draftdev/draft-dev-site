import Image from 'next/image'

const ServiceInfo = () => {
  return (
    <div className="overflow-hidden bg-white py-14 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto sm:max-w-5xl lg:mx-0">
              <h2 className="subheader-mobile-gradient sm:subheader-gradient">
                Why Tutorials?
              </h2>
              <div className="paragraph-dark py-6 text-xl">
                <p className="pb-2">
                  Tutorials provide a step-by-step explanation for{' '}
                  <strong>why</strong> and <strong>how </strong>
                  readers can accomplish a specific software development task.
                </p>

                <p className="py-2">
                  Software engineers use tutorials every day to help them do
                  their jobs better, so publishing great tutorials will helps
                  you build trust and provide value to your audience.
                </p>

                <p className="pt-2">
                  Tutorials are also great for{' '}
                  <strong>search engine optimization</strong> and
                  <strong> sales enablement</strong>. By showing developers how
                  to use your product, you break down barriers that prevent them
                  from converting into paid customers.
                </p>
              </div>

              <h3 className="subheader-mobile-gradient sm:lead-gradient mt-8">
                What Makes a Great Tutorial?
              </h3>
              <div className="paragraph-dark text-xl">
                <p className="">
                  In order for tutorials to be an effective form of developer
                  marketing, they have to be accurate, helpful, and useful.
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:ml-auto lg:block">
            <div className="rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
              <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                  <Image
                    alt="tutorials"
                    src="/site/med-portrait/tutorials_draft_dev.jpg"
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
