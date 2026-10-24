import Image from 'next/image'
import Link from 'next/link'

interface CaseStudyProps {
  title: string
  summary: string
  stats: { value: string; label: string }[]
  href: string
  image: { src: string; alt: string }
}

const CaseStudy = ({ title, summary, stats, href, image }: CaseStudyProps) => {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="bg-gradient-brand overflow-hidden rounded-4xl shadow-xl lg:grid lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="p-8 sm:p-12">
            <p className="font-code text-sm font-semibold tracking-widest text-amber-300 uppercase">
              Case Study
            </p>
            <h2 className="font-code mt-4 text-2xl leading-tight font-semibold text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-gray-100">{summary}</p>

            <dl
              className={`mt-8 grid grid-cols-1 gap-4 ${
                stats.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-3'
              }`}
            >
              {stats.map((stat) => (
                <div
                  key={stat.value}
                  className="flex flex-col-reverse justify-end gap-y-1 rounded-2xl bg-white/10 p-5 ring-1 ring-white/15"
                >
                  <dt className="text-sm text-gray-200">{stat.label}</dt>
                  <dd className="font-code text-3xl font-semibold text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <Link
                href={href}
                className="rounded-md bg-amber-400 px-6 py-3.5 text-base font-semibold text-gray-900 shadow-lg shadow-black/20 transition hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 sm:text-lg"
              >
                Read the full case study
              </Link>
              <Link
                href="/case-studies"
                className="py-2 text-base font-semibold text-white hover:text-gray-200 sm:text-lg"
              >
                View other case studies <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <Image
              alt={image.alt}
              src={image.src}
              fill
              sizes="360px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudy
