import Image from 'next/image'
import Link from 'next/link'

// Footer following gushwork.ai's structure — link columns left, a contact /
// newsletter column right, then a hairline with copyright on the left and
// social icons + legal on the right — on a white background. All links and
// content carried over from the previous footer.

const COLUMNS: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    heading: 'Selected Resources',
    links: [
      { href: '/distributing-content-on-social-media', label: 'Content Distribution Strategy' },
      { href: '/trello-content-calendar-template', label: 'Trello Content Calendar Template' },
      { href: '/asana-content-calendar-template', label: 'Asana Content Calendar Template' },
      { href: '/airtable-content-calendar-template', label: 'Airtable Content Calendar Template' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/case-studies', label: 'Case Studies' },
      { href: '/#how-we-work', label: 'See Our Process' },
      { href: '/call', label: 'Book a Discovery Call' },
    ],
  },
]

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

const SOCIALS = [
  { href: 'https://www.linkedin.com/company/draft-dev', label: 'Visit us on LinkedIn', Icon: SocialIconLinkedIn },
  { href: 'https://x.com/draftdev', label: 'Visit us on X', Icon: SocialIconX },
  { href: 'https://www.facebook.com/draftdev/', label: 'Visit us on Facebook', Icon: SocialIconFacebook },
]

export default function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1.3fr] lg:gap-8">
          <div>
            <Link href="/" aria-label="Draft.dev home">
              <Image
                src="/draft/logos/draftlogo_clean_brand.svg"
                alt="Draft.dev"
                width={160}
                height={28}
                className="h-7 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-gray-500">
              Trusted by 100+ tech companies. Over 300 engineers writing your
              technical content.
            </p>
            {/* TODO: replace dummy contact details with the real ones. */}
            <address className="mt-6 space-y-3 text-sm leading-relaxed text-gray-500 not-italic">
              <p>
                Draft.dev Inc, 123 Market Street, Suite 400,
                <br />
                San Francisco, CA 94103, United States
              </p>
              <p className="space-y-1">
                <a
                  href="tel:+15550123456"
                  className="block transition hover:text-gray-900"
                >
                  +1 (555) 012-3456
                </a>
                <a
                  href="mailto:hello@draft.dev"
                  className="block transition hover:text-gray-900"
                >
                  hello@draft.dev
                </a>
              </p>
            </address>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-semibold text-gray-900">{col.heading}</h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-gray-500 transition hover:text-gray-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              Draft.dev Newsletter
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-gray-500">
              Join over 3,000 subscribers and get our resources, tips, and case
              studies to help you reach developers. Delivered to your inbox
              every month.
            </p>
            <Link
              href="/newsletter"
              className="border-primary text-primary hover:bg-primary mt-5 inline-block rounded-full border px-5 py-2.5 text-sm font-semibold transition hover:text-white"
            >
              Sign up for our Newsletter
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-gray-200 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Draft.dev | All Rights Reserved
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-500 transition hover:text-gray-900"
            >
              Privacy Policy
            </Link>
            <div className="flex items-center gap-4">
              {SOCIALS.map(({ href, label, Icon }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className="text-gray-400 transition hover:text-gray-900"
                >
                  <Icon className="size-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gushwork-style giant wordmark bleeding off the bottom edge. */}
      <div
        aria-hidden="true"
        className="pointer-events-none relative h-20 select-none overflow-hidden sm:h-40 lg:h-60"
      >
        <span className="absolute top-[-0.14em] left-1/2 -translate-x-1/2 text-[22vw] leading-none font-extrabold tracking-tighter whitespace-nowrap text-gray-100 lg:text-[19vw]">
          DRAFT.DEV
        </span>
      </div>
    </footer>
  )
}
