import Link from 'next/link'

type FAQ = {
  id: number
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "Can't generic agencies just hire technical writers?",
    answer:
      "They try, but fail for three reasons: Real technical experts earn $150-300K+ in engineering roles and won't work for agency writer rates. Agencies can't evaluate technical competence; they don’t know if code examples work or concepts are explained correctly. One expert isn't enough. You need specialists in different technologies, and agencies can't maintain that benchmark. The result is always 'technical-ish' content that doesn't fool actual developers.",
  },
  {
    id: 2,
    question: "Don't SEO agencies get better search rankings though?",
    answer:
      "Generic SEO tactics actually hurt technical content. Keyword stuffing makes content unreadable for developers. Short, shallow posts don't provide real value. Over-optimization triggers developer skepticism. Draft.dev provides deep, valuable content that developers actually want to read, and performs 3-4x better in both rankings and conversions because search engines now prioritize user engagement over keyword density.",
  },
  {
    id: 3,
    question: 'How can Draft.dev match an SEO agencies content volume?',
    answer:
      'Quality beats quantity with developer audiences. One comprehensive, technically excellent piece outperforms 10 shallow SEO posts. It gets shared in communities, linked by developers, and drives sustained organic traffic. Our clients typically see better results from 4 high-quality pieces monthly than competitors get from 20 generic posts. Plus, our 300+ writer network can scale to any volume needed.',
  },
  {
    id: 4,
    question: 'What about SEO agencies that claim technical expertise?',
    answer:
      "Ask to see their writers' GitHub profiles, technical backgrounds, and code examples. Most agencies outsource to the same pool of general freelancers or use AI tools with light editing. Our writers have average 8+ years of development experience, maintain active GitHub profiles, contribute to open source, and stay current with technology trends. The difference is immediately visible in the content quality.",
  },
  {
    id: 5,
    question:
      "Isn't technical content from developers too complex for marketing goals?",
    answer:
      "That's why Draft.dev pairs technical expertise with marketing strategies. Our writers understand both code and conversions. Content is technically accurate AND strategically structured for marketing goals. We translate complex concepts clearly without dumbing them down. Every piece balances depth with accessibility. The result: content that developers respect and that drives business results.",
  },
]

export default function FAQ(): JSX.Element {
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
              className="hover:text-gradient-brand font-semibold text-secondary underline"
            >
              Book a discovery call
            </Link>{' '}
            to learn more.
          </p>

          <p className="p-dark"></p>
          <div className="mt-12">
            <dl className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-10">
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
