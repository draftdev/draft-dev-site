import FormInquiry from '../vendors/hubspot/form-inquiry'

const ServiceInfo = () => {
  return (
    <div className="overflow-hidden bg-white py-14 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="sm:gap-y-20lg:items-center grid grid-cols-1 gap-x-8 gap-y-16">
          <div className="lg:px-0 lg:pt-4 lg:pr-4">
            <div className="mx-auto max-w-4xl sm:max-w-4xl lg:mx-0">
              <h1 className="sm:subheader-gradient subheader-mobile-gradient px-8">
                Reach out to us
              </h1>
              <FormInquiry />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceInfo
