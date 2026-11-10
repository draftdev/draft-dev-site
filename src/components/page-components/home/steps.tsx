const steps = [
  {
    title: 'Discovery call',
    text: "A 30-minute call to learn your goals and see if we're a fit.",
  },
  {
    title: 'Kickoff',
    text: 'We interview your team and review your product, positioning, competitors and analytics.',
  },
  {
    title: 'Launch within 3 weeks',
    text: 'Strategy, roadmap and your first pieces live in about 3 weeks, then weekly delivery and monthly reporting.',
  },
]

// Other pages link here with /#how-we-work
const Steps = () => {
  return (
    <section id="how-we-work" className="scroll-mt-32 bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="subheader-mobile-gradient sm:subheader-gradient text-balance">
            From Kickoff to Results in Weeks
          </h2>
        </div>
        <ol className="relative mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Line joining the step numbers on wider screens */}
          <div
            aria-hidden="true"
            className="absolute top-[3.25rem] right-[16%] left-[16%] hidden h-0.5 bg-[#5e5285]/15 md:block"
          />
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-3xl bg-white p-7 shadow-sm ring-1 ring-[#5e5285]/10"
            >
              <span className="bg-gradient-brand font-code flex size-12 items-center justify-center rounded-xl text-xl font-semibold text-white shadow-md">
                {i + 1}
              </span>
              <h3 className="font-code text-secondary mt-6 text-lg font-semibold">
                {step.title}
              </h3>
              <p className="mt-3 text-base text-gray-600">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Steps
