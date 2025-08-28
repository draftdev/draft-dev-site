import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

interface ServiceHeaderProps {
  title: string
  description: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
}

const ServiceHeader: React.FC<ServiceHeaderProps> = ({
  title,
  description,
  primaryCTA,
  secondaryCTA,
}) => {
  return (
    <div className="bg-gradient-brand">
      <main className="relative isolate">
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
            <div className="mx-auto max-w-4xl gap-x-12 lg:mx-0 lg:flex lg:items-center">
              <div className="relative w-full lg:shrink-0 xl:max-w-3xl">
                <div className="py-3">
                  <span className="text-primary ring-primary-40 mr-3 rounded-full bg-white px-3 py-1 text-sm font-semibold ring-1 ring-inset">
                    <Link href="/resources" className="">
                      Free eBook
                    </Link>
                  </span>
                  <Link
                    href="/content-marketing-engine"
                    className="inline-flex"
                  >
                    <span className="inline-flex items-center text-sm text-white">
                      How to Start a Content Marketing Engine
                      <ChevronRightIcon
                        aria-hidden="true"
                        className="size-5 text-gray-400"
                      />
                    </span>
                  </Link>
                </div>
                <h1 className="header-light font-code text-3xl font-semibold text-white sm:text-5xl">
                  {title}
                </h1>
                <p className="sm:paragraph-light mt-4 text-base text-gray-100">
                  {description}
                </p>
                <div className="mt-6 flex flex-col items-start gap-x-6 sm:mt-16 sm:flex-row sm:items-center">
                  {primaryCTA && (
                    <Link
                      href={primaryCTA.href}
                      className="focus-visible:outline-primary my-2 rounded-sm px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm ring-2 ring-white hover:bg-white hover:text-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:my-0 sm:text-base"
                    >
                      {primaryCTA.text}
                    </Link>
                  )}
                  {secondaryCTA && (
                    <Link
                      href={secondaryCTA.href}
                      className="my-2 text-sm font-semibold text-white hover:text-gray-200 sm:my-0 sm:text-base"
                    >
                      {secondaryCTA.text} <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ServiceHeader
