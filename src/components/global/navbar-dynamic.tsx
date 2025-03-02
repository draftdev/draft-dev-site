'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverPanel,
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
import { usePathname } from 'next/navigation'
import React, { memo, useCallback, useEffect, useState } from 'react'
import { Link } from './link'

const NAVIGATION_CONFIG = {
  useCases: [
    { name: 'Drive Awareness', href: '/drive-awareness', icon: SignalIcon },
    {
      name: 'Capture Leads',
      href: '/capture-leads',
      icon: ClipboardDocumentCheckIcon,
    },
    { name: 'Build Trust', href: '/build-trust', icon: UserGroupIcon },
  ],
  whoWeHelp: [
    { name: 'For Marketers', href: '/for-marketers', icon: GlobeAltIcon },
    { name: 'For DevRels', href: '/for-dev-rels', icon: CodeBracketIcon },
  ],
  recentPosts: [
    {
      id: 1,
      title: 'The Technical Content Manager Playbook',
      href: '/playbook',
      imageUrl:
        '/site/med-portrait/technical_content_manager_playbook_draft_dev.webp',
      description:
        'This free Playbook is a collection of resources you can use to manage a top-tier technical blog.',
    },
    {
      id: 2,
      title: '50 Winning Ideas For Your Company Blog',
      href: '/ideas',
      imageUrl: '/site/med-portrait/50_ideas_draft_dev.webp',
      description:
        'Kickstart your content marketing efforts. Download this free guide and get 50 ideas for free.',
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
    { href: '/playbook', label: 'Content Playbook' },
    { href: '/about', label: 'Company' },
    { href: '/call', label: 'Book Discovery Call' },
  ],
}

const STYLES = {
  transition: 'transition-colors duration-300 ease-in-out',
  linkBase: 'text-lg font-medium',
  mobileLink: 'px-6 py-2 text-base font-medium text-gray-900 hover:bg-gray-50',
  popoverButton:
    'flex gap-x-4 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900',
  menuIcon: 'h-6 w-6 flex-none text-gray-700',
}

const getNavStyles = (hasScrolled: boolean, isSlug: boolean = false) => {
  // If it's a slug page, always return the "scrolled" styles
  if (isSlug) {
    return {
      text: 'tablet:text-gray-700',
      background:
        'bg-white tablet:bg-white/95 tablet:backdrop-blur-sm tablet:shadow-md',
      hoverBg: 'hover:bg-gray-100/80 tablet:hover:bg-gray-100/80',
      logo: '/draft/logos/draftlogo_main_filled.svg',
    }
  }

  return {
    text: `text-gray-700 ${hasScrolled ? 'tablet:text-gray-700' : 'tablet:text-white'}`,
    background: `bg-white ${hasScrolled ? 'tablet:bg-white/95 tablet:backdrop-blur-sm tablet:shadow-md' : 'tablet:bg-transparent'}`,
    hoverBg: `hover:bg-gray-100/80 ${hasScrolled ? 'tablet:hover:bg-gray-100/80' : 'tablet:hover:bg-white/10'}`,
    logo: hasScrolled
      ? '/draft/logos/draftlogo_main_filled.svg'
      : '/draft/logos/draftlogo_base_white.svg',
  }
}

// Extracted and memoized components for better performance
const NavSection = memo(({ title, items }: { title: string; items: any[] }) => (
  <div>
    <h3 className="text-sm font-medium text-gray-500">{title}</h3>
    <div className="mt-6 flow-root">
      <div className="-my-2">
        {items.map((item) => (
          <PopoverButton
            as={Link}
            key={item.name}
            href={item.href}
            className={STYLES.popoverButton}
          >
            <item.icon aria-hidden="true" className={STYLES.menuIcon} />
            {item.name}
          </PopoverButton>
        ))}
      </div>
    </div>
  </div>
))
NavSection.displayName = 'NavSection'

const RecentPosts = memo(
  ({ posts }: { posts: typeof NAVIGATION_CONFIG.recentPosts }) => (
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
            <h4 className="mt-2 text-sm font-semibold text-gray-900">
              <PopoverButton as={Link} href={post.href}>
                <span className="absolute inset-0" />
                {post.title}
              </PopoverButton>
            </h4>
            <p className="mt-2 text-sm text-gray-600">{post.description}</p>
          </div>
        </article>
      ))}
    </div>
  ),
)
RecentPosts.displayName = 'RecentPosts'

