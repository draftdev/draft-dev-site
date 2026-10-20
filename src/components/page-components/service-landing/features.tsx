import Link from 'next/link'

interface Feature {
  title: string
  description: string
  linkText: string
  linkHref: string
}

interface FeaturesProps {
  title: string
  subtitle: string
  features: Feature[]
}

// Same layout as the shared Why section, with tighter vertical spacing and
// real H3 headings for each feature.
const Features = ({ title, subtitle, features }: FeaturesProps) => {
  return (
    <section className="overflow-hidden bg-white pt-12 pb-12 sm:pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:text-center">
          <h2 className="subheader-mobile-gradient sm:subheader-gradient">
            {title}
          </h2>
          <p className="sm:paragraph-dark py-3 text-lg text-gray-600">
            {subtitle}
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-14 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            // On desktop each feature spans three shared rows (subgrid), so
            // paragraphs and links line up even when one title wraps
            <div
              key={feature.title}
              className="flex flex-col lg:row-span-3 lg:grid lg:grid-rows-subgrid lg:gap-y-0"
            >
              <h3 className="text-secondary font-code text-xl font-semibold sm:text-2xl">
                {feature.title}
              </h3>
              <p className="mt-4 flex-auto text-base text-gray-600 sm:text-lg">
                {feature.description}
              </p>
              <p className="mt-4">
                <Link
                  href={feature.linkHref}
                  className="text-gradient-3 inline-block py-2 text-base font-semibold hover:text-gray-700"
                >
                  {feature.linkText}
                  <span aria-hidden="true"> →</span>
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
