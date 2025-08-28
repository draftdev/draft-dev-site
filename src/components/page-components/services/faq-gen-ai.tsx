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
    question: 'How is AI content optimization different from traditional SEO?',
    answer:
      "While SEO focuses on keywords and rankings, AI optimization targets comprehension and extraction. We structure content for semantic understanding, implement citation-worthy formatting, create authoritative answer patterns, and optimize for natural language queries. AI systems need to understand your content's meaning, not just match keywords.",
  },
  {
    id: 2,
    question: 'Which AI platforms does Draft.dev optimize for?',
    answer:
      'We optimize for all major AI systems including ChatGPT, Claude, Gemini, Perplexity, GitHub Copilot, Google AI Overviews, Bing Chat, and emerging platforms. Each has unique requirements, but our comprehensive approach ensures visibility across all AI-driven search and recommendation systems.',
  },
  {
    id: 3,
    question: 'Will this replace our existing SEO strategy?',
    answer:
      'No, it enhances it. AI optimization and traditional SEO are complementary. Our approach improves both traditional rankings and AI visibility. In fact, AI-optimized content typically sees 40-60% improvement in traditional SEO metrics due to better structure and comprehensive coverage.',
  },
  {
    id: 4,
    question: 'How quickly will we see results from AI optimization?',
    answer:
      "Initial improvements appear within 2-3 weeks as AI systems rapidly index well-structured content. Full impact typically develops over 2-3 months as authority builds. Unlike traditional SEO's 6-12 month timeline, AI systems respond quickly to properly formatted, authoritative content.",
  },
  {
    id: 5,
    question: 'Can you optimize existing content or do we need new content?',
    answer:
      'Existing content can be restructured for AI comprehension, often seeing 3-5x improvement in AI visibility. New content is built AI-first from the ground up. We typically recommend a hybrid approach: optimize high-value existing content while creating new AI-native content for critical topics.',
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