const WhyUsPopoverContent = memo(() => (
  <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
    <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8">
      <NavSection title="Use Cases" items={NAVIGATION_CONFIG.useCases} />
      <NavSection title="Who We Help" items={NAVIGATION_CONFIG.whoWeHelp} />
    </div>
    <RecentPosts posts={NAVIGATION_CONFIG.recentPosts} />
  </div>
))
WhyUsPopoverContent.displayName = 'WhyUsPopoverContent'

// Remove the dynamic import since we're keeping the mobile nav inline

interface NavbarProps {
  banner?: React.ReactNode
}

export function DynamicNavbar({ banner }: NavbarProps) {
  const [hasScrolled, setHasScrolled] = useState(false)
  const pathname = usePathname()
  const isSlug = pathname?.startsWith('/learn/')
  const styles = getNavStyles(hasScrolled, isSlug)

  // Debounced scroll handler
  const handleScroll = useCallback(() => {
    // Use requestAnimationFrame to make the scroll handler more efficient
    requestAnimationFrame(() => {
      setHasScrolled(window.scrollY > 0)
    })
  }, [])

  useEffect(() => {
    // Set initial state
    setHasScrolled(window.scrollY > 0)

    // Use passive event listener to improve performance
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    let resizeTimer: NodeJS.Timeout

    const handleResize = () => {
      // Clear any existing timeout to prevent multiple executions
      clearTimeout(resizeTimer)

      // Set a new timeout to debounce the function
      resizeTimer = setTimeout(() => {
        const openPopover = document.querySelector(
          '[data-headlessui-state="open"]',
        )
        if (openPopover) {
          const button = openPopover.querySelector('button')
          if (button) button.click()
        }
      }, 150) // 150ms debounce delay
    }

    window.addEventListener('resize', handleResize, { passive: true })
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimer)
    }
  }, [])

  const WhyUsPopover = memo(() => (
    <Popover className="relative">
      {({ open }) => (
        <>
          <PopoverButton
            className={`flex items-center px-4 py-6 ${STYLES.linkBase} ${styles.hoverBg} ${STYLES.transition}`}
          >
            Why Us?
            <ChevronDownIcon
              className={`ml-2 h-4 w-4 ${styles.text} ${STYLES.transition} ${
                open ? 'rotate-180 transform' : ''
              }`}
            />
          </PopoverButton>

          <PopoverPanel className="fixed inset-x-0 top-[4.5rem] z-50 mx-auto max-h-[calc(100vh-5rem)] w-[95vw] max-w-4xl overflow-y-auto rounded-xl bg-white shadow-lg ring-1 ring-black/5 lg:w-[85vw]">
            <div className="absolute right-5 top-4">
              <PopoverButton className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100">
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Close menu</span>
              </PopoverButton>
            </div>
            <div className="p-6 lg:p-5">
              <WhyUsPopoverContent />
            </div>
          </PopoverPanel>
        </>
      )}
    </Popover>
  ))
  WhyUsPopover.displayName = 'WhyUsPopover'

  const DesktopNav = memo(() => (
    <nav className={`hidden items-center tablet:flex ${styles.text}`}>
      {NAVIGATION_CONFIG.links.map(({ href, label }) =>
        label === 'Why Us?' ? (
          <WhyUsPopover key={label} />
        ) : (
          <Link
            key={href}
            href={href}
            className={`px-4 py-3 ${STYLES.linkBase} ${styles.text} ${styles.hoverBg} ${STYLES.transition}`}
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
      {isSlug && <div className="h-16"></div>}

      <Disclosure
        as="header"
        className={`fixed left-0 right-0 top-0 z-50 ${styles.background} ${STYLES.transition}`}
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center">
                  <Link href="/" title="Home" className="block tablet:hidden">
                    <Image
                      src="/draft/logos/draftlogo_main_filled.svg"
                      alt="Logo"
                      width={180}
                      height={72}
                      priority
                    />
                  </Link>
                  <Link href="/" title="Home" className="hidden tablet:block">
                    <Image
                      src={styles.logo}
                      alt="Logo"
                      width={180}
                      height={72}
                      priority
                      className={STYLES.transition}
                    />
                  </Link>
                  {banner && (
                    <div className="hidden items-center tablet:flex">
                      {banner}
                    </div>
                  )}
                </div>

                <DesktopNav />

                <DisclosureButton
                  className="flex h-12 w-12 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100/80 lg:hidden"
                  aria-label="Open main menu"
                >
                  {open ? (
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars2Icon className="h-6 w-6" />
                  )}
                </DisclosureButton>
              </div>

              <DisclosurePanel className="bg-white tablet:hidden">
                <div className="flex flex-col py-2">
                  {NAVIGATION_CONFIG.links.map(({ href, label }) =>
                    label === 'Why Us?' ? (
                      <Disclosure
                        key={label}
                        as="div"
                        className="border-b border-gray-100"
                      >
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
                                  {NAVIGATION_CONFIG.useCases.map((item) => (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      className="flex items-center gap-2 px-6 py-2 text-sm text-gray-700 hover:bg-gray-50"
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
                        className={STYLES.mobileLink}
                      >
                        {label}
                      </Link>
                    ),
                  )}
                </div>
              </DisclosurePanel>
            </div>
          </>
        )}
      </Disclosure>
    </>
  )
}

export default DynamicNavbar

// 'use client'

// import {
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
//   Popover,
//   PopoverButton,
//   PopoverPanel,
// } from '@headlessui/react'
// import {
//   ClipboardDocumentCheckIcon,
//   CodeBracketIcon,
//   GlobeAltIcon,
//   SignalIcon,
//   UserGroupIcon,
//   XMarkIcon,
// } from '@heroicons/react/24/outline'
// import { Bars2Icon, ChevronDownIcon } from '@heroicons/react/24/solid'
// import Image from 'next/image'
// import { usePathname } from 'next/navigation'
// import React, { useEffect, useState } from 'react'
// import { Link } from './link'

// const NAVIGATION_CONFIG = {
//   useCases: [
//     { name: 'Drive Awareness', href: '/drive-awareness', icon: SignalIcon },
//     {
//       name: 'Capture Leads',
//       href: '/capture-leads',
//       icon: ClipboardDocumentCheckIcon,
//     },
//     { name: 'Build Trust', href: '/build-trust', icon: UserGroupIcon },
//   ],
//   whoWeHelp: [
//     { name: 'For Marketers', href: '/for-marketers', icon: GlobeAltIcon },
//     { name: 'For DevRels', href: '/for-dev-rels', icon: CodeBracketIcon },
//   ],
//   recentPosts: [
//     {
//       id: 1,
//       title: 'The Technical Content Manager Playbook',
//       href: '/playbook',
//       /* date: 'Mar 16, 2023', */
//       /* datetime: '2023-03-16', */
//       /* category: { title: 'Marketing', href: '#' }, */
//       imageUrl:
//         '/site/med-portrait/technical_content_manager_playbook_draft_dev.webp',
//       description:
//         'This free Playbook is a collection of resources you can use to manage a top-tier technical blog.',
//     },
//     {
//       id: 2,
//       title: '50 Winning Ideas For Your Company Blog',
//       href: '/ideas',
//       /*       date: 'Mar 10, 2023',
//       datetime: '2023-03-10',
//       category: { title: 'Sales', href: '#' }, */
//       imageUrl: '/site/med-portrait/50_ideas_draft_dev.webp',
//       description:
//         'Kickstart your content marketing efforts. Download this free guide and get 50 ideas for free.',
//     },
//     /*     {
//       id: 1,
//       title: 'A Complete Introduction to Technical Marketing',
//       href: '/learn/a-complete-introduction-to-technical-marketing',
//       date: 'Mar 16, 2023',
//       datetime: '2023-03-16',
//       category: { title: 'Marketing', href: '#' },
//       imageUrl:
//         '/site/med-landscape/introduction_to_technical_marketing_draft_dev.webp',
//       description:
//         'One of the challenges many B2B marketers face is selling a complex product to a knowledgeable audience.',
//     },
//     {
//       id: 2,
//       title: '101 Content Marketing Tips and Resources',
//       href: 'learn/101-content-marketing-tips-and-resources',
//       date: 'Mar 10, 2023',
//       datetime: '2023-03-10',
//       category: { title: 'Sales', href: '#' },
//       imageUrl:
//         '/site/med-landscape/101_content_marketing_tips_draft_dev.webp',
//       description:
//         'No matter what you do or where you work, content marketing is critical to helping businesses get seen.',
//     }, */
//   ],
//   links: [
//     { href: '/why-us', label: 'Why Us?' },
//     { href: 'https://draft.dev/#lead-generation-package', label: 'Lead Generation' },
//     { href: '/case-studies', label: 'Case Studies' },
//     { href: '/learn', label: 'Blog' },
//     { href: '/playbook', label: 'Content Playbook' },
//     { href: '/about', label: 'Company' },
//     { href: '/call', label: 'Book Discovery Call' },
//   ],
// }

// const STYLES = {
//   transition: 'transition-colors duration-300 ease-in-out',
//   linkBase: 'text-lg font-medium',
//   mobileLink: 'px-6 py-2 text-base font-medium text-gray-900 hover:bg-gray-50',
//   popoverButton:
//     'flex gap-x-4 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900',
//   menuIcon: 'h-6 w-6 flex-none text-gray-700',
// }

// const getNavStyles = (hasScrolled: boolean, isSlug: boolean = false) => {
//   // If it's a slug page, always return the "scrolled" styles
//   if (isSlug) {
//     return {
//       text: 'tablet:text-gray-700',
//       background:
//         'bg-white tablet:bg-white/95 tablet:backdrop-blur-sm tablet:shadow-md',
//       hoverBg: 'hover:bg-gray-100/80 tablet:hover:bg-gray-100/80',
//       logo: '/draft/logos/draftlogo_main_filled.svg',
//     }
//   }

//   return {
//     text: `text-gray-700 ${hasScrolled ? 'tablet:text-gray-700' : 'tablet:text-white'}`,
//     background: `bg-white ${hasScrolled ? 'tablet:bg-white/95 tablet:backdrop-blur-sm tablet:shadow-md' : 'tablet:bg-transparent'}`,
//     hoverBg: `hover:bg-gray-100/80 ${hasScrolled ? 'tablet:hover:bg-gray-100/80' : 'tablet:hover:bg-white/10'}`,
//     logo: hasScrolled
//       ? '/draft/logos/draftlogo_main_filled.svg'
//       : '/draft/logos/draftlogo_base_white.svg',
//   }
// }

// interface NavbarProps {
//   banner?: React.ReactNode
// }

// export function DynamicNavbar({ banner }: NavbarProps) {
//   const [hasScrolled, setHasScrolled] = useState(false)
//   const pathname = usePathname()
//   const isSlug = pathname?.startsWith('/learn/')
//   const styles = getNavStyles(hasScrolled, isSlug)

//   useEffect(() => {
//     const handleScroll = () => {
//       setHasScrolled(window.scrollY > 0)
//     }

//     window.addEventListener('scroll', handleScroll, { passive: true })
//     handleScroll()
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   useEffect(() => {
//     const handleResize = () => {
//       const openPopover = document.querySelector(
//         '[data-headlessui-state="open"]',
//       )
//       if (openPopover) {
//         const button = openPopover.querySelector('button')
//         if (button) button.click()
//       }
//     }

//     window.addEventListener('resize', handleResize)
//     return () => window.removeEventListener('resize', handleResize)
//   }, [])

//   const WhyUsPopover = () => (
//     <Popover className="relative">
//       {({ open }) => (
//         <>
//           <PopoverButton
//             className={`flex items-center px-4 py-6 ${STYLES.linkBase} ${styles.hoverBg} ${STYLES.transition}`}
//           >
//             Why Us?
//             <ChevronDownIcon
//               className={`ml-2 h-4 w-4 ${styles.text} ${STYLES.transition} ${
//                 open ? 'rotate-180 transform' : ''
//               }`}
//             />
//           </PopoverButton>

//           <PopoverPanel className="fixed inset-x-0 top-[4.5rem] z-50 mx-auto max-h-[calc(100vh-5rem)] w-[95vw] max-w-4xl overflow-y-auto rounded-xl bg-white shadow-lg ring-1 ring-black/5 lg:w-[85vw]">
//             <div className="absolute right-5 top-4">
//               <PopoverButton className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100">
//                 <XMarkIcon className="h-5 w-5" aria-hidden="true" />
//                 <span className="sr-only">Close menu</span>
//               </PopoverButton>
//             </div>
//             <div className="p-6 lg:p-5">
//               <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
//                 <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8">
//                   <NavSection
//                     title="Use Cases"
//                     items={NAVIGATION_CONFIG.useCases}
//                   />
//                   <NavSection
//                     title="Who We Help"
//                     items={NAVIGATION_CONFIG.whoWeHelp}
//                   />
//                 </div>
//                 <RecentPosts posts={NAVIGATION_CONFIG.recentPosts} />
//               </div>
//             </div>
//           </PopoverPanel>
//         </>
//       )}
//     </Popover>
//   )

//   const NavSection = ({ title, items }: { title: string; items: any[] }) => (
//     <div>
//       <h3 className="text-sm font-medium text-gray-500">{title}</h3>
//       <div className="mt-6 flow-root">
//         <div className="-my-2">
//           {items.map((item) => (
//             <PopoverButton
//               as={Link}
//               key={item.name}
//               href={item.href}
//               className={STYLES.popoverButton}
//             >
//               <item.icon aria-hidden="true" className={STYLES.menuIcon} />
//               {item.name}
//             </PopoverButton>
//           ))}
//         </div>
//       </div>
//     </div>
//   )

//   const RecentPosts = ({
//     posts,
//   }: {
//     posts: typeof NAVIGATION_CONFIG.recentPosts
//   }) => (
//     <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
//       <h3 className="sr-only">Recent posts</h3>
//       {posts.map((post) => (
//         <article key={post.id} className="relative flex flex-col gap-y-6">
//           <div className="relative flex-none">
//             <Image
//               alt="image post"
//               src={post.imageUrl}
//               className="aspect-[2/1] w-full rounded-lg bg-gray-100 object-cover"
//               height={200}
//               width={300}
//             />
//             <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10" />
//           </div>
//           <div>
//             {/* <div className="flex items-center gap-x-4 text-sm text-gray-600">
//               <time dateTime={post.datetime}>{post.date}</time>
//               <PopoverButton
//                 as={Link}
//                 href={post.category.href}
//                 className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium hover:bg-gray-100"
//               >
//                 {post.category.title}
//               </PopoverButton>
//             </div> */}
//             <h4 className="mt-2 text-sm font-semibold text-gray-900">
//               <PopoverButton as={Link} href={post.href}>
//                 <span className="absolute inset-0" />
//                 {post.title}
//               </PopoverButton>
//             </h4>
//             <p className="mt-2 text-sm text-gray-600">{post.description}</p>
//           </div>
//         </article>
//       ))}
//     </div>
//   )

//   const DesktopNav = () => (
//     <nav className={`hidden items-center tablet:flex ${styles.text}`}>
//       {NAVIGATION_CONFIG.links.map(({ href, label }) =>
//         label === 'Why Us?' ? (
//           <WhyUsPopover key={label} />
//         ) : (
//           <Link
//             key={href}
//             href={href}
//             className={`px-4 py-3 ${STYLES.linkBase} ${styles.text} ${styles.hoverBg} ${STYLES.transition}`}
//           >
//             {label}
//           </Link>
//         ),
//       )}
//     </nav>
//   )

//   const MobileNav = () => (
//     <DisclosurePanel className="bg-white tablet:hidden">
//       <div className="flex flex-col py-2">
//         {NAVIGATION_CONFIG.links.map(({ href, label }) =>
//           label === 'Why Us?' ? (
//             <Disclosure
//               key={label}
//               as="div"
//               className="border-b border-gray-100"
//             >
//               {({ open }) => (
//                 <>
//                   <DisclosureButton className="flex w-full items-center justify-between px-6 py-3 text-base font-medium text-gray-900 hover:bg-gray-50">
//                     <span>{label}</span>
//                     <ChevronDownIcon
//                       className={`h-5 w-5 text-gray-500 ${
//                         open ? 'rotate-180 transform' : ''
//                       }`}
//                     />
//                   </DisclosureButton>
//                   <DisclosurePanel className="pl-4">
//                     <div className="border-l border-gray-100 py-2">
//                       <div className="pl-4">
//                         <h4 className="py-1 text-sm font-medium text-secondary">
//                           Use Cases
//                         </h4>
//                         {NAVIGATION_CONFIG.useCases.map((item) => (
//                           <Link
//                             key={item.name}
//                             href={item.href}
//                             className="flex items-center gap-2 px-6 py-2 text-sm text-gray-700 hover:bg-gray-50"
//                           >
//                             {item.name}
//                           </Link>
//                         ))}
//                       </div>

//                       <div className="mt-2 pl-4">
//                         <h4 className="py-1 text-sm font-medium text-secondary">
//                           Who We Help
//                         </h4>
//                         {NAVIGATION_CONFIG.whoWeHelp.map((item) => (
//                           <Link
//                             key={item.name}
//                             href={item.href}
//                             className="flex items-center gap-2 px-6 py-2 text-sm text-gray-700 hover:bg-gray-50"
//                           >
//                             {item.name}
//                           </Link>
//                         ))}
//                       </div>
//                     </div>
//                   </DisclosurePanel>
//                 </>
//               )}
//             </Disclosure>
//           ) : (
//             <Link key={href} href={href} className={STYLES.mobileLink}>
//               {label}
//             </Link>
//           ),
//         )}
//       </div>
//     </DisclosurePanel>
//   )

//   return (
//     <>
//       {isSlug && <div className="h-16"></div>}

//       <Disclosure
//         as="header"
//         className={`fixed left-0 right-0 top-0 z-50 ${styles.background} ${STYLES.transition}`}
//       >
//         {({ open }) => (
//           <>
//             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//               <div className="flex items-center justify-between py-3">
//                 <div className="flex items-center">
//                   <Link href="/" title="Home" className="block tablet:hidden">
//                     <Image
//                       src="/draft/logos/draftlogo_main_filled.svg"
//                       alt="Logo"
//                       width={180}
//                       height={72}
//                       priority
//                     />
//                   </Link>
//                   <Link href="/" title="Home" className="hidden tablet:block">
//                     <Image
//                       src={styles.logo}
//                       alt="Logo"
//                       width={180}
//                       height={72}
//                       priority
//                       className={STYLES.transition}
//                     />
//                   </Link>
//                   {banner && (
//                     <div className="hidden items-center tablet:flex">
//                       {banner}
//                     </div>
//                   )}
//                 </div>

//                 <DesktopNav />

//                 <DisclosureButton
//                   className="flex h-12 w-12 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100/80 lg:hidden"
//                   aria-label="Open main menu"
//                 >
//                   {open ? (
//                     <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Bars2Icon className="h-6 w-6" />
//                   )}
//                 </DisclosureButton>
//               </div>

//               <MobileNav />
//             </div>
//           </>
//         )}
//       </Disclosure>
//     </>
//   )
// }

// export default DynamicNavbar
