'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { memo, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link } from '../link'

// ⬇️ Adjust this import to your actual banner component
import Banner from '@/components/media/banner'

import MobileNavContent from './mobile-nav-content'
import ServicesPopover from './services-popover'
import WhyUsPopover from './why-us-popover'

const NAVIGATION_CONFIG = {
  links: [
    { href: '/why-us', label: 'Why Us?' },
    { href: '/services', label: 'Services' },
    { href: './#pricing', label: 'Pricing' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/learn', label: 'Blog' },
    { href: '/resources', label: 'Resources' },
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
  const [isWhyUsOpen, setIsWhyUsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  // Measure the entire fixed header (banner + nav)
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const [fixedBlockHeight, setFixedBlockHeight] = useState(0)

  useLayoutEffect(() => {
    const el = wrapperRef.current
    if (!el) return

    const measure = () => setFixedBlockHeight(el.getBoundingClientRect().height)
    measure()

    const ro = new ResizeObserver(measure)
    ro.observe(el)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])

  // Close popovers on route changes
  useEffect(() => {
    setIsWhyUsOpen(false)
    setIsServicesOpen(false)
  }, [pathname])

  // Close Why Us popover when clicking outside
  useEffect(() => {
    if (!isWhyUsOpen) return
    const handleClickOutside = (event: MouseEvent) => {
      const pop = document.getElementById('why-us-popover')
      const btn = document.getElementById('why-us-button')
      if (
        pop &&
        !pop.contains(event.target as Node) &&
        btn &&
        !btn.contains(event.target as Node)
      ) {
        setIsWhyUsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside as EventListener)
    return () =>
      document.removeEventListener(
        'mousedown',
        handleClickOutside as EventListener,
      )
  }, [isWhyUsOpen])

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
        label === 'Why Us?' ? (
          <WhyUsPopover
            key={label}
            open={isWhyUsOpen}
            onToggle={() => {
              setIsWhyUsOpen((v) => !v)
              setIsServicesOpen(false)
            }}
            onClose={() => setIsWhyUsOpen(false)}
          />
        ) : label === 'Services' ? (
          <ServicesPopover
            key={label}
            open={isServicesOpen}
            onToggle={() => {
              setIsServicesOpen((v) => !v)
              setIsWhyUsOpen(false)
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
        className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur transition-[background-color,backdrop-filter] duration-300 hover:bg-white hover:backdrop-blur-none supports-[backdrop-filter]:bg-white/70"
      >
        <Banner
          text="Download Our FREE eBook: How to Set Up a Content Marketing Engine in the Age of AI →"
          link="https://draft.dev/content-marketing-engine"
        />

        <header>
          <Disclosure as="div" className="w-full">
            {({ open, close }) => (
              <>
                <div className="mx-auto max-w-7xl px-2">
                  <div className="flex items-center justify-between py-6">
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
                          className="h-auto max-h-[45px] w-auto"
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

      {/* Spacer equals total height of Banner + Navbar */}
      <div aria-hidden="true" style={{ height: fixedBlockHeight }} />
    </>
  )
}

export default memo(DynamicNavbar)
