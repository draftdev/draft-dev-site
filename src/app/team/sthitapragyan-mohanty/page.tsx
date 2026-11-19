import { getAuthorPageUrl, getAuthorProfileBySlug } from '@/app/lib/authors'
import { PUBLISHER_REF, stringifySchemas } from '@/app/lib/schema'
import { getWpPostsByAuthor } from '@/app/lib/wordpress'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

// Re-check WordPress hourly so new posts by this author show up
export const revalidate = 3600

// Author page. Bio and links come from the approved author-page brief and
// Sthitapragyan's professional background document (links checked 13 Nov 2026).
// Blog posts are listed when their WordPress byline matches this author's
// profile in src/app/lib/authors.ts.
const profile = getAuthorProfileBySlug('sthitapragyan-mohanty')

const person = {
  name: profile.name,
  jobTitle: 'Head of Growth',
  url: getAuthorPageUrl(profile),
  photo: '/draft/team/sthitapragyan_mohanty_draft_dev.jpg',
  linkedin: profile.linkedin as string,
}

function formatPostDate(date: string) {
  const parsed = new Date(date)
  if (Number.isNaN(parsed.getTime())) return null
  return parsed.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

const bio = [
  'Sthitapragyan Mohanty is Head of Growth at Draft.dev, a go-to-market agency for developer tools and AI platforms whose clients include HP, Qualcomm, Cloudflare, Docker, JetBrains, Zoho, and Supabase. He leads go-to-market, SEO, AI search visibility, content strategy, and demand generation.',
  'He has worked in B2B growth and marketing since 2018 across ten organizations, from enterprise fintech to early-stage AI startups. At HighRadius, an enterprise finance-automation company, he rose from Senior Executive, Growth Marketing to Principal, Content & Analytics, helping launch and scale the FINsider newsletter for CFOs and finance leaders to more than 100,000 subscribers in six months, and SEO-optimizing 30+ product pages for a 150% increase in organic traffic. In 2026, he built the marketing function from zero at Kutlerri.ai, a restaurant intelligence platform, and advised Binocs and CodePraxis on growth. Earlier, he built the growth team at CarbonMinus and founded Indexify.',
  'He holds a B.Tech in Engineering Physics from IIT Bombay with a Minor in Marketing, and a gold-medal MA in Journalism & Mass Communication from Birla Global University. He is CXL-certified in Google Analytics and CRO & Experimentation, was a guest on the Learning Stories podcast, and is the author of two poetry collections, I Was Born Human (2020) and Ghats and Ganges (2023). He is based in India.',
  'He writes and speaks on developer marketing, SEO and AI search, B2B SaaS go-to-market, newsletter growth, CFO-audience marketing, and early-stage AI startup positioning.',
]

const media = [
  {
    type: 'Podcast',
    title: 'Learning Stories, Episode 43',
    detail:
      'How to Become a Full Stack Marketer in India. A one-hour interview, October 30, 2024.',
    links: [
      {
        text: 'Watch on YouTube',
        href: 'https://www.youtube.com/watch?v=blkfL8ytCr8',
      },
      {
        text: 'Listen on Audible',
        href: 'https://audible.com.au/podcast/43-Sthitapragyan-Mohanty-on-How-to-Become-a-Full-Stack-Marketer-in-India/B0DLJ5Y8NM',
      },
    ],
  },
  {
    type: 'Book',
    title: 'Ghats and Ganges',
    detail: 'Poetry collection, 2023.',
    links: [
      {
        text: 'View on Amazon',
        href: 'https://www.amazon.com/dp/B0CR96FHG6',
      },
    ],
  },
  {
    type: 'Book',
    title: 'I Was Born Human',
    detail: 'Poetry collection, 2020.',
    links: [
      {
        text: 'View on Amazon',
        href: 'https://www.amazon.in/was-born-human-Sthitapragyan-Mohanty/dp/B08KHQFTHK',
      },
    ],
  },
]

const title = `${person.name}, ${person.jobTitle} - Draft.dev`
const description =
  'Sthitapragyan Mohanty is Head of Growth at Draft.dev. He leads go-to-market, SEO, AI search visibility, content strategy, and demand generation for developer tools and AI platforms.'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title,
  description,
  openGraph: {
    type: 'profile',
    url: person.url,
    siteName: 'Draft.dev',
    locale: 'en_US',
    title,
    description,
    firstName: 'Sthitapragyan',
    lastName: 'Mohanty',
    images: [
      {
        url: person.photo,
        width: 600,
        height: 600,
        alt: `${person.name}, ${person.jobTitle} at Draft.dev`,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title,
    description,
    images: [person.photo],
    site: '@draftdev',
  },
  alternates: { canonical: person.url },
  robots: { index: true, follow: true },
}

// ProfilePage with the Person as its main entity
const schema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  url: person.url,
  mainEntity: {
    '@type': 'Person',
    '@id': `${person.url}#person`,
    name: person.name,
    jobTitle: person.jobTitle,
    url: person.url,
    image: `https://draft.dev${person.photo}`,
    description,
    worksFor: {
      '@type': 'Organization',
      '@id': PUBLISHER_REF,
      name: 'Draft.dev',
      url: 'https://draft.dev',
    },
    sameAs: [person.linkedin],
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'IIT Bombay' },
      { '@type': 'CollegeOrUniversity', name: 'Birla Global University' },
    ],
  },
}

