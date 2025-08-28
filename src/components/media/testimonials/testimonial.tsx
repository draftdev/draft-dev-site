import Image from 'next/image'

interface TestimonialProps {
  imageSrc: string
  imageAlt: string
  quote: string
  name: string
  role: string
  company: string
}

function Testimonial({
  imageSrc,
  imageAlt,
  quote,
  name,
  role,
  company,
}: TestimonialProps) {
  return (
    <div className="bg-gradient-brand py-16">
      <div className="mx-auto max-w-4xl px-8 lg:max-w-7xl">
        <div className="grid grid-cols-1 items-center lg:grid-cols-[384px_1fr]">
          {/* Show the portrait only on lg+ */}
          <div className="hidden lg:block">
            <div className="rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
              <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                {/* NOTE: add `outline` here so outline-1 takes effect */}
                <div className="overflow-hidden rounded-3xl shadow-2xl outline-1 -outline-offset-1 outline-black/10">
                  {/* Match grid col width to keep the frame aligned */}
                  <div className="relative aspect-[2/3] w-[384px]">
                    <Image
                      alt={imageAlt}
                      src={imageSrc}
                      fill
                      className="rounded-3xl object-cover"
                      // Not LCP: let it lazy-load on desktop only
                      sizes="(min-width: 1280px) 384px, (min-width: 1024px) 360px, 0px"
                      // Optional: small blur placeholder
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABhZSURBVHhe7Z1rcFTXef/3P3u9M"
                      // Optional: nudge the browser to de-prioritize further
                      fetchPriority="low"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote column */}
          <div className="flex lg:pl-20">
            <figure className="mx-auto flex max-w-full flex-col gap-4 max-lg:text-center">
              <blockquote>
                <p className="subheader-mobile-light relative text-left sm:text-3xl">
                  "{quote}"
                </p>
              </blockquote>
              <figcaption>
                <p className="font-medium text-white">{name}</p>
                <p className="text-gray-100">
                  {role}, {company}
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
