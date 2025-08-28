import Image from 'next/image'

const MiniCaseMailgun = () => {
  return (
    <div>
      <main className="relative isolate my-16">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="mx-auto max-w-2xl gap-x-12 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative w-full lg:shrink-0 xl:max-w-2xl">
              <div className="relative max-w-xl py-8 pl-8">
                <div className="absolute top-0 left-0 h-full w-1 bg-gray-300" />
                <p className="bg-gradient-brand font-code text-gradient text-3xl font-semibold">
                  "Anyone tasked with marketing to developers knows that they
                  are a community that can smell B.S. from a mile away. Having a
                  dedicated technical resource available is a great support for
                  creating content that both matters to our users and is also
                  useful and accurate."
                </p>
                <div className="pt-8 text-gray-600">
                  <p className="case-study-small font-semibold">Em Blitstein</p>
                  <p className="case-study-small">
                    Senior Content Marketing Manager, Sinch Mailgun
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-[400px]">
              <div className="rounded-4xl bg-white/15 p-2 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline-1 -outline-offset-1 outline-black/10">
                  <Image
                    alt="Em Blitstein"
                    height={600}
                    width={500}
                    priority
                    src="/media/testimonials-lg/em_sinch_mailgun.jpg"
                    className="aspect-[2/3] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default MiniCaseMailgun
