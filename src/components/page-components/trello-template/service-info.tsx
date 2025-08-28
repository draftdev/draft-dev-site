import Image from 'next/image'
import FormTrello from '../vendors/hubspot/form-trello-template'

const ServiceInfo = () => {
  return (
    <div className="overflow-hidden bg-white py-14 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="lg:px-0 lg:pt-4 lg:pr-4">
            <div className="mx-auto max-w-4xl sm:max-w-4xl lg:mx-0">
              <h1 className="subheader-mobile-gradient px-8 text-2xl sm:text-4xl">
                The Trello Content Calendar Template
              </h1>
              <FormTrello />
            </div>
          </div>

          <div className="hidden lg:ml-auto lg:block">
            <Image
              alt="trello content calendar template"
              src="/site/med-portrait/trello_overview.png"
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
