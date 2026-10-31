'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import clsx from 'clsx'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { memo, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link } from '../link'

// ⬇️ Adjust this import to your actual banner component
import Banner from '@/components/media/banner'

import MobileNavContent from './mobile-nav-content'
import ResourcesPopover from './resources-popover'
import ServicesPopover from './services-popover'

// Used for the spacer until the header is measured on the client (and for SSR).
const FALLBACK_NAV_HEIGHT = 120

// Past this scroll depth the header compacts: the banner slides away and the
// logo row shrinks, so less of the page sits under the fixed header.
const COMPACT_AFTER_PX = 24

const NAVIGATION_CONFIG = {
  links: [
    { href: '/services', label: 'Services' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/resources', label: 'Resources' },

    /* { href: './#pricing', label: 'Pricing' }, */

    /* { href: '/resources', label: 'Resources' }, */
    { href: '/about', label: 'Company' },
    { href: '/call', label: 'Book Discovery Call' },
  ],
}

const STYLES = {
  linkBase:
    'text-sm md:text-base lg:text-base xl:text-lg font-medium transition-colors duration-200',
  textColor: 'text-gray-700 hover:text-gray-900',
}
function HamburgerIconInline({
  className = 'h-5 w-5',
}: {
  className?: string
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function CloseIconInline({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M6 18L18 6" />
    </svg>
  )
}

function DynamicNavbar() {
  const pathname = usePathname()
  const [isResourcesOpen, setisResourcesOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  // Measure the fixed header (banner + logo row) so the spacer below it always
  // matches. The mobile drawer is deliberately excluded — it overlays content
  // instead of pushing it down.
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const bannerRef = useRef<HTMLDivElement | null>(null)
  const navRowRef = useRef<HTMLDivElement | null>(null)
  const [fixedBlockHeight, setFixedBlockHeight] = useState(FALLBACK_NAV_HEIGHT)
  const [compact, setCompact] = useState(false)
  const compactRef = useRef(false)
  // When the header last changed size; measuring mid-animation would be wrong
  const lastToggleRef = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > COMPACT_AFTER_PX
      if (next !== compactRef.current) {
        compactRef.current = next
        lastToggleRef.current = Date.now()
        setCompact(next)
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useLayoutEffect(() => {
    const measure = () => {
      // Keep the spacer at the full header height. Measuring the compact
      // header would shrink the spacer and make the page jump.
      if (compactRef.current) return
      if (Date.now() - lastToggleRef.current < 400) {
        window.setTimeout(measure, 400)
        return
      }
      // scrollHeight is the banner's natural height, even while it animates
      const banner = bannerRef.current?.scrollHeight ?? 0
      const row = navRowRef.current?.getBoundingClientRect().height ?? 0
      if (row) setFixedBlockHeight(Math.round(banner + row))
    }
    measure()

    const ro = new ResizeObserver(measure)
    if (bannerRef.current) ro.observe(bannerRef.current)
    if (navRowRef.current) ro.observe(navRowRef.current)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])

  // Close popovers on route changes
  useEffect(() => {
    setisResourcesOpen(false)
    setIsServicesOpen(false)
  }, [pathname])

  // Close Why Us popover when clicking outside
  useEffect(() => {
    if (!isResourcesOpen) return
    const handleClickOutside = (event: MouseEvent) => {
      const pop = document.getElementById('resources-popover')
      const btn = document.getElementById('resources-button')
      if (
        pop &&
        !pop.contains(event.target as Node) &&
        btn &&
        !btn.contains(event.target as Node)
      ) {
        setisResourcesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside as EventListener)
    return () =>
      document.removeEventListener(
        'mousedown',
        handleClickOutside as EventListener,
      )
  }, [isResourcesOpen])

  // Close Services popover when clicking outside
  useEffect(() => {
    if (!isServicesOpen) return
    const handleClickOutside = (event: MouseEvent) => {
      const pop = document.getElementById('services-popover')
      const btn = document.getElementById('services-button')
      if (
        pop &&
        !pop.contains(event.target as Node) &&
        btn &&
        !btn.contains(event.target as Node)
      ) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside as EventListener)
    return () =>
      document.removeEventListener(
        'mousedown',
        handleClickOutside as EventListener,
      )
  }, [isServicesOpen])

  const DesktopNav = memo(() => (
    <nav
      className={`hidden items-center justify-end space-x-1 md:space-x-2 lg:flex lg:space-x-3 ${STYLES.textColor}`}
    >
      {NAVIGATION_CONFIG.links.map(({ href, label }) =>
        label === 'Resources' ? (
          <ResourcesPopover
            key={label}
            open={isResourcesOpen}
            onToggle={() => {
              setisResourcesOpen((v) => !v)
              setIsServicesOpen(false)
            }}
            onClose={() => setisResourcesOpen(false)}
          />
        ) : label === 'Services' ? (
          <ServicesPopover
            key={label}
            open={isServicesOpen}
            onToggle={() => {
              setIsServicesOpen((v) => !v)
              setisResourcesOpen(false)
            }}
            onClose={() => setIsServicesOpen(false)}
          />
        ) : (
          <Link
            key={href}
            href={href}
            className={`px-1 pt-1 whitespace-nowrap md:px-2 lg:px-3 xl:px-4 ${STYLES.linkBase} ${STYLES.textColor}`}
          >
            {label}
          </Link>
        ),
      )}
    </nav>
  ))
  DesktopNav.displayName = 'DesktopNav'

  return (
    <>
      <div
        ref={wrapperRef}
        className={clsx(
          'fixed inset-x-0 top-0 z-50 border-b border-black/5 transition-[background-color,box-shadow] duration-300',
          compact
            ? 'bg-white shadow-sm'
            : 'bg-white/90 backdrop-blur hover:bg-white supports-backdrop-filter:bg-white/70',
        )}
      >
        {/* Banner collapses to zero height once the page is scrolled */}
        <div
          className={clsx(
            'grid transition-[grid-template-rows] duration-300',
            compact ? 'grid-rows-[0fr]' : 'grid-rows-[1fr]',
          )}
        >
          <div ref={bannerRef} className="overflow-hidden">
            <Banner
              text="Download the AEO & GEO Guide for DevTools - What AEO & GEO actually mean for developer marketing →"
              link="https://draft.dev/aeo-geo-for-devtools"
            />
          </div>
        </div>

        <header>
          <Disclosure as="div" className="w-full">
            {({ open, close }) => (
              <>
                <div className="mx-auto max-w-7xl px-2">
                  <div
                    ref={navRowRef}
                    className={clsx(
                      'flex items-center justify-between transition-[padding] duration-300',
                      compact ? 'py-2' : 'py-4 sm:py-6',
                    )}
                  >
                    {/* Logo */}
                    <div className="flex items-center">
                      <Link href="/" title="Home">
                        <Image
                          src="/draft/logos/draftlogo_main_filled.svg"
                          alt="Draft.dev"
                          width={160}
                          height={64}
                          priority
                          fetchPriority="high"
                          className={clsx(
                            'h-auto w-auto transition-[max-height] duration-300',
                            compact ? 'max-h-[36px]' : 'max-h-[45px]',
                          )}
                        />
                      </Link>
                    </div>

                    {/* Desktop nav */}
                    <DesktopNav />

                    {/* Mobile toggle */}
                    <DisclosureButton
                      className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 lg:hidden"
                      aria-label={open ? 'Close main menu' : 'Open main menu'}
                    >
                      <span className="sr-only">
                        {open ? 'Close main menu' : 'Open main menu'}
                      </span>
                      {open ? <CloseIconInline /> : <HamburgerIconInline />}
                    </DisclosureButton>
                  </div>

                  {/* Mobile drawer */}
                  <DisclosurePanel className="bg-white shadow-sm lg:hidden">
                    <MobileNavContent
                      links={NAVIGATION_CONFIG.links}
                      onNavigate={close}
                    />
                  </DisclosurePanel>
                </div>
              </>
            )}
          </Disclosure>
        </header>
      </div>

      <div aria-hidden="true" style={{ height: fixedBlockHeight }} />
    </>
  )
}

export default memo(DynamicNavbar)
