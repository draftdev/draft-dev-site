import Image from 'next/image'
import FormAEOandGEO from '../vendors/hubspot/form-aeo-geo'

const ServiceInfo = () => {
  return (
    <div className="overflow-hidden bg-white py-14 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="lg:px-0 lg:pt-4 lg:pr-4">
            <div className="mx-auto max-w-4xl sm:max-w-4xl lg:mx-0">
              <h1 className="sm:subheader-gradient subheader-mobile-gradient px-8">
                Coming Soon: AEO and GEO for DevTools
              </h1>
              <FormAEOandGEO />
            </div>
          </div>

          <div className="hidden lg:ml-auto lg:block">
            <Image
              alt="AEO and GEO for DevTools"
              src="/draft/og/aeo_geo_og_draft_dev.jpg"
              width={500}
              height={650}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceInfo
