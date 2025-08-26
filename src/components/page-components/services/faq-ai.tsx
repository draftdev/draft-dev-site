import Link from 'next/link'

type FAQ = {
  id: number
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "Can't AI content be edited to seem human?",
    answer:
      "Light editing doesn't fix fundamental AI content problems: lack of original insights, inaccurate technical details, no real-world experience, generic examples, and lack of technical nuance. Developers and search engines detect patterns beyond surface-level text. Heavy editing takes more time than writing from scratch, defeating the supposed efficiency gain. Plus, Google's AI detection is getting better weekly.",
  },
  {
    id: 2,
    question: 'How do search engines detect AI content?',
    answer:
      'Google uses multiple signals including pattern analysis (AI has predictable structures), lack of originality (same ideas across web), technical inconsistencies (plausible but wrong details), missing E-E-A-T signals (no genuine expertise), and user behavior metrics (high bounce rates).',
  },
  {
    id: 3,
    question: 'What about using AI as a starting point?',
    answer:
      'Even AI-assisted content carries risks. The AI foundation limits originality, introduces subtle errors experts must catch, creates similar content to competitors, and still triggers some detection algorithms. Our writers use AI for research and grammar checking, never for content generation. The difference in quality and authenticity is immediately apparent.',
  },
  {
    id: 4,
    question: 'How can developers tell content is AI-generated?',
    answer:
      "Developers recognize AI patterns instantly: overly structured format (intro, 3 points, conclusion), generic examples everyone uses, technically correct but practically useless advice, lack of war stories and edge cases, and no strong opinions or unique perspectives. They've seen thousands of AI articles, and they know the smell.",
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
