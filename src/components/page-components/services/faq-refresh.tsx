import Link from 'next/link'

type FAQ = {
  id: number
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: 'How do you identify which content needs refreshing?',
    answer:
      'We analyze your Google Analytics and Search Console data to identify pages with declining traffic, lost rankings, or high bounce rates. We prioritize content that previously drove significant traffic, has existing backlinks, targets valuable keywords, and shows quick-win potential for recovery.',
  },
  {
    id: 2,
    question: "What's included in a content refresh?",
    answer:
      'Each refresh includes technical accuracy updates, new code examples and high-quality screenshots, SEO optimization for the most recent Google updates, enhanced structure for featured snippets and AI overviews, updated statistics and benchmarks, improved CTAs and conversion elements, and fresh internal linking strategies.',
  },
  {
    id: 3,
    question: 'How quickly will I see results from content refreshes?',
    answer:
      'Most clients see initial improvements within 2-4 weeks as search engines recrawl and reindex the updated content. Full impact typically materializes within 60-90 days. Pages with existing authority often see 200-400% traffic increases within the first quarter post-refresh.',
  },
  {
    id: 4,
    question: 'How is this different from creating new content?',
    answer:
      'Content refreshes leverage your existing domain authority, backlinks, and indexed pages. This means faster results, lower costs (typically 40% less than new content), preservation of existing SEO equity, and immediate impact on conversions. New content takes 6-12 months to mature; refreshes show results in weeks.',
  },
  {
    id: 5,
    question: 'How often should technical content be refreshed?',
    answer:
      "Technical content should be reviewed every 12-24 months, with high-traffic pages checked more often if possible. Fast-moving topics (frameworks, cloud services) need updates every 6-12 months. We provide a refresh calendar based on your content's performance metrics and topic volatility.",
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
