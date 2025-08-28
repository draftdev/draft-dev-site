import Link from 'next/link'
import { JSX } from 'react'

type FAQ = {
  id: number
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: 'Do freelancers cost less than an agency?',
    answer:
      "Not when you factor in total costs. While freelancer rates might seem lower ($0.10-0.50/word), add in your time finding writers (5 hours), managing them (15 hours/week), editing inconsistent work (3 hours/piece), and handling failures (20% require complete rewrites). Draft.dev's all-in pricing includes everything. Writing, editing, project management, and guaranteed quality.",
  },
  {
    id: 2,
    question: 'Can I find specialized freelancers for my technical topics?',
    answer:
      'Finding one great freelancer is possible. Finding 10 who are equally good, reliable, and available is nearly impossible. Our network includes 300+ pre-vetted technical writers covering every major technology, framework, and platform. We match the right expert to each piece while maintaining consistent quality standards across all content.',
  },
  {
    id: 3,
    question: 'What if I already have freelancers I like working with?',
    answer:
      'Keep them! We complement existing freelancer relationships by handling overflow work, filling expertise gaps, providing backup when freelancers are unavailable, and maintaining quality standards across all writers. Many clients use their favorite freelancers for specialized content while we handle volume production.',
  },
  {
    id: 4,
    question: 'How does Draft.dev maintain quality across so many writers?',
    answer:
      'Every writer is technically vetted and each piece goes through our 5-step quality process: expert writer matching, technical review by subject matter experts, professional editing for clarity and voice, SEO optimization, and final quality check. Your content manager reviews one polished piece, not multiple rough drafts. This systematic approach ensures consistency regardless of the individual writer.',
  },
  {
    id: 5,
    question: 'Is Draft.dev more expensive than hiring freelancers directly?',
    answer:
      'Our per-piece pricing is higher than many freelancer rates, but the real savings come from eliminated management overhead (15+ hours/week), no failed content or rewrites (20% with freelancers), faster time-to-publish (2 weeks vs 4-6 weeks), and better content performance (3x average engagement). ROI typically improves by 200-300% compared to working with individual freelancers.',
  },
]

export default function FAQ(): JSX.Element {
  return (
    <div id="faq" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto">
          <h2 className="subheader-gradient text-2xl sm:text-4xl" id="faq">
            Frequently asked questions
          </h2>
          <p className="lg:lead-dark max-w-5xl text-lg text-gray-700">
            <span className="font-semibold">
              Have a different question or can't find the answer you're looking
              for?
            </span>{' '}
            <Link
              href="https://draft.dev/call"
              className="hover:text-gradient-brand text-secondary font-semibold underline"
            >
              Book a discovery call
            </Link>{' '}
            to learn more.
          </p>

          <p className="p-dark text-base sm:text-lg"></p>
          <div className="mt-12">
            <dl className="space-y-12 sm:grid sm:grid-cols-2 sm:space-y-0 sm:gap-x-6 sm:gap-y-10 lg:gap-x-10">
              {faqs.map((faq) => (
                <div key={faq.id}>
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
