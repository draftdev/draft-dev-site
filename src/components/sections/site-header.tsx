'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'

const NAV_LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/resources', label: 'Resources' },
  { href: '/about', label: 'Company' },
]

export default function SiteHeader() {
  return (
    <Disclosure as="header" className="bg-[#544b84]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Draft.dev home" className="flex items-center">
          <Image
            src="/draft/logos/draftlogo_clean_white.svg"
            alt="Draft.dev"
            width={180}
            height={31}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-white/90 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/call"
            className="rounded-full bg-amber-200 px-5 py-2.5 text-base font-semibold text-gray-900 transition hover:bg-amber-100"
          >
            Book Discovery Call
          </Link>
        </nav>

        <DisclosureButton className="group inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden">
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6 group-data-open:hidden"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            className="hidden h-6 w-6 group-data-open:block"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        </DisclosureButton>
      </div>

      <DisclosurePanel className="lg:hidden">
        <div className="space-y-1 border-t border-white/10 px-4 pt-2 pb-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-white/90 hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/call"
            className="mt-2 block rounded-full bg-amber-200 px-5 py-2.5 text-center text-base font-semibold text-gray-900"
          >
            Book Discovery Call
          </Link>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
