import Link from 'next/link'

type FAQ = {
  id: number
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: 'How quickly can we get started?',
    answer:
      'Typically, onboarding takes 6-9 weeks between when we sign a statement of work and when your first article is completed. After that, new content will be delivered every week based on your plan. You can see our whole process on our blog.',
  },
  {
    id: 2,
    question: 'What if we want more content?',
    answer:
      'Not a problem. Our standard packages are just a starting point, but we have clients doing anywhere from 12-48 blog posts every quarter.',
  },
  {
    id: 3,
    question: 'What if we just want to try Draft.dev out?',
    answer:
      "We don't offer trials, but we have an extensive catalog of samples we can share. A few are available here, but we can share many more upon request.",
  },
  {
    id: 4,
    question: "What if we don't like an article you send us?",
    answer:
      "We stand by our satisfaction guarantee. If you're ever unsatisfied, we'll work with you to make it right. If we cannot fix the content within two rounds of revisions, we'll offer a complete rewrite or refund for the piece.",
  },
  {
    id: 5,
    question: 'How do payments work?',
    answer:
      'You can opt to either pay a single invoice at the start of each quarter or create a monthly payment plan. Other payment options are available for an additional fee.',
  },
  {
    id: 6,
    question: 'Do you accept bulk orders?',
    answer:
      'We do. The price per article depends on the volume and delivery speed required. Book a call with us to discuss your content needs.',
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
              Have a different question and can't find the answer you're looking
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
