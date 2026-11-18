import {
  ArrowTrendingUpIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'

// Who we are: a short story, then what makes us different.
// Services are covered on the homepage, so they aren't listed here.
const pillars = [
  {
    title: 'Only technical audiences',
    text: 'We work only with companies that market to developers, data engineers and DevOps teams. That focus shapes every plan we write.',
    Icon: CodeBracketIcon,
  },
  {
    title: 'Checked by real engineers',
    text: 'Our 300+ engineers check every piece for technical accuracy. Our editors make sure it reads well and fits your brand.',
    Icon: ShieldCheckIcon,
  },
  {
    title: 'Marketers who know growth',
    text: 'Our marketers tie every deliverable to your goals and make sure it reaches the right people.',
    Icon: ArrowTrendingUpIcon,
  },
]

const What = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading uses the full width so it fits on one line on desktop */}
        <div className="text-center">
          <h2 className="subheader-mobile-gradient sm:subheader-gradient text-balance">
            Growth Backed by Real Engineers
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-lg text-gray-600 sm:text-xl">
            Former CTO Karl Hughes founded Draft.dev in 2020 to create technical
            content that developers actually trust. Today we&apos;re a growth
            partner for developer tools and AI platforms, running go-to-market
            programs from first strategy to paid growth.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map(({ title, text, Icon }) => (
            <li
              key={title}
              className="flex flex-col rounded-3xl bg-[#f4f1f8] p-7 ring-1 ring-[#5e5285]/10"
            >
              <span className="bg-gradient-brand flex size-12 items-center justify-center rounded-xl text-white shadow-md">
                <Icon aria-hidden="true" className="size-6" />
              </span>
              <h3 className="font-code text-secondary mt-5 text-xl font-semibold">
                {title}
              </h3>
              <p className="mt-3 text-base text-gray-600">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default What
