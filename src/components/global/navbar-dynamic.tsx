'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import {
  ClipboardDocumentCheckIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  SignalIcon,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Bars2Icon, ChevronDownIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { createContext, memo, useContext, useEffect, useState } from 'react'

import type { MouseEvent } from 'react'
import { Link } from './link'

const NAVIGATION_CONFIG = {
  useCases: [
    { name: 'Build Trust', href: '/build-trust', icon: UserGroupIcon },
    { name: 'Drive Awareness', href: '/drive-awareness', icon: SignalIcon },
    {
      name: 'Capture Leads',
      href: '/capture-leads',
      icon: ClipboardDocumentCheckIcon,
    },
  ],
  whoWeHelp: [
    { name: 'For Marketers', href: '/for-marketers', icon: GlobeAltIcon },
    { name: 'For DevRels', href: '/for-dev-rels', icon: CodeBracketIcon },
  ],
  recentPosts: [
    {
      id: 1,
      title: 'How to Set Up a Content Marketing Engine in the Age of AI',
      href: '/content-marketing-engine',
      imageUrl: '/site/med-landscape/content_marketing_engine_og_draft_dev.jpg',
      description:
        'This eBook will walk you through the exact process that you can use to set up a predictable, consistent content engine.',
    },
    {
      id: 2,
      title: 'Building and Scaling Developer Marketing',
      href: '/developer-marketing',
      imageUrl: '/site/med-landscape/developer_marketing_og_draft_dev.jpg',
      description:
        'This guide offers strategies and insights for effectively reaching and converting developer audiences through authentic, value-driven approaches.',
    },
  ],
  links: [
    { href: '/why-us', label: 'Why Us?' },
    {
      href: 'https://draft.dev/#lead-generation-package',
      label: 'Lead Generation',
    },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/learn', label: 'Blog' },
    { href: '/resources', label: 'Free Resources' },
    { href: '/about', label: 'Company' },
    { href: '/call', label: 'Book Discovery Call' },
  ],
}

const STYLES = {
  linkBase: 'text-sm md:text-base lg:text-base xl:text-lg font-medium',
  mobileLink: 'px-6 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50',
  popoverButton:
    'flex gap-x-4 py-2 text-sm font-semibold text-gray-700 hover:text-gray-800',
  menuIcon: 'h-6 w-6 flex-none text-gray-700',
  linkHover: 'hover:bg-gray-100/80',
  textColor: 'text-gray-700',
}

const PopoverContext = createContext({
  close: () => {},
})

const NavSection = memo(({ title, items }: { title: string; items: any[] }) => {
  const { close } = useContext(PopoverContext)
  const router = useRouter()

  return (
    <div>
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <div className="mt-6 flow-root">
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={STYLES.popoverButton}
            onClick={(e: MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault()
              close()
              router.push(item.href)
            }}
          >
            <item.icon aria-hidden="true" className={STYLES.menuIcon} />
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
})
NavSection.displayName = 'NavSection'

const RecentPosts = memo(
  ({ posts }: { posts: typeof NAVIGATION_CONFIG.recentPosts }) => {
    const { close } = useContext(PopoverContext)
    const router = useRouter()

    return (
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <h3 className="sr-only">Recent posts</h3>
        {posts.map((post) => (
          <article key={post.id} className="relative flex flex-col gap-y-6">
            <div className="relative flex-none">
              <Image
                alt="image post"
                src={post.imageUrl}
                className="aspect-[2/1] w-full rounded-lg bg-gray-100 object-cover"
                height={200}
                width={300}
              />
              <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-800">
                <Link
                  href={post.href}
                  onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault()
                    close()
                    router.push(post.href)
                  }}
                  className="block"
                >
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </h4>
              <p className="text-sm text-gray-600">{post.description}</p>
            </div>
          </article>
        ))}
      </div>
    )
  },
)
RecentPosts.displayName = 'RecentPosts'

