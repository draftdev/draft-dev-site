import { Container } from '@/components/global/container'
import { Link } from '@/components/global/link'
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Image from 'next/image'

// Top band of the footer: the same discovery call prompt on every page
function CallToAction() {
  return (
    <div className="flex flex-col gap-8 py-16 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
      <div className="max-w-2xl">
        <h2 className="font-code text-3xl/tight font-semibold text-white sm:text-4xl/tight lg:text-5xl/tight">
          Want to learn more about how we work?
        </h2>
        <p className="mt-4 text-lg text-white/80">
          Book a discovery call, or email us at{' '}
          <a
            href="mailto:support@draft.dev"
            className="font-semibold text-white underline decoration-white/40 underline-offset-4 transition hover:decoration-white"
          >
            support@draft.dev
          </a>
          .
        </p>
      </div>
      <Link
        href="/call"
        className="shrink-0 self-start rounded-md bg-amber-400 px-6 py-3.5 text-base font-semibold text-gray-900 shadow-lg shadow-black/20 transition hover:bg-amber-300 sm:text-lg lg:self-center"
      >
        Book a Discovery Call
      </Link>
    </div>
  )
}

// Footer link columns: service landing pages first, then navigation
const sitemap = [
  {
    title: 'Services',
    links: [
      { name: 'SEO', href: '/seo-services-for-devtools' },
      { name: 'AEO & GEO', href: '/aeo-geo-services-for-devtools' },
      { name: 'Video Marketing', href: '/video-marketing-for-devtools' },
      { name: 'Paid Search', href: '/ppc-for-devtools' },
      { name: 'Reddit Marketing', href: '/reddit-marketing-for-devtools' },
      {
        name: 'Influencer Distribution',
        href: '/influencer-distribution-for-devtools',
      },
      { name: 'Paid Sponsorships', href: '/paid-sponsorships-for-devtools' },
      { name: 'Content Strategy', href: '/content-strategy-services' },
      { name: 'Content Production', href: '/content-production' },
      { name: 'Content Distribution', href: '/content-distribution' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', href: '/learn' },
      { name: 'Guides and Templates', href: '/resources' },
      { name: 'Newsletter', href: '/newsletter' },
      {
        name: 'Developer Marketing Survey 2026',
        href: '/2026-developer-marketing-survey',
      },
      { name: 'For Marketers', href: '/for-marketers' },
      { name: 'For DevRels', href: '/for-dev-rels' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Write for Draft.dev', href: '/write' },
      { name: 'Book a Discovery Call', href: '/call' },
    ],
  },
  {
    title: 'Compare',
    links: [
      { name: 'vs. Freelancers', href: '/draft-dev-vs-freelancers' },
      { name: 'vs. SEO Agencies', href: '/draft-dev-vs-seo-agency' },
      {
        name: 'vs. AI Generated Content',
        href: '/draft-dev-vs-ai-gen-content',
      },
    ],
  },
]

const offices = ['Chicago, IL', 'Naperville, IL']

function Sitemap() {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {sitemap.map((column) => (
        <div
          key={column.title}
          // The long services list spans two columns and splits in half
          className={clsx(
            column.title === 'Services' &&
              'col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-2',
          )}
        >
          <h3 className="font-code text-base/6 font-semibold text-white">
            {column.title}
          </h3>
          <ul
            className={clsx(
              'mt-4 space-y-2.5 text-[15px]/6',
              column.title === 'Services' &&
                'grid grid-cols-2 space-y-0 gap-x-8 gap-y-2.5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-2',
            )}
          >
            {column.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/75 transition hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <Contact />
    </div>
  )
}

function NewsletterSignup() {
  return (
    <div className="flex w-full flex-col gap-4 rounded-2xl bg-white/10 px-6 py-5 ring-1 ring-white/20 sm:flex-row sm:items-center sm:justify-between sm:gap-8 lg:max-w-2xl">
      <div>
        <h3 className="font-code text-base font-semibold text-white">
          Get our monthly newsletter
        </h3>
        <p className="mt-1 text-[15px]/6 text-white/75">
          Resources, tips and case studies to help you reach developers. Join
          3,000+ subscribers.
        </p>
      </div>
      <Link
        href="/newsletter"
        className="shrink-0 self-start rounded-md bg-amber-400 px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-amber-300 sm:self-center"
      >
        Subscribe
      </Link>
    </div>
  )
}

// Contact email first, then the office locations
function Contact() {
  return (
    <div>
      <h3 className="font-code text-base/6 font-semibold text-white">
        Contact
      </h3>
      <ul className="mt-4 space-y-2.5 text-[15px]/6 text-white/75">
        <li>
          <a
            href="mailto:support@draft.dev"
            className="flex items-center gap-x-1.5 transition hover:text-white"
          >
            <EnvelopeIcon
              aria-hidden="true"
              className="size-4 text-amber-300"
            />
            support@draft.dev
          </a>
        </li>
        {offices.map((office) => (
          <li key={office} className="flex items-center gap-x-1.5">
            <MapPinIcon aria-hidden="true" className="size-4 text-amber-300" />
            {office}
          </li>
        ))}
      </ul>
    </div>
  )
}

function SocialIconX(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M12.6 0h2.454l-5.36 6.778L16 16h-4.937l-3.867-5.594L2.771 16H.316l5.733-7.25L0 0h5.063l3.495 5.114L12.6 0zm-.86 14.376h1.36L4.323 1.539H2.865l8.875 12.837z" />
    </svg>
  )
}

function SocialIconFacebook(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8.05C16 3.603 12.418 0 8 0S0 3.604 0 8.05c0 4.016 2.926 7.346 6.75 7.95v-5.624H4.718V8.05H6.75V6.276c0-2.017 1.194-3.131 3.022-3.131.875 0 1.79.157 1.79.157v1.98h-1.008c-.994 0-1.304.62-1.304 1.257v1.51h2.219l-.355 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.95z"
      />
    </svg>
  )
}

function SocialIconLinkedIn(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M14.82 0H1.18A1.169 1.169 0 000 1.154v13.694A1.168 1.168 0 001.18 16h13.64A1.17 1.17 0 0016 14.845V1.15A1.171 1.171 0 0014.82 0zM4.744 13.64H2.369V5.996h2.375v7.644zm-1.18-8.684a1.377 1.377 0 11.52-.106 1.377 1.377 0 01-.527.103l.007.003zm10.075 8.683h-2.375V9.921c0-.885-.015-2.025-1.234-2.025-1.218 0-1.425.966-1.425 1.968v3.775H6.233V5.997H8.51v1.05h.032c.317-.601 1.09-1.235 2.246-1.235 2.405-.005 2.851 1.578 2.851 3.63v4.197z" />
    </svg>
  )
}

function SocialIconYouTube(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M15.665 4.124a2.01 2.01 0 0 0-1.415-1.423C13.003 2.364 8 2.364 8 2.364s-5.003 0-6.25.337A2.01 2.01 0 0 0 .335 4.124C0 5.380 0 8 0 8s0 2.620.335 3.876a2.010 2.010 0 0 0 1.415 1.423c1.247.337 6.250.337 6.250.337s5.003 0 6.250-.337a2.010 2.010 0 0 0 1.415-1.423C16 10.620 16 8 16 8s0-2.620-.335-3.876zM6.364 10.380V5.620L10.545 8l-4.181 2.380z" />
    </svg>
  )
}

const socials = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/draft-dev',
    Icon: SocialIconLinkedIn,
  },
  { name: 'X', href: 'https://x.com/draftdev', Icon: SocialIconX },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@Draftdev',
    Icon: SocialIconYouTube,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/draftdev/',
    Icon: SocialIconFacebook,
  },
]

