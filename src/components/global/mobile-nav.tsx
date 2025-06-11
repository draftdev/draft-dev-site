'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'
import { memo } from 'react'
import { Link } from './link'

interface NavLink {
  href: string
  label: string
}

interface MobileNavProps {
  links: NavLink[]
}

const MobileNavContent = ({ links }: MobileNavProps) => {
  const router = useRouter()
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith('http')) {
      return
    }
    e.preventDefault()
    router.push(href)
  }

  return (
    <div className="flex flex-col py-2">
      {links.map(({ href, label }) =>
        label === 'Why Us?' ? (
          <Disclosure key={label} as="div" className="border-b border-gray-100">
            {({ open, close: disclosureClose }) => (
              <>
                <DisclosureButton className="flex w-full items-center justify-between px-6 py-3 text-base font-medium text-gray-900 hover:bg-gray-50">
                  <span>{label}</span>
                  <ChevronDownIcon
                    className={`h-5 w-5 text-gray-500 ${
                      open ? 'rotate-180 transform' : ''
                    }`}
                  />
                </DisclosureButton>
                <DisclosurePanel className="pl-4">
                  <div className="border-l border-gray-100 py-2">
                    <div className="pl-4">
                      <h4 className="py-1 text-sm font-medium text-secondary">
                        Use Cases
                      </h4>
                      <Link
                        href="/build-trust"
                        className="flex items-center gap-2 px-6 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        onClick={(e) => {
                          e.preventDefault()
                          disclosureClose()
                          router.push('/build-trust')
                        }}
                      >
                        Build Trust
                      </Link>
                      <Link
                        href="/drive-awareness"
                        className="flex items-center gap-2 px-6 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        onClick={(e) => {
                          e.preventDefault()
                          disclosureClose()
                          router.push('/drive-awareness')
                        }}
                      >
                        Drive Awareness
                      </Link>
                      <Link
                        href="/capture-leads"
                        className="flex items-center gap-2 px-6 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        onClick={(e) => {
                          e.preventDefault()
                          disclosureClose()
                          router.push('/capture-leads')
                        }}
                      >
                        Capture Leads
                      </Link>
                    </div>

                    <div className="mt-2 pl-4">
                      <h4 className="py-1 text-sm font-medium text-secondary">
                        Who We Help
                      </h4>
                      <Link
                        href="/for-marketers"
                        className="flex items-center gap-2 px-6 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        onClick={(e) => {
                          e.preventDefault()
                          disclosureClose()
                          router.push('/for-marketers')
                        }}
                      >
                        For Marketers
                      </Link>
                      <Link
                        href="/for-dev-rels"
                        className="flex items-center gap-2 px-6 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        onClick={(e) => {
                          e.preventDefault()
                          disclosureClose()
                          router.push('/for-dev-rels')
                        }}
                      >
                        For DevRels
                      </Link>
                    </div>
                  </div>
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        ) : (
          <Link
            key={href}
            href={href}
            className="px-6 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
            onClick={(e) => handleLinkClick(e, href)}
          >
            {label}
          </Link>
        ),
      )}
    </div>
  )
}

export default memo(MobileNavContent)
