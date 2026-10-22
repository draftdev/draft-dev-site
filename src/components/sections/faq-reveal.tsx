'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

import SectionEyebrow from '@/components/ui/section-eyebrow'

// FAQ section following ruixen.ui's TextRevealFAQs layout: a two-column
// split with a big sticky "FAQs" heading and support note on the left, and
// an accordion on the right whose answers reveal word by word as they
// expand. Content is the site's existing FAQ, unchanged.

const FAQS = [
  {
    question: 'What kind of content does Draft.dev actually produce?',
    answer:
      'We create a wide range of content focused on helping technical buyers evaluate, adopt, and grow with your product. This includes blog posts and tutorials, comparison pages, landing pages and onboarding content, technical product guides and use case deep-dives, thought leadership pieces, lead magnets and gated assets, content refreshes and SEO-optimized pages, and more. We tailor content formats and tone based on your goals, audience, and funnel stage.',
  },
  {
    question: 'Who writes the content? Are they technical enough?',
    answer:
      'All content is created by our network of 300+ vetted engineer-writers and reviewed by subject matter experts and editors. We also use AI to speed up research and drafts, but every piece is reviewed by real developers and edited by professional technical editors to ensure accuracy, clarity, and value for your audience.',
  },
  {
    question: 'How soon do we see content after we start?',
    answer:
      'You’ll get your first pieces within 3 weeks of kickoff. We’ll spend the first 1–2 weeks aligning on goals, messaging, and the content roadmap so we’re not writing in a vacuum. After that, we aim for a consistent weekly publishing cadence. Publishing 2x weekly is the first core discipline of a successful content operation.',
  },
  {
    question: 'How much of my team’s time will this require?',
    answer:
      'We’re built to minimize internal lift. You’ll typically need to attend a kickoff call, review and approve a quarterly roadmap, and provide occasional feedback on draft content (we handle the rest). We offer full CMS publishing, distribution, and social media asset creation, so you can focus on other growth initiatives and closing the leads we’re driving.',
  },
  {
    question: 'How do you measure success?',
    answer:
      'Success depends on your goals, but we typically track traffic to key content, lead magnet downloads, demo or trial signups from content, engagement via newsletters, shares, or backlinks, and movement of content-informed leads down the funnel. We hold monthly analytics check-ins to evaluate what’s working and adjust the roadmap accordingly.',
  },
  {
    question: 'Can we start small and scale up later?',
    answer:
      'Yes. Many of our clients start small as a test, adding in paid growth options over time. We offer plans starting at $9K/month with an initial minimum commitment of 3 months.',
  },
]

function RevealText({ text }: { text: string }) {
  const words = text.split(' ')
  return (
    <p className="pr-8 pb-6 text-base leading-relaxed text-gray-500">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + i * 0.012, duration: 0.25 }}
          className="inline-block whitespace-pre"
        >
          {word}{' '}
        </motion.span>
      ))}
    </p>
  )
}

export default function FaqReveal() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <SectionEyebrow>FAQ</SectionEyebrow>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl">
              Common questions
            </h2>
            <p className="mt-6 max-w-sm text-lg text-gray-500">
              Everything you need to know about working with Draft.dev.
            </p>
            <p className="mt-6 hidden max-w-sm text-base text-gray-500 lg:block">
              Have a different question and can&apos;t find the answer
              you&apos;re looking for?{' '}
              <Link
                href="/call"
                className="text-primary font-semibold underline-offset-2 hover:underline"
              >
                Book a discovery call
              </Link>{' '}
              to learn more.
            </p>
          </div>

          <div>
            {FAQS.map((faq, i) => {
              const isOpen = open === i
              return (
                <div key={faq.question} className="border-b border-gray-200">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left"
                    >
                      <span className="text-lg font-semibold text-gray-900">
                        {faq.question}
                      </span>
                      <motion.svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 shrink-0 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        aria-hidden="true"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </motion.svg>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <RevealText text={faq.answer} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
            <p className="mt-8 text-base text-gray-500 lg:hidden">
              Have a different question?{' '}
              <Link
                href="/call"
                className="text-primary font-semibold underline-offset-2 hover:underline"
              >
                Book a discovery call
              </Link>{' '}
              to learn more.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
