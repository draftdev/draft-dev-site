import { testimonials } from '@/components/media/testimonials/testimonials-group'
import Image from 'next/image'

// Homepage version of the shared testimonials wall, in the newer card style
const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="subheader-mobile-gradient sm:subheader-gradient">
            Testimonials
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            What our clients are saying
          </p>
        </div>
        <div className="mt-10 gap-6 sm:columns-2 lg:columns-3">
          {testimonials.map((t) => (
            <figure
              key={t.author.name}
              className="mb-6 break-inside-avoid rounded-3xl bg-[#f4f1f8] p-7 ring-1 ring-[#5e5285]/10"
            >
              <span
                aria-hidden="true"
                className="font-code block text-5xl leading-none text-amber-400"
              >
                &ldquo;
              </span>
              <blockquote className="mt-2 text-base text-gray-700">
                <p>{t.body}</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4 border-t border-[#5e5285]/10 pt-5">
                <Image
                  alt={`${t.author.name}'s profile`}
                  src={t.author.imageUrl}
                  width={96}
                  height={96}
                  className="size-11 rounded-full bg-white object-cover ring-2 ring-white"
                />
                <div>
                  <p className="font-semibold text-gray-900">{t.author.name}</p>
                  <p className="text-secondary text-sm font-medium">
                    {t.author.company}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
