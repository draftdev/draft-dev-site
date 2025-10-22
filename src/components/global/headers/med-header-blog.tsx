import React from 'react'

interface MedHeaderBlogProps {
  title: string
  descriptionOne: string
  descriptionTwo: string
}

export const MedHeaderBlog: React.FC<MedHeaderBlogProps> = ({
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
          <div className="mx-auto max-w-7xl px-6 py-2 sm:py-8 lg:px-8">
            <div className="m-auto max-w-2xl items-center gap-x-12 lg:mx-0 lg:flex lg:max-w-none">
              <div className="relative w-full lg:shrink-0 xl:max-w-4xl">
                <h1 className="sm:header-light font-code mb-6 pb-4 text-3xl font-semibold text-white">
                  {title}
                </h1>
                <p className="sm:paragraph-light pb-6 text-base text-gray-100">
                  {descriptionOne}
                </p>
                <p className="sm:paragraph-light text-base font-semibold text-gray-100">
                  {descriptionTwo}
                </p>
                <div className="flex flex-col items-start gap-x-6 sm:mt-16 sm:flex-row sm:items-center"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
