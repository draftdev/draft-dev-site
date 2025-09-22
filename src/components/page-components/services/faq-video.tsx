import Link from 'next/link'

type FAQ = {
  id: number
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: 'What types of product videos do you create?',
    answer:
      'We produce quick-start guides, feature demos, integration tutorials, use case walkthroughs, and micro-videos for social media. We don’t currently produce personality-driven or “talking head” style videos, but it’s something we’re exploring in the future.',
  },
  {
    id: 2,
    question:
      'How do you ensure technical accuracy while maintaining marketing impact?',
    answer:
      'Our team includes both technical experts (typically practicing software engineers) and product marketers. We start with your product documentation and access, collaborate with your product team for accuracy, apply marketing psychology and conversion principles, and test videos with real developers before final delivery.',
  },
  {
    id: 3,
    question: 'What ROI can we expect from product marketing videos?',
    answer:
      'Clients see a reduction in support tickets, 2-3x improvement in trial-to-paid conversion, 20-40% shorter sales cycles, 60% decrease in demo requests for basic features, and 4x higher engagement than text documentation. Videos also serve as evergreen sales enablement tools.',
  },
  {
    id: 4,
    question: 'How long does it take to produce a product video?',
    answer:
      'Standard timeline is 3-6 weeks per video depending on what source material is already available. Week 1-3 is used for research and scripting, Week 2 for recording and initial edit, Week 3 for revisions and graphics, Week 4 for final delivery and revisions.',
  },
  {
    id: 5,
    question: 'Can you match our existing brand and video style?',
    answer:
      'Absolutely. We adapt to your brand guidelines including visual style, tone of voice, existing intro/outro sequences, and platform requirements. We can either match your current style exactly or help evolve it for better engagement. All videos maintain consistency with your brand identity.',
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