export default async function SthitapragyanMohanty() {
  const posts = await getWpPostsByAuthor(profile.slug)

  return (
    <>
      {stringifySchemas([schema]).map((json, i) => (
        <script
          key={`schema-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: json }}
        />
      ))}

      {/* Header: photo, name, title, LinkedIn */}
      <section className="bg-gradient-brand relative isolate overflow-hidden py-12 sm:py-16">
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-amber-300/20 blur-3xl"
        />
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 text-center sm:flex-row sm:text-left lg:px-8">
          <div className="size-40 shrink-0 rounded-full bg-white/60 p-1 shadow-xl sm:size-48">
            <Image
              src={person.photo}
              alt={`${person.name}, ${person.jobTitle} at Draft.dev`}
              width={384}
              height={384}
              priority
              className="size-full rounded-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-widest text-amber-300 uppercase">
              <Link href="/about" className="hover:text-amber-200">
                Draft.dev Team
              </Link>
            </p>
            <h1 className="font-code mt-3 text-3xl font-semibold text-white sm:text-5xl">
              {person.name}
            </h1>
            <p className="mt-3 text-lg text-white/90 sm:text-xl">
              {person.jobTitle}, Draft.dev
            </p>
            <a
              href={person.linkedin}
              target="_blank"
              rel="me noopener noreferrer"
              className="mt-6 inline-flex items-center gap-x-2 rounded-md bg-amber-400 px-5 py-3 text-base font-semibold text-gray-900 shadow-lg shadow-black/20 transition hover:bg-amber-300"
            >
              Connect on LinkedIn
              <ArrowTopRightOnSquareIcon
                aria-hidden="true"
                className="size-5"
              />
            </a>
          </div>
        </div>
      </section>

      <main>
        {/* Bio */}
        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="subheader-mobile-gradient sm:subheader-gradient">
              About Sthitapragyan
            </h2>
            <div className="mt-6 space-y-5 text-lg text-gray-700">
              {bio.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
              <p>
                Connect with him on LinkedIn:{' '}
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="text-secondary font-semibold break-all underline underline-offset-4"
                >
                  linkedin.com/in/sthitapragyan-mohanty-1278b5a6
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Articles: blog posts whose WordPress byline is this author */}
        {posts.length > 0 && (
          <section className="bg-[#f4f1f8] py-12 sm:py-16">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
              <h2 className="subheader-mobile-gradient sm:subheader-gradient text-center">
                Articles by Sthitapragyan
              </h2>
              <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                {posts.map((post) => {
                  const date = formatPostDate(post.date)
                  return (
                    <li
                      key={post.id}
                      className="group relative flex flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#5e5285]/10 transition hover:shadow-md"
                    >
                      {date && (
                        <time
                          dateTime={post.date}
                          className="font-code text-secondary text-sm font-semibold tracking-widest uppercase"
                        >
                          {date}
                        </time>
                      )}
                      <h3 className="mt-3 text-xl font-semibold text-gray-900 group-hover:text-gray-600">
                        <Link href={`/learn/${post.slug}`}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </Link>
                      </h3>
                      {post.excerpt && (
                        <div
                          className="mt-2 line-clamp-3 text-base text-gray-600 [&_p]:m-0 [&_p]:inline"
                          dangerouslySetInnerHTML={{ __html: post.excerpt }}
                        />
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </section>
        )}

        {/* Media */}
        <section
          className={`${posts.length > 0 ? 'bg-white' : 'bg-[#f4f1f8]'} py-12 sm:py-16`}
        >
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <h2 className="subheader-mobile-gradient sm:subheader-gradient text-center">
              Media
            </h2>
            <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {media.map((item) => (
                <li
                  key={item.title}
                  className="flex flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#5e5285]/10"
                >
                  <p className="font-code text-secondary text-sm font-semibold tracking-widest uppercase">
                    {item.type}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 grow text-base text-gray-600">
                    {item.detail}
                  </p>
                  <div className="mt-5 flex flex-col gap-2">
                    {item.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary inline-flex items-center gap-x-1.5 text-base font-semibold hover:underline"
                      >
                        {link.text}
                        <ArrowTopRightOnSquareIcon
                          aria-hidden="true"
                          className="size-4"
                        />
                      </a>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}
