import { Button } from '../global/button'

export default function NewsletterFull() {
  return (
    <div className="bg-gradient-brand py-24 md:pb-22">
      <div className="mx-auto max-w-7xl">
        <div className="-m-2 rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
          <div className="rounded-4xl p-2 shadow-md shadow-black/5">
            <div className="bg-gradient-brand overflow-hidden rounded-3xl p-12 shadow-2xl outline-1 -outline-offset-1 outline-black/10">
              <hgroup>
                <h2 className="header-light my-6 text-center text-3xl tracking-tight sm:text-5xl">
                  Trusted by 100+ tech companies, over 300 engineers writing your technical content.
                </h2>
                <p className="lead-light text-center">
                  Join over 3,000 subscribers and get our resources, tips, and case studies to help you reach developers. Delivered to your inbox every month.
                </p>
              </hgroup>

              <div className="mt-12 text-center">
                <Button
                  className="w-full bg-transparent text-lg text-white ring-2 ring-white hover:bg-white hover:text-gray-600 sm:w-auto"
                  href="/newsletter"
                >
                  Subscribe to our Newsletter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
