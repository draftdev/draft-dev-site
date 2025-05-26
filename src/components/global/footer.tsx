import { Container } from '@/components/global/container'
import { Link } from '@/components/global/link'
import NewsletterSmall from '../media/newsletter-small'
import { Button } from './button'

function CallToAction() {
  return (
    <div className="-mt-34 md:pb-22 -mx-4 pb-20 lg:-mx-8">
      <div className="mx-auto max-w-7xl">
        <div className="-m-2 rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
          <div className="rounded-4xl p-2 shadow-md shadow-black/5">
            <div className="overflow-hidden rounded-3xl bg-gradient-brand p-12 shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
              <hgroup>
                <h2 className="header-light my-6 text-center text-3xl tracking-tight sm:text-5xl">
                  Want to learn more about how we work?
                </h2>
              </hgroup>

              <div className="mt-12 text-center">
                <Button
                  className="w-full bg-transparent text-white ring-2 ring-white hover:bg-white hover:text-gray-600 sm:w-auto"
                  href="/call"
                >
                  Book a Discovery Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
function SitemapHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm/6 font-bold text-white">{children}</h3>
}

function SitemapLinks({ children }: { children: React.ReactNode }) {
  return <ul className="mt-6 space-y-2 text-sm/6">{children}</ul>
}

function SitemapLink(props: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <li>
      <Link
        {...props}
        className="font-medium text-white data-[hover]:text-gray-300"
      />
    </li>
  )
}

function Sitemap() {
  return (
    <>
      <div>
        <SitemapHeading>
          <span className="sitemap-heading">Tech Content</span>
        </SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="/content-types">Content Types</SitemapLink>
          <SitemapLink href="/blog-posts">Blog Content</SitemapLink>
          <SitemapLink href="/tutorials">Tutorials</SitemapLink>
          <SitemapLink href="/video-tutorials">Video Tutorials</SitemapLink>
          <SitemapLink href="/learn/technical-ebooks">E-Books</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>
          <span className="sitemap-heading">Company</span>
        </SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="/about">Our Team</SitemapLink>
          <SitemapLink href="/write">Write for Draft.dev</SitemapLink>
          <SitemapLink href="#faq">Frequently Asked Questions</SitemapLink>
          <SitemapLink href="/privacy-policy">Privacy Policy</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>
          <span className="sitemap-heading">Resources</span>
        </SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="/learn">Draft.dev Blog</SitemapLink>
          <SitemapLink href="/newsletter">Newsletter</SitemapLink>
          <SitemapLink href="/webinars">Webinars</SitemapLink>
          <SitemapLink href="/resources">Free Resources</SitemapLink>
          <SitemapLink href="/playbook">Tech Content Playbook</SitemapLink>
          <SitemapLink href="/ideas">
            50 Winning Ideas for Your Startup's Blog
          </SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>
          <span className="sitemap-heading">Learn more</span>
        </SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="/case-studies">Case Studies</SitemapLink>
          <SitemapLink href="https://draft.dev/#testimonials">
            Testimonials
          </SitemapLink>
          <SitemapLink href="/call">Book a Discovery Call</SitemapLink>
        </SitemapLinks>
      </div>
    </>
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

function SocialLinks() {
  return (
    <>
      <Link
        href="https://www.facebook.com/draftdev/"
        target="_blank"
        aria-label="Visit us on Facebook"
        className="text-white data-[hover]:text-gray-300"
      >
        <SocialIconFacebook className="size-4" />
      </Link>
      <Link
        href="https://x.com/draftdev"
        target="_blank"
        aria-label="Visit us on X"
        className="text-white data-[hover]:text-gray-300"
      >
        <SocialIconX className="size-4" />
      </Link>
      <Link
        href="https://www.linkedin.com/company/draft-dev"
        target="_blank"
        aria-label="Visit us on LinkedIn"
        className="text-white data-[hover]:text-gray-300"
      >
        <SocialIconLinkedIn className="size-4" />
      </Link>
    </>
  )
}

function Copyright() {
  return (
    <div className="bg-white/15 py-1 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
      <div className="shadow-md shadow-black/5">
        <div className="text-center text-sm/6 text-white">
          &copy; {new Date().getFullYear()} Draft.dev
        </div>
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <>
      <div className="relative z-10">
        <CallToAction />
      </div>

      {/* Actual footer content */}
      <footer className="relative -mt-64 bg-gradient-brand pt-36">
        <Container className="relative text-white">
          <div className="pb-16 pt-24">
            <hr className="mt-16 border-t border-gray-200/20" />
            {/* <Link href="/" title="Home">
              <Image
                src="/draft/logos/draftlogo_clean_white.svg"
                alt="Logo"
                width={180}
                height={72}
                priority
              />
            </Link> */}
            <div className="grid grid-cols-2 gap-y-10 pb-6 lg:grid-cols-6 lg:gap-16">
              <div className="col-span-2">
                <NewsletterSmall />
              </div>
              <div className="col-span-2 grid grid-cols-2 gap-x-6 gap-y-12 lg:col-span-4 lg:grid-cols-subgrid lg:pt-16">
                <Sitemap />
              </div>
            </div>
          </div>
        </Container>
        <div className="bg-gradient-brand">
          <Copyright />
        </div>
      </footer>
    </>
  )
}
