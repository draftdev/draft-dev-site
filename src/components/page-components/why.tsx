import Link from 'next/link'
import React from 'react'

interface Feature {
  title: string
  description?: string
  linkText: string
  linkHref: string
}

interface WhyProps {
  title: string
  subtitle?: string
  subtitleBold?: string
  features: Feature[]
  className?: string
}

const Why: React.FC<WhyProps> = ({
  title,
  subtitle,
  subtitleBold,
  features,
  className = '',
}) => {
  return (
    <div className="overflow-hidden bg-white py-14 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:max-w-4xl lg:text-center">
          <h2 className="subheader-mobile-gradient sm:subheader-gradient">
            {title}
          </h2>

          {(subtitle || subtitleBold) && (
            <h3 className="sm:paragraph-dark py-3 text-lg text-gray-600">
              {subtitle}
              {subtitleBold && (
                <span className="sm:lead-dark font-semibold">
                  {subtitle && <br />}
                  {subtitleBold}
                </span>
              )}
            </h3>
          )}
        </div>
        <div className="mx-auto mt-10 max-w-4xl sm:mt-16 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col">
                <dt className="text-secondary flex items-center gap-x-3 text-lg font-semibold">
                  {feature.title}
                </dt>
                <dd className="mt-2 flex flex-auto flex-col text-base sm:text-lg">
                  {feature.description && (
                    <p className="my-0 flex-auto sm:my-2">
                      {feature.description}
                    </p>
                  )}
                  <p className={feature.description ? 'mt-4' : 'mt-2'}>
                    <Link
                      href={feature.linkHref}
                      className="text-gradient-3 text-base font-semibold hover:text-gray-700"
                    >
                      {feature.linkText}
                      <span aria-hidden="true"> →</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Why
