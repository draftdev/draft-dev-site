import Link from 'next/link'

type FAQ = {
  id: number
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "What's included in a content strategy engagement?",
    answer:
      'Our comprehensive strategy includes stakeholder alignment, content audit and competitive analysis, editorial calendar and workflow design, content templates and style guides, measurement framework and dashboards, and monthly analytics and strategy reviews. Everything needed to build and scale a successful technical content program.',
  },
  {
    id: 2,
    question: 'How long does strategy development take?',
    answer:
      'Initial strategy development takes 2-4 weeks: Weeks 1-2 for discovery and research, Weeks 3-4 for presentation and approval. We then provide ongoing support to ensure successful execution.',
  },
  {
    id: 3,
    question: 'How do you align DevRel and marketing goals?',
    answer:
      "We create shared success metrics that value both community engagement and business outcomes. Our framework includes unified personas that capture developer needs and buying behaviors, content mapping that serves educational and commercial intent, collaborative workflows that leverage each team's strengths, and balanced KPIs that measure trust-building alongside pipeline generation.",
  },
  {
    id: 4,
    question: 'Can you help with limited resources?',
    answer:
      'Absolutely. We specialize in lean content strategies that maximize impact with minimal resources. This includes prioritization frameworks for highest-ROI content, automation and template systems, community contribution programs, content repurposing strategies, and phased implementation plans that show quick wins while building toward larger goals.',
  },
  {
    id: 5,
    question: 'How do you measure content strategy success?',
    answer:
      'We track both leading and lagging indicators across marketing and product metrics including traffic, leads, activation, retention, and expansion. Dashboards are reviewed with you monthly to provide visibility and solicit discussion into performance.',
  },
  {
    id: 6,
    question: 'Do you work with existing content teams?',
    answer:
      "Yes, we're designed to augment and enable your existing teams. We can provide strategy only with your team executing, hybrid model with shared responsibilities, full execution of the strategy, or train your team to become self-sufficient. Our goal is to build sustainable content programs that thrive long after our engagement.",
  },
]

export default function FAQ() {
  return (
    <div id="faq" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto">
          <h2 className="subheader-gradient scroll-mt-32" id="faq">
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

          <p className="p-dark"></p>
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
