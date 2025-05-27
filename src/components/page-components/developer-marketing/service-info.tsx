import Image from 'next/image'
import FormDeveloperMarketing from '../vendors/hubspot/form-developer-marketing'

const ServiceInfo = () => {
  return (
    <div className="overflow-hidden bg-white py-14 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-4xl sm:max-w-4xl lg:mx-0">
              <h1 className="sm:subheader-gradient subheader-mobile-gradient px-8">
                Building and Scaling Developer Marketing
              </h1>
              <h2 className="">
                This guide offers strategies and insights for effectively
                reaching and converting developer audiences through authentic,
                value-driven approaches.
              </h2>
              <FormDeveloperMarketing />
            </div>
          </div>

          <div className="hidden lg:ml-auto lg:block">
            <div className="rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
              <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                  <Image
                    alt="webinars"
                    src="/site/med-portrait/developer_marketing_draft_dev.jpg"
                    width={500}
                    height={650}
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
