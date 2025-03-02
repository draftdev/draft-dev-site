'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
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
  return (
    <div className="flex flex-col py-2">
      {links.map(({ href, label }) =>
        label === 'Why Us?' ? (
          <Disclosure key={label} as="div" className="border-b border-gray-100">
            {({ open }) => (
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
                        href="/drive-awareness"
                        className="flex items-center gap-2 px-6 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        Drive Awareness
                      </Link>
                      <Link
                        href="/capture-leads"
                        className="flex items-center gap-2 px-6 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        Capture Leads
                      </Link>
                      <Link
                        href="/build-trust"
                        className="flex items-center gap-2 px-6 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        Build Trust
                      </Link>
                    </div>

                    <div className="mt-2 pl-4">
                      <h4 className="py-1 text-sm font-medium text-secondary">
                        Who We Help
                      </h4>
                      <Link
                        href="/for-marketers"
                        className="flex items-center gap-2 px-6 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        For Marketers
                      </Link>
                      <Link
                        href="/for-dev-rels"
                        className="flex items-center gap-2 px-6 py-2 text-sm text-gray-700 hover:bg-gray-50"
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
          >
            {label}
          </Link>
        ),
      )}
    </div>
  )
}

export default memo(MobileNavContent)
