import Image from 'next/image'
import FormDistributingContent from './vendors/hubspot/form-distributing-content-on-social-media'

const ServiceInfo = () => {
  return (
    <div className="overflow-hidden bg-white py-14 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="lg:pt-4 lg:pr-4">
            <div className="mx-auto max-w-4xl sm:max-w-4xl">
              <h1 className="sm:subheader-gradient subheader-mobile-gradient px-8">
                Distributing Content on Social Media and Generating Leads from
                Gated Assets
              </h1>
              <FormDistributingContent />
            </div>
          </div>

          <div className="hidden lg:ml-auto lg:block">
            <div className="rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
              <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline-1 -outline-offset-1 outline-black/10">
                  <Image
                    alt="This document will walk through a simple framework on how to utilize existing assets."
                    src="/site/med-portrait/distributing_content_thumb.jpg"
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
