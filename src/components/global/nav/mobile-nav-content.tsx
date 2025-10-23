'use client'

import { useRouter } from 'next/navigation'
import React, { memo, useCallback } from 'react'
import { Link } from '../link'

interface NavLink {
  href: string
  label: string
}

interface MobileNavProps {
  links: NavLink[]
  onNavigate?: () => void
}

function ChevronDownIconInline({
  className = 'h-5 w-5',
}: {
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M6 8l4 4 4-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavContent({ links, onNavigate }: MobileNavProps) {
  const router = useRouter()

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href.startsWith('http')) return
      e.preventDefault()
      router.push(href)
      onNavigate?.()
    },
    [router, onNavigate],
  )

/*   const whyUsUseCases = [
    { name: 'Build Trust', href: '/build-trust' },
    { name: 'Drive Awareness', href: '/drive-awareness' },
    { name: 'Capture Leads', href: '/capture-leads' },
  ]
  const whyUsWhoWeHelp = [
    { name: 'For Marketers', href: '/for-marketers' },
    { name: 'For DevRels', href: '/for-dev-rels' },
  ] */

  const servicesUseCases = [
    /* { name: 'Technical eBooks', href: '/learn/technical-ebooks' }, */
    { name: 'Blog Content', href: '/blog-posts' },
    /* { name: 'Content Refreshes', href: '/content-refreshes' },
    { name: 'Video Tutorials', href: '/video-tutorials' }, */
    { name: 'Developer Tutorials', href: '/tutorials' },
    { name: 'Dev Content Strategy', href: '/dev-content-strategy' },
    { name: 'AI Content Strategy', href: '/ai-content-strategy' },
    { name: 'Paid Content Promotion', href: '/paid-content-promotion' },
  ]
/*   const servicesWhoWeHelp = [
    { name: 'Draft.dev vs. Freelancers', href: '/draft-dev-vs-freelancers' },
    { name: 'Draft.dev vs. SEO Agencies', href: '/draft-dev-vs-seo-agency' },
    {
      name: 'Draft.dev vs. AI Gen Content',
      href: '/draft-dev-vs-ai-gen-content',
    },
  ] */

  return (
    <div className="flex flex-col py-2">
      {links.map(({ href, label }) => {
        /* if (label === 'Why Us?') {
          return (
            <details key={label} className="group border-b border-gray-100">
              <summary className="flex w-full cursor-pointer list-none items-center justify-between px-6 py-3 text-base font-medium text-gray-900 hover:bg-gray-50">
                <span>{label}</span>
                <span className="text-gray-500 transition-transform group-open:rotate-180">
                  <ChevronDownIconInline />
                </span>
              </summary>

              <div className="pl-4">
                <div className="border-l border-gray-100 py-2 pl-4">
                  <h4 className="text-secondary py-1 text-sm font-medium">
                    Use Cases
                  </h4>
                  {whyUsUseCases.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-2 px-6 py-2 text-sm text-gray-900 hover:bg-gray-50 hover:text-[color:var(--color-primary)]"
                      onClick={(e) => handleClick(e, item.href)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="border-l border-gray-100 py-2 pl-4">
                  <h4 className="text-secondary py-1 text-sm font-medium">
                    Who We Help
                  </h4>
                  {whyUsWhoWeHelp.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-2 px-6 py-2 text-sm text-gray-900 hover:bg-gray-50 hover:text-[color:var(--color-primary)]"
                      onClick={(e) => handleClick(e, item.href)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </details>
          )
        } */

        if (label === 'Services') {
          return (
            <details key={label} className="group border-b border-gray-100">
              <summary className="flex w-full cursor-pointer list-none items-center justify-between px-6 py-3 text-base font-medium text-gray-900 hover:bg-gray-50">
                <span>{label}</span>
                <span className="text-gray-500 transition-transform group-open:rotate-180">
                  <ChevronDownIconInline />
                </span>
              </summary>

              <div className="pl-4">
                <div className="border-l border-gray-100 py-2 pl-4">
                  <h4 className="text-secondary py-1 text-sm font-medium">
                    Use Cases
                  </h4>
                  {servicesUseCases.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-2 px-6 py-2 text-sm text-gray-900 hover:bg-gray-50 hover:text-[color:var(--color-primary)]"
                      onClick={(e) => handleClick(e, item.href)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="border-l border-gray-100 py-2 pl-4">
                  <h4 className="text-secondary py-1 text-sm font-medium">
                    Compare Us
                  </h4>
{/*                   {servicesWhoWeHelp.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-2 px-6 py-2 text-sm text-gray-900 hover:bg-gray-50 hover:text-[color:var(--color-primary)]"
                      onClick={(e) => handleClick(e, item.href)}
                    >
                      {item.name}
                    </Link>
                  ))} */}
                </div>
              </div>
            </details>
          )
        }

        return (
          <Link
            key={href}
            href={href}
            className="px-6 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-[color:var(--color-primary)]"
            onClick={(e) => handleClick(e, href)}
          >
            {label}
          </Link>
        )
      })}
    </div>
  )
}

export default memo(MobileNavContent)
