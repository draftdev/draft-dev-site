import Image from 'next/image'

interface PartnerProps {
  title: string
  paragraphs: string[]
  image?: { src: string; alt: string }
}

const Partner = ({
  title,
  paragraphs,
  image = {
    src: '/site/med-portrait/coding_draft_dev.jpg',
    alt: 'Software developers coding.',
  },
}: PartnerProps) => {
  return (
    <div className="overflow-hidden bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="px-6 lg:px-0 lg:pr-4">
            <div className="mx-auto max-w-4xl sm:max-w-4xl lg:mx-0">
              <h2 className="sm:subheader-gradient subheader-mobile-gradient">
                {title}
              </h2>

              <dl className="paragraph-dark mt-6 max-w-xl space-y-8 text-lg lg:max-w-none">
                {paragraphs.map((paragraph) => (
                  <div key={paragraph} className="relative">
                    <dd className="my-2">{paragraph}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="hidden lg:ml-auto lg:block">
            <div className="rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
              <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline-1 -outline-offset-1 outline-black/10">
                  <Image
                    alt={image.alt}
                    src={image.src}
                    width={400}
                    height={500}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partner