function SocialLinks() {
  return (
    <div className="flex items-center gap-x-5">
      {socials.map(({ name, href, Icon }) => (
        <Link
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit us on ${name}`}
          className="text-white/75 transition hover:text-white"
        >
          <Icon className="size-5" />
        </Link>
      ))}
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-gradient-brand relative isolate overflow-hidden text-white">
      {/* Soft glow for depth, same as the case study hero */}
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-40 -z-10 h-[32rem] w-[32rem] rounded-full bg-amber-300/15 blur-3xl"
      />
      <Container className="relative">
        <CallToAction />
        <div className="border-t border-white/20">
          {/* Brand and email list side by side */}
          <div className="flex flex-col gap-8 pt-14 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <Link href="/" title="Home" className="inline-block">
                <Image
                  src="/draft/logos/draftlogo_clean_white.svg"
                  alt="Draft.dev"
                  width={160}
                  height={64}
                />
              </Link>
              <p className="mt-4 max-w-xs text-[15px]/6 text-white/75">
                Technical content and growth marketing for developer tools.
              </p>
            </div>
            <NewsletterSignup />
          </div>
          <div className="pt-14 pb-14">
            <Sitemap />
          </div>
        </div>
      </Container>
      <div className="border-t border-white/20">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
            <p className="text-sm/6 text-white/75">
              &copy; {new Date().getFullYear()} Draft.dev ·{' '}
              <Link
                href="/privacy-policy"
                className="transition hover:text-white"
              >
                Privacy Policy
              </Link>
            </p>
            <SocialLinks />
          </div>
        </Container>
      </div>
    </footer>
  )
}
