import Link from 'next/link'
import type { ReactNode } from 'react'

type FAQ = {
  id: number
  question: string
  // Page FAQs can pass JSX, for example an answer with a link
  answer: ReactNode
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: 'What kind of content does Draft.dev actually produce?',
    answer:
      'We create a wide range of content focused on helping technical buyers evaluate, adopt, and grow with your product. This includes blog posts and tutorials, comparison pages, landing pages and onboarding content, technical product guides and use case deep-dives, thought leadership pieces, lead magnets and gated assets, content refreshes and SEO-optimized pages, and more. We tailor content formats and tone based on your goals, audience, and funnel stage.',
  },
  {
    id: 2,
    question: 'Who writes the content? Are they technical enough?',
    answer:
      'Every piece starts with deep research. Then one of our 300+ engineers, who are subject matter experts, checks the technical accuracy, builds and tests the code, and reads the whole piece as a developer would. A technical editor then polishes it to match your brand guidelines.',
  },
  {
    id: 3,
    question: 'How soon do we see content after we start?',
    answer:
      'You’ll get your first pieces within 3 weeks of kickoff. We’ll spend the first 1–2 weeks aligning on goals, messaging, and the content roadmap so we’re not writing in a vacuum. After that, we aim for a consistent weekly publishing cadence. Publishing 2x weekly is the first core discipline of a successful content operation.',
  },
  {
    id: 4,
    question: 'How much of my team’s time will this require?',
    answer:
      ' We’re built to minimize internal lift. You’ll typically need to attend a kickoff call, review and approve a quarterly roadmap, and provide occasional feedback on draft content (we handle the rest). We offer full CMS publishing, distribution, and social media asset creation, so you can focus on other growth initiatives and closing the leads we’re driving.',
  },
  {
    id: 5,
    question: 'How do you measure success?',
    answer:
      ' Success depends on your goals, but we typically track traffic to key content, lead magnet downloads, demo or trial signups from content, engagement via newsletters, shares, or backlinks, and movement of content-informed leads down the funnel. We hold monthly analytics check-ins to evaluate what’s working and adjust the roadmap accordingly.',
  },
  {
    id: 6,
    question: 'Can we start small and scale up later?',
    answer:
      'Yes. Many of our clients start small as a test, adding in paid growth options over time. We offer plans starting at $9K/month with an initial minimum commitment of 3 months.',
  },
]

type FAQProps = {
  // Page-specific questions, shown above the standard ones
  pageFaqs?: Omit<FAQ, 'id'>[]
  // Outer spacing. The default leaves room for the footer CTA, which overlaps
  // the section above it; pass tighter spacing when FAQ isn't the last section.
  className?: string
  // Where "Book a discovery call" points; pages with an on-page booking
  // section can pass a jump link instead
  callHref?: string
  title?: string
  headingClassName?: string
  // Two flowing columns, so a short answer next to a long one leaves no gap
  masonry?: boolean
  // Service pages turn this off and pass only their own questions, since
  // the standard ones (pricing included) are about technical content
  standardFaqs?: boolean
}

export default function FAQ({
  pageFaqs = [],
  className = 'mb-24 py-16',
  callHref = 'https://draft.dev/call',
  title = 'Frequently asked questions',
  headingClassName = 'subheader-gradient',
  masonry = false,
  standardFaqs = true,
}: FAQProps) {
  const allFaqs = [
    ...pageFaqs.map((faq, i) => ({ ...faq, id: -(i + 1) })),
    ...(standardFaqs ? faqs : []),
  ]

  return (
    <div id="faq" className={className}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto">
          <h2 className={`${headingClassName} scroll-mt-32`} id="faq">
            {title}
          </h2>
          <p className="lg:lead-dark max-w-5xl text-lg text-gray-700">
            <span className="font-semibold">
              Have a different question and can't find the answer you're looking
              for?
            </span>{' '}
            <Link
              href={callHref}
              className="hover:text-gradient-brand text-secondary font-semibold underline"
            >
              Book a discovery call
            </Link>{' '}
            to learn more.
          </p>

          <p className="p-dark"></p>
          <div className="mt-12">
            <dl
              className={
                masonry
                  ? 'space-y-10 sm:columns-2 sm:space-y-0 sm:gap-x-10 lg:gap-x-14'
                  : 'space-y-12 sm:grid sm:grid-cols-2 sm:space-y-0 sm:gap-x-6 sm:gap-y-10 lg:gap-x-10'
              }
            >
              {allFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className={
                    masonry ? 'break-inside-avoid sm:mb-10' : undefined
                  }
                >
                  <dt className="text-lg font-semibold text-gray-600">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
