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
          <div className="hidden lg:block">
            <div className="rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
              <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline-1 -outline-offset-1 outline-black/10">
                  <Image
                    alt={imageAlt}
                    src={imageSrc}
                    width={400}
                    height={600}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:pl-20">
            <figure className="mx-auto flex max-w-full flex-col gap-4 max-lg:text-center">
              <blockquote>
                <p className="sm:testimonial-light subheader-mobile-light relative text-left">
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
