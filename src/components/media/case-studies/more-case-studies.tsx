import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

type CaseLink = {
  name: string
  role: string
  imageUrl: string
  company: string
  slug: string
}

const moreCaseStudies: CaseLink[] = [
  {
    name: 'Henry Poydar',
    role: 'Founder & CEO',
    imageUrl: '/media/testimonials-lg/henry_poydar_steady_draft_dev.jpg',
    company: 'Status Hero',
    slug: 'status-hero',
  },
  {
    name: 'Rahul Patwardhan',
    role: 'Senior Director, Demand Generation',
    imageUrl: '/media/testimonials-lg/rahul_patwardhan_loft_labs_draft_dev.jpg',
    company: 'Loft Labs',
    slug: 'loft-labs',
  },
  {
    name: 'Adam Gordon Bell',
    role: 'Director of Developer Relations',
    imageUrl: '/media/testimonials-lg/adam_bell_earthly_draft_dev.jpg',
    company: 'Earthly',
    slug: 'earthly',
  },
]

export default function MoreCaseStudies() {
  return (
    <section className="bg-[#f4f1f8] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="subheader-mobile-gradient sm:subheader-gradient">
            More Case Studies
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Hear from real clients to learn how they&apos;ve succeeded with
            Draft.dev.
          </p>
        </div>

        <ul
          role="list"
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {moreCaseStudies.map((client) => (
            <li key={client.slug}>
              <Link
                href={`/case-studies/${client.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white p-2 shadow-sm ring-1 ring-[#5e5285]/10 transition hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Portrait photos: square crop anchored near the top keeps the whole face */}
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={client.imageUrl}
                    alt={`${client.name}'s case study for ${client.company}`}
                    width={400}
                    height={600}
                    className="aspect-square w-full object-cover object-[50%_18%] transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-[#4b3f72]/90 to-transparent"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-x-3 p-5">
                    <p className="font-code text-2xl font-semibold text-white">
                      {client.company}
                    </p>
                    <span className="shrink-0 rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-semibold text-[#5e5285]">
                      Case study
                    </span>
                  </div>
                </div>
                <div className="flex grow flex-col px-4 pt-5 pb-3">
                  <p className="font-semibold text-gray-900">{client.name}</p>
                  <p className="grow text-sm text-gray-600">{client.role}</p>
                  <span className="text-secondary mt-5 flex items-center justify-between rounded-xl bg-[#f4f1f8] px-4 py-3 text-sm font-semibold transition group-hover:bg-amber-400 group-hover:text-gray-900">
                    Read the case study
                    <ArrowRightIcon
                      aria-hidden="true"
                      className="size-4 transition group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
