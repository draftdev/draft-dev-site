import React from 'react'

interface MedHeaderProps {
  title: string
  descriptionOne: string
  descriptionTwo: string
}

export const MedHeader: React.FC<MedHeaderProps> = ({
  title,
  descriptionOne,
  descriptionTwo,
}) => {
  return (
    <div className="bg-gradient-brand pt-16">
      <main className="relative isolate pb-12">
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl"
        />
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 py-6 sm:pt-16 lg:px-8">
            <div className="m-auto max-w-3xl items-center gap-x-12 lg:mx-0 lg:flex">
              <div className="relative lg:shrink-0">
                <h1 className="sm:header-light font-code mb-6 text-3xl font-semibold text-white sm:text-5xl">
                  {title}
                </h1>
                <div className="max-w-4xl">
                  <p className="sm:paragraph-light text-base text-gray-100 sm:text-lg">
                    {descriptionOne}
                  </p>
                  <p className="sm:paragraph-light mt-4 text-base font-semibold text-gray-100 sm:text-lg">
                    {descriptionTwo}
                  </p>
                </div>
                <div className="flex flex-col items-start gap-x-6 sm:mt-16 sm:flex-row sm:items-center"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
