// src/components/page-components/mega-guide/Navigation.tsx
'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { NAV_GROUPS } from './nav-data'
import type { Section } from './types'

function NavLink({
  href,
  children,
  active = false,
  isAnchor = false,
}: {
  href: string
  children: React.ReactNode
  active?: boolean
  isAnchor?: boolean
}) {
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={clsx(
        'flex justify-between gap-2 py-1 pr-3 text-sm transition',
        isAnchor ? 'pl-7' : 'pl-4',
        active
          ? 'font-semibold text-gray-900'
          : 'text-gray-600 hover:text-gray-900',
      )}
    >
      <span className="truncate">{children}</span>
    </Link>
  )
}

function normalizePath(p: string) {
  return (p ?? '').replace(/\/+$/, '')
}

export function Navigation({
  className,
  basePath,
  pathname: rawPathname,
  allSections,
}: {
  className?: string
  basePath: string
  pathname: string | null | undefined
  allSections?: Record<string, Array<Section>> // <-- make optional
}) {
  const pathname = normalizePath(rawPathname ?? '')
  const base = normalizePath(basePath ?? '')
  const sectionsMap = allSections ?? {} // <-- defensive default

  return (
    <nav className={className} aria-label="Guide navigation">
      <ul role="list">
        {NAV_GROUPS.map((group, groupIndex) => {
          const isActiveGroup = group.links.some(
            (l) =>
              pathname === `${base}${l.slug}` ||
              pathname.startsWith(`${base}${l.slug}#`),
          )

          return (
            <li
              key={group.title}
              className={clsx('relative', groupIndex === 0 ? '' : 'mt-6')}
            >
              <h2 className="text-xs font-semibold text-gray-700">
                {group.title}
              </h2>
              <div className="relative mt-3 pl-2">
                <div
                  className="absolute inset-y-0 left-2 w-px bg-gray-200"
                  aria-hidden
                />
                <ul role="list" className="border-l border-transparent">
                  {group.links.map((link) => {
                    const href = `${base}${link.slug}`
                    const active = pathname === href
                    const key = normalizePath(href)
                    const sections = sectionsMap[key] ?? []
                    return (
                      <li key={href} className="relative">
                        <NavLink href={href} active={active}>
                          {link.name}
                        </NavLink>
                        {active && sections.length > 0 && (
                          <ul>
                            {sections.map((section) => (
                              <li key={section.id}>
                                <NavLink
                                  href={`${href}#${section.id}`}
                                  isAnchor
                                >
                                  {section.title}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
