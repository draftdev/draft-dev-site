// The GPU cloud workstreams, one short line each
const steps = [
  {
    title: 'Audit and roadmap',
    text: 'Found stale pages and content gaps, then built a dated roadmap.',
  },
  {
    title: 'Flagship guides',
    text: 'An inference optimization guide, an industry report and 3 refreshes.',
  },
  {
    title: 'Comparison pages',
    text: 'Head-to-head comparisons against 3 competing GPU clouds.',
  },
  {
    title: 'Category guides',
    text: 'Deep guides on inference engines, GPU servers and clusters.',
  },
  {
    title: 'Agent integrations',
    text: '6 integration guides in 2 months for fast-growing agent frameworks.',
  },
  {
    title: 'Syndication and tracking',
    text: 'Republished on developer communities, with monthly AI citation tracking.',
  },
]

const HowWeHelpedGpuCloud = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="subheader-mobile-gradient sm:subheader-gradient text-center">
          How We Did It
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-gray-600">
          Two or three workstreams each month, from audit to syndication.
        </p>
        <ol className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="flex gap-x-5 rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-200 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="bg-gradient-brand font-code flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg font-semibold text-white shadow-md">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-secondary font-code text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="mt-1 text-base text-gray-600">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default HowWeHelpedGpuCloud
