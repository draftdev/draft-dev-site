'use client'

import {
  AcademicCapIcon,
  ArrowPathIcon,
  ArrowRightIcon,
  BookOpenIcon,
  ChartBarIcon,
  ChartBarSquareIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentCheckIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CpuChipIcon,
  CurrencyDollarIcon,
  CursorArrowRaysIcon,
  DocumentCheckIcon,
  FunnelIcon,
  IdentificationIcon,
  MagnifyingGlassIcon,
  MapIcon,
  MegaphoneIcon,
  NewspaperIcon,
  PencilSquareIcon,
  PlayCircleIcon,
  PresentationChartLineIcon,
  RocketLaunchIcon,
  ShareIcon,
  SparklesIcon,
  Squares2X2Icon,
  UserGroupIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import { relatedLinks } from './data'

const copy = {
  services: {
    title: 'Related Services',
    subtitle: 'We also help developer tool companies with:',
  },
  caseStudies: {
    title: 'Related Case Studies',
    subtitle: 'See how we helped other developer tool companies:',
  },
}

// One icon per linked page; case studies share one
const icons: Record<string, typeof ArrowRightIcon> = {
  '/content-production': PencilSquareIcon,
  '/content-distribution': ShareIcon,
  '/content-refreshes': ArrowPathIcon,
  '/content-audit-for-devtools': ClipboardDocumentCheckIcon,
  '/content-strategy-services': MapIcon,
  '/blog-posts': NewspaperIcon,
  '/tutorials': AcademicCapIcon,
  '/technical-documentation-for-devtools': BookOpenIcon,
  '/influencer-distribution-for-devtools': UserGroupIcon,
  '/reddit-marketing-for-devtools': ChatBubbleLeftRightIcon,
  '/paid-content-promotion': MegaphoneIcon,
  '/seo-services-for-devtools': MagnifyingGlassIcon,
  '/aeo-geo-services-for-devtools': SparklesIcon,
  '/ai-content-strategy': CpuChipIcon,
  '/video-tutorials': PlayCircleIcon,
  '/video-marketing-for-devtools': VideoCameraIcon,
  '/paid-sponsorships-for-devtools': CurrencyDollarIcon,
  '/ppc-for-devtools': CursorArrowRaysIcon,
  '/capture-leads': FunnelIcon,
  '/demand-generation-for-devtools': ChartBarIcon,
  '/for-dev-rels': CommandLineIcon,
  '/build-trust': IdentificationIcon,
  '/content-types': Squares2X2Icon,
  '/technical-editing-services': DocumentCheckIcon,
  '/for-marketers': PresentationChartLineIcon,
  '/dev-content-strategy': CodeBracketIcon,
  '/drive-awareness': RocketLaunchIcon,
}

const iconFor = (href: string) => {
  const path = new URL(href).pathname
  if (path.startsWith('/case-studies/')) return ChartBarSquareIcon
  return icons[path] ?? ArrowRightIcon
}

// Last block before the footer on pages listed in ./data
const RelatedLinks = () => {
  const pathname = usePathname()
  const entry = relatedLinks[pathname.replace(/\/$/, '') || '/']
  if (!entry) return null

  const { title, subtitle } = copy[entry.kind]
  const links = entry.links.slice(0, 4)

  return (
    <section className="relative isolate overflow-hidden bg-[#f4f1f8] py-12 sm:py-16">
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 -z-10 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="subheader-mobile-gradient sm:subheader-gradient text-center">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-gray-600">
          {subtitle}
        </p>
        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => {
            const Icon = iconFor(link.href)
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group flex h-full items-center gap-x-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#5e5285]/10 transition hover:-translate-y-1 hover:shadow-lg hover:ring-[#5e5285]/30"
                >
                  <span className="bg-gradient-brand flex size-12 shrink-0 items-center justify-center rounded-xl text-white shadow-md">
                    <Icon aria-hidden="true" className="size-6" />
                  </span>
                  <span className="font-code grow text-lg/snug font-semibold text-gray-900">
                    {link.name}
                  </span>
                  <span className="text-secondary flex size-9 shrink-0 items-center justify-center rounded-full bg-[#f4f1f8] transition group-hover:bg-amber-400 group-hover:text-gray-900">
                    <ArrowRightIcon
                      aria-hidden="true"
                      className="size-4 transition group-hover:translate-x-0.5"
                    />
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default RelatedLinks
