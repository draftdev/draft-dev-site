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
    <section className="bg-[#f4f1f8] py-12 sm:py-14">
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
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-[#5e5285]/10 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="overflow-hidden">
                  <Image
                    src={client.imageUrl}
                    alt={`${client.name}'s case study for ${client.company}`}
                    width={800}
                    height={800}
                    className="aspect-14/11 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex grow flex-col p-6">
                  <p className="font-code text-secondary text-lg font-semibold">
                    {client.company}
                  </p>
                  <p className="mt-1 font-semibold text-gray-900">
                    {client.name}
                  </p>
                  <p className="grow text-sm text-gray-600">{client.role}</p>
                  <span className="text-secondary mt-5 inline-flex items-center gap-x-1.5 text-sm font-semibold">
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
