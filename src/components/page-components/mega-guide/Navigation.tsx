// src/components/page-components/mega-guide/Navigation.tsx
'use client'

import clsx from 'clsx'
import { AnimatePresence, motion, useIsPresent } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef } from 'react'
import { remToPx } from './remToPx'
import { useSectionStore } from './section-provider'
import { Tag } from './Tag'

type NavLinkItem = { title: string; slug: string }
interface NavGroup {
  title: string
  links: NavLinkItem[]
}

export const NAV: NavGroup[] = [
  {
    title: 'Foundations & Setup',
    links: [
      { title: 'Foundations', slug: '' },
      {
        title: 'Setting Up Your Engine',
        slug: '/setting-up-your-technical-content-marketing-engine',
      },
    ],
  },
  {
    title: 'Planning & Production',
    links: [
      {
        title: 'Content Calendars',
        slug: '/creating-and-managing-content-calendars',
      },
      {
        title: 'Evergreen Content',
        slug: '/creating-evergreen-content-that-drives-traffic',
      },
      { title: 'Spiky Content', slug: '/creating-viral-spiky-content' },
      {
        title: 'Orchestrating Through the Funnel',
        slug: '/orchestrating-technical-content-through-the-funnel',
      },
      { title: 'Gated Assets', slug: '/creating-gated-assets-that-convert' },
    ],
  },
  {
    title: 'Distribution',
    links: [
      {
        title: 'Newsletter Sponsorships & Syndication',
        slug: '/newsletter-sponsorships-and-content-syndication',
      },
      {
        title: 'Social Distribution Playbooks',
        slug: '/technical-content-distribution-and-promotion-across-social-channels',
      },
    ],
  },
]

function useInitialValue<T>(value: T, condition = true) {
  const initialValue = useRef(value).current
  return condition ? initialValue : value
}

function NavLinkEl({
  href,
  children,
  tag,
  active = false,
  isAnchorLink = false,
}: {
  href: string
  children: React.ReactNode
  tag?: string
  active?: boolean
  isAnchorLink?: boolean
}) {
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={clsx(
        'flex justify-between gap-2 py-1 pr-3 text-sm transition',
        isAnchorLink ? 'pl-7' : 'pl-4',
        active ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900',
      )}
    >
      <span className="truncate">{children}</span>
      {tag && (
        <Tag variant="small" color="zinc">
          {tag}
        </Tag>
      )}
    </Link>
  )
}

function VisibleSectionHighlight({
  group,
  pathname,
}: {
  group: NavGroup
  pathname: string
}) {
  const [sections, visibleSections] = useInitialValue([
    useSectionStore((s) => s.sections),
    useSectionStore((s) => s.visibleSections),
  ])
  const isPresent = useIsPresent()
  const firstVisibleIndex = Math.max(
    0,
    [{ id: '_top' }, ...sections].findIndex((s) => s.id === visibleSections[0]),
  )
  const itemH = remToPx(2)
  const height = isPresent ? Math.max(1, visibleSections.length) * itemH : itemH
  const activeIndex = group.links.findIndex((l) =>
    l.slug === '' ? pathname === '' : pathname.endsWith(l.slug),
  )
  const top = activeIndex * itemH + firstVisibleIndex * itemH

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0 }}
      className="absolute inset-x-0 top-0 rounded-md bg-gray-900/5 will-change-transform"
      style={{ height, top }}
    />
  )
}

function ActivePageMarker({
  group,
  pathname,
}: {
  group: NavGroup
  pathname: string
}) {
  const itemH = remToPx(2)
  const offset = remToPx(0.25)
  const activeIndex = group.links.findIndex((l) =>
    l.slug === '' ? pathname === '' : pathname.endsWith(l.slug),
  )
  const top = offset + activeIndex * itemH
  return (
    <motion.div
      layout
      className="absolute left-2 h-6 w-px"
      style={{ top, backgroundColor: 'var(--color-primary)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0 }}
    />
  )
}

export function Navigation({
  className,
  basePath,
}: {
  className?: string
  basePath: string
}) {
  const pathname = (usePathname() || '').replace(/\/+$/, '')
  const localPath = pathname.replace(basePath, '')

  return (
    <nav className={className} aria-label="Guide navigation">
      <ul role="list">
        {NAV.map((group, groupIndex) => {
          const isActiveGroup = group.links.some(
            (l) =>
              pathname === `${basePath}${l.slug}` ||
              pathname.startsWith(`${basePath}${l.slug}#`),
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
                <AnimatePresence initial={false}>
                  {isActiveGroup && (
                    <VisibleSectionHighlight
                      group={group}
                      pathname={localPath}
                    />
                  )}
                </AnimatePresence>

                <motion.div
                  layout
                  className="absolute inset-y-0 left-2 w-px bg-gray-200"
                />

                <AnimatePresence initial={false}>
                  {isActiveGroup && (
                    <ActivePageMarker group={group} pathname={localPath} />
                  )}
                </AnimatePresence>

                <ul role="list" className="border-l border-transparent">
                  {group.links.map((link) => {
                    const href = `${basePath}${link.slug}`
                    const active = pathname === href
                    return (
                      <motion.li
                        key={href}
                        layout="position"
                        className="relative"
                      >
                        <NavLinkEl href={href} active={active}>
                          {link.title}
                        </NavLinkEl>

                        {active && (
                          <ul>
                            {useSectionStore((s) => s.sections).map(
                              (section) => (
                                <li key={section.id}>
                                  <NavLinkEl
                                    href={`${href}#${section.id}`}
                                    tag={section.tag}
                                    isAnchorLink
                                  >
                                    {section.title}
                                  </NavLinkEl>
                                </li>
                              ),
                            )}
                          </ul>
                        )}
                      </motion.li>
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