const WhyUsPopoverContent = memo(({ onClose }: { onClose: () => void }) => {
  return (
    <PopoverContext.Provider value={{ close: onClose }}>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8">
          <NavSection title="Use Cases" items={NAVIGATION_CONFIG.useCases} />
          <NavSection title="Who We Help" items={NAVIGATION_CONFIG.whoWeHelp} />
        </div>
        <RecentPosts posts={NAVIGATION_CONFIG.recentPosts} />
      </div>
    </PopoverContext.Provider>
  )
})
WhyUsPopoverContent.displayName = 'WhyUsPopoverContent'

const MobileNavContent = memo(
  ({
    links,
    closeMobileMenu,
  }: {
    links: typeof NAVIGATION_CONFIG.links
    closeMobileMenu: () => void
  }) => {
    const router = useRouter()

    return (
      <div className="flex flex-col py-2">
        {links.map(({ href, label }) =>
          label === 'Why Us?' ? (
            <Disclosure
              key={label}
              as="div"
              className="border-b border-gray-100"
            >
              {({ open: subOpen, close: subClose }) => (
                <>
                  <DisclosureButton className="flex w-full items-center justify-between px-6 py-3 text-base font-medium text-gray-900 hover:bg-gray-50">
                    <span>{label}</span>
                    <ChevronDownIcon
                      className={`h-5 w-5 text-gray-500 ${
                        subOpen ? 'rotate-180 transform' : ''
                      }`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="pl-4">
                    <div className="border-l border-gray-100 py-2">
                      <div className="pl-4">
                        <h4 className="py-1 text-sm font-medium text-secondary">
                          Use Cases
                        </h4>
                        {NAVIGATION_CONFIG.useCases.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center gap-2 px-6 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                              e.preventDefault()
                              subClose()
                              closeMobileMenu()
                              router.push(item.href)
                            }}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>

                      <div className="mt-2 pl-4">
                        <h4 className="py-1 text-sm font-medium text-secondary">
                          Who We Help
                        </h4>
                        {NAVIGATION_CONFIG.whoWeHelp.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center gap-2 px-6 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                              e.preventDefault()
                              subClose()
                              closeMobileMenu()
                              router.push(item.href)
                            }}
                          >
                            {item.name}
                          </Link>
                        ))}
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
              onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                if (href.startsWith('http')) {
                  return
                }
                e.preventDefault()
                closeMobileMenu()
                router.push(href)
              }}
            >
              {label}
            </Link>
          ),
        )}
      </div>
    )
  },
)
MobileNavContent.displayName = 'MobileNavContent'

interface NavbarProps {}

