import { Button } from '../global/button'

export default function NewsletterFull() {
  return (
    <div className="md:pb-22 bg-gradient-brand py-24">
      <div className="mx-auto max-w-7xl">
        <div className="-m-2 rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
          <div className="rounded-4xl p-2 shadow-md shadow-black/5">
            <div className="overflow-hidden rounded-3xl bg-gradient-brand p-12 shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
              <hgroup>
                <h2 className="header-light my-6 text-center text-3xl tracking-tight sm:text-5xl">
                  Sign up for our Newsletter
                </h2>
                <p className="lead-light text-center">
                  Resources, tips, and case studies to help you reach
                  developers. Delivered to your inbox every month.
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
