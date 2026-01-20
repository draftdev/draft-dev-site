import Image from 'next/image'

export default function Example() {
  return (
    <div className="bg-gradient-brand overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-4xl">
          <p className="text-base/7 font-semibold text-indigo-400">About us</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
            2026 Developer Marketing Survey
          </h1>
          <p className="mt-6 text-xl/8 text-balance text-gray-100">
            Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At
            arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae
            feugiat egestas.
          </p>
        </div>
        <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          <div className="lg:pr-8">
            <h2 className="text-2xl font-semibold tracking-tight text-pretty text-white">
              Our mission
            </h2>
            <p className="mt-6 text-base/7 text-gray-100">
              We surveyed developer marketing and DevRel leaders across the
              industry to find out what's actually working in 2026. Inside,
              you'll find where budgets are headed and how priorities shift as
              companies scale, which channels actually deliver ROI (and which
              are overhyped), why 96% of teams have tried AI but only 7% find it
              "very useful, " what's driving experimentation with video despite
              weak returns, and why content creation has become the most
              commonly outsourced function.
            </p>
            <p className="mt-8 text-base/7 text-gray-100">
              Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
              odio id et. Id blandit molestie auctor fermentum dignissim. Lacus
              diam tincidunt ac cursus in vel. Mauris varius vulputate et
              ultrices hac adipiscing egestas. Iaculis convallis ac tempor et
              ut. Ac lorem vel integer orci.
            </p>
          </div>
          <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
            <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 xl:gap-8">
              <div className="aspect-6/7 overflow-hidden rounded-xl outline-1 -outline-offset-1 outline-white/10">
                <Image
                  alt=""
                  src="/site/small-portrait/dev_one.png"
                  width={560}
                  height={700}
                  className="block size-full object-cover"
                />
              </div>
              <div className="-mt-8 aspect-6/7 overflow-hidden rounded-xl outline-1 -outline-offset-1 outline-white/10 lg:-mt-40">
                <Image
                  alt=""
                  src="/site/small-portrait/dev_two.png"
                  width={560}
                  height={700}
                  className="block size-full object-cover"
                />
              </div>

              <div className="-mt-8 aspect-6/7 overflow-hidden rounded-xl outline-1 -outline-offset-1 outline-white/10 lg:-mt-40">
                <Image
                  alt=""
                  src="/site/small-portrait/dev_two.png"
                  width={560}
                  height={700}
                  className="block size-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="max-lg:mt-16 lg:col-span-1">
            <p className="text-base/7 font-semibold text-gray-400">
              The numbers
            </p>
            <hr className="mt-6 border-t border-gray-700" />
            <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-700 pb-4">
                <dt className="text-sm/6 text-gray-400">Raised</dt>
                <dd className="order-first text-6xl font-semibold tracking-tight text-white">
                  $<span>150</span>M
                </dd>
              </div>
              <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-700 pb-4">
                <dt className="text-sm/6 text-gray-400">Companies</dt>
                <dd className="order-first text-6xl font-semibold tracking-tight text-white">
                  <span>30</span>K
                </dd>
              </div>
              <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-700 max-sm:pb-4">
                <dt className="text-sm/6 text-gray-400">Deals Closed</dt>
                <dd className="order-first text-6xl font-semibold tracking-tight text-white">
                  <span>1.5</span>M
                </dd>
              </div>
              <div className="flex flex-col gap-y-2">
                <dt className="text-sm/6 text-gray-400">Leads Generated</dt>
                <dd className="order-first text-6xl font-semibold tracking-tight text-white">
                  <span>200</span>M
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </div>
    </div>
  )
}