export function DynamicNavbar({}: NavbarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const isSlug = pathname?.startsWith('/learn/')
  const [bannerHeight, setBannerHeight] = useState(0)
  const [isWhyUsOpen, setIsWhyUsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Get initial banner height from CSS variable
    const updateBannerHeight = () => {
      const height = getComputedStyle(
        document.documentElement,
      ).getPropertyValue('--banner-height')
      setBannerHeight(parseInt(height) || 0)
    }

    // Listen for banner visibility changes
    const handleBannerChange = (event: CustomEvent) => {
      updateBannerHeight()
    }

    updateBannerHeight()
    window.addEventListener(
      'bannerVisibilityChange',
      handleBannerChange as EventListener,
    )
    window.addEventListener('resize', updateBannerHeight)

    return () => {
      window.removeEventListener(
        'bannerVisibilityChange',
        handleBannerChange as EventListener,
      )
      window.removeEventListener('resize', updateBannerHeight)
    }
  }, [])

  useEffect(() => {
    setIsWhyUsOpen(false)
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!isWhyUsOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      const whyUsPopover = document.getElementById('why-us-popover')
      const whyUsButton = document.getElementById('why-us-button')

      if (
        whyUsPopover &&
        !whyUsPopover.contains(event.target as Node) &&
        whyUsButton &&
        !whyUsButton.contains(event.target as Node)
      ) {
        setIsWhyUsOpen(false)
      }
    }

    document.addEventListener(
      'mousedown',
      handleClickOutside as unknown as EventListener,
    )
    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside as unknown as EventListener,
      )
    }
  }, [isWhyUsOpen])

  const WhyUsPopover = memo(() => (
    <div className="relative">
      <button
        id="why-us-button"
        className={`flex items-center whitespace-nowrap px-1 pt-1 md:px-2 lg:px-3 xl:px-4 ${STYLES.linkBase} ${STYLES.textColor} ${STYLES.linkHover}`}
        onClick={() => setIsWhyUsOpen(!isWhyUsOpen)}
        aria-expanded={isWhyUsOpen}
      >
        Why Us?
      </button>

      {isWhyUsOpen && (
        <div
          id="why-us-popover"
          className="fixed inset-x-0 z-50 mx-auto max-h-[calc(100vh-5rem)] w-[95vw] max-w-4xl overflow-y-auto rounded-xl bg-white shadow-lg ring-1 ring-black/5 lg:w-[85vw]"
          style={{ top: `${bannerHeight + 72}px` }}
        >
          <div className="absolute right-5 top-4">
            <button
              className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100"
              onClick={() => setIsWhyUsOpen(false)}
            >
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <div className="p-6 lg:p-5">
            <WhyUsPopoverContent onClose={() => setIsWhyUsOpen(false)} />
          </div>
        </div>
      )}
    </div>
  ))
  WhyUsPopover.displayName = 'WhyUsPopover'

  const DesktopNav = memo(() => (
    <nav
      className={`hidden items-center justify-end space-x-1 md:space-x-2 lg:space-x-3 tablet:flex ${STYLES.textColor}`}
    >
      {NAVIGATION_CONFIG.links.map(({ href, label }) =>
        label === 'Why Us?' ? (
          <WhyUsPopover key={label} />
        ) : (
          <Link
            key={href}
            href={href}
            className={`whitespace-nowrap px-1 pt-1 md:px-2 lg:px-3 xl:px-4 ${STYLES.linkBase} ${STYLES.textColor} ${STYLES.linkHover}`}
          >
            {label}
          </Link>
        ),
      )}
    </nav>
  ))
  DesktopNav.displayName = 'DesktopNav'

  return (
    <header className="navbar-container">
      {isSlug && <div style={{ height: `${bannerHeight + 64}px` }}></div>}

      <Disclosure
        as="div"
        className="fixed left-0 right-0 z-40 bg-white/95 shadow-md backdrop-blur-sm transition-all duration-300"
        style={{ top: `${bannerHeight}px` }}
        defaultOpen={isMobileMenuOpen}
      >
        {({ open, close }) => {
          if (isMobileMenuOpen !== open) {
            setIsMobileMenuOpen(open)
          }

          return (
            <>
              <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
                <div className="flex items-center justify-between py-6">
                  <div className="flex items-center">
                    <Link href="/" title="Home">
                      <Image
                        src="/draft/logos/draftlogo_main_filled.svg"
                        alt="Logo"
                        width={160}
                        height={64}
                        priority
                        className="h-auto max-h-[45px] w-auto"
                      />
                    </Link>
                  </div>

                  <DesktopNav />

                  <DisclosureButton
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100/80 lg:hidden"
                    aria-label="Open main menu"
                  >
                    {open ? (
                      <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <Bars2Icon className="h-5 w-5" />
                    )}
                  </DisclosureButton>
                </div>

                <DisclosurePanel className="bg-white tablet:hidden">
                  <MobileNavContent
                    links={NAVIGATION_CONFIG.links}
                    closeMobileMenu={close}
                  />
                </DisclosurePanel>
              </div>
            </>
          )
        }}
      </Disclosure>
    </header>
  )
}

export default DynamicNavbar
