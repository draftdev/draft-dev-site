import Link from 'next/link'

type FAQ = {
  id: number
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    id: 1,
    question:
      'Why is paid content promotion better than traditional ads for developers?',
    answer:
      'Developers trust content, not ads. They use ad blockers at 3x the average rate and ignore traditional advertising. But they actively seek valuable content in newsletters, communities, and publications. By promoting content rather than products, we provide value first, building trust that converts to pipeline. Our approach tends to drive better ROI and brand awareness than traditional B2B advertising.',
  },
  {
    id: 2,
    question: 'Which promotion channels do you work with?',
    answer:
      'We work with 50+ developer newsletters (TLDR, Pointer, Changelog, etc.) and developer content platforms like Dev.to, HackerNews, and Reddit. We continuously test new channels and only recommend those with proven ROI.',
  },
  {
    id: 3,
    question: 'How do you ensure content resonates with each audience?',
    answer:
      'We customize content for each channel based on audience analysis, format preferences (tutorials vs. thought leadership), tone and technical depth, headline optimization for each platform, and CTA alignment with audience intent. One piece of content might have 5-10 variations, each optimized for its specific placement.',
  },
  {
    id: 4,
    question: 'How much should we budget for content promotion?',
    answer:
      '$5-10K/month delivers meaningful results for most clients. This typically covers 2-3 newsletter placements, ongoing community engagement, niche site sponsorships, and campaign optimization. We recommend starting with a small budget to test, then scaling winning campaigns to maximize impact.',
  },
  {
    id: 5,
    question: 'How do you track and attribute results?',
    answer:
      "We work with clients to implement standard tracking measures including UTM parameters, dedicated landing pages, and detailed reporting. You'll know exactly which channels, content, and campaigns drive results.",
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
