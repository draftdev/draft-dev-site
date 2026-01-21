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
  stats?: Array<{
    label: string
    value: string | number
  }>
}

const ServiceHeader: React.FC<ServiceHeaderProps> = ({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  stats,
}) => {
  const statsGridCols =
    stats && stats.length >= 4
      ? 'sm:grid-cols-4'
      : stats && stats.length === 3
        ? 'sm:grid-cols-3'
        : 'sm:grid-cols-2'

  return (
    <div className="bg-gradient-brand py-16">
      <main className="relative isolate">
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 py-2 sm:py-8 lg:px-8">
            <div className="mx-auto max-w-4xl gap-x-12 lg:mx-0 lg:flex lg:items-center">
              <div className="relative w-full lg:shrink-0 xl:max-w-3xl">
                <div className="mt-24 py-3 sm:mt-32 lg:mt-16">
                  <span className="text-primary ring-primary-40 mr-3 rounded-full bg-white px-3 py-1 text-sm font-semibold ring-1 ring-inset">
                    <Link href="/distributing-content-on-social-media" className="">
                      Free Guide
                    </Link>
                  </span>
                  <Link
                    href="/distributing-content-on-social-media"
                    className="inline-flex"
                  >
                    <span className="inline-flex items-center text-sm text-white">
                      Distributing Content on Social Media and Generating Leads from Gated Assets
                    </span>
                  </Link>
                </div>
                <h1 className="sm:header-light font-code mb-6 pb-4 text-3xl font-semibold text-white">
                  {title}
                </h1>
                <p className="sm:paragraph-light pb-6 text-base text-gray-100 sm:pb-0">
                  {description}
                </p>
                <div className="mt-6 flex flex-col items-start gap-x-6 sm:mt-16 sm:flex-row sm:items-center">
                  {primaryCTA && (
                    <Link
                      href={primaryCTA.href}
                      className="focus-visible:outline-primary my-2 rounded-sm px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm ring-2 ring-white hover:bg-white hover:text-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 sm:my-0 sm:text-base"
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
                {stats?.length ? (
                  <dl
                    className={`mt-10 grid grid-cols-2 gap-0.5 overflow-hidden rounded-2xl ${statsGridCols}`}
                  >
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex flex-col bg-white/5 p-6 text-center"
                      >
                        <dt className="text-sm font-semibold text-gray-200">
                          {stat.label}
                        </dt>
                        <dd className="font-code order-first text-2xl font-semibold text-white sm:text-3xl">
                          {stat.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ServiceHeader
