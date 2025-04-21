import FormNewsletter from '../vendors/hubspot/form-newsletter'

const ServiceInfo = () => {
  return (
    <div className="overflow-hidden bg-white py-14 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="sm:subheader-gradient subheader-mobile-gradient mb-8">
            Draft.dev Newsletter
          </h1>
          <h3 className="paragraph-dark">
            Resources, tips, and case studies to help you reach developers.
            Delivered to your inbox every month.
          </h3>
          <FormNewsletter />
        </div>
      </div>
    </div>
  )
}

export default ServiceInfo
