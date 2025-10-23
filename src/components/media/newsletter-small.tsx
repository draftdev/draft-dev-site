import Link from 'next/link'

export default function NewsletterSmall() {
  return (
    <div className="py-6 sm:py-8">
      <div className="max-w-auto">
        <div className="rounded-3xl shadow-[inset_0_0_2px_1px_#ffffff4d]">
          <div className="p-2">
            <div className="overflow-hidden rounded-sm shadow-2xl">
              <div className="p-8">
                <Link href="/newsletter" title="Newsletter">
                  <h2 className="text-3xl font-semibold tracking-tight text-white">
                    Trusted by 100+ tech companies. Over 300 engineers writing
                    your technical content.
                  </h2>
                </Link>
                <div className="mt-6 text-base text-white/90">
                  Join over 3,000 subscribers and get our resources, tips, and
                  case studies to help you reach developers. Delivered to your
                  inbox every month.
                </div>

                <div className="mt-6">
                  <Link
                    href="/newsletter"
                    className="inline-block w-full rounded-md bg-transparent px-3.5 py-2.5 text-center text-base font-semibold text-white ring-2 ring-white hover:bg-white hover:text-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    Sign up for our Newsletter
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
