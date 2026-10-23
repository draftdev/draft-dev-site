// "How We Did It" section for case studies: numbered steps, one line each
type Step = { title: string; text: string }

const HowWeDidIt = ({
  subtitle,
  steps,
}: {
  subtitle: string
  steps: Step[]
}) => {
  return (
    <section className="bg-white pt-10 pb-12 sm:pt-12 sm:pb-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="subheader-mobile-gradient sm:subheader-gradient text-center">
          How We Did It
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-gray-600">
          {subtitle}
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

export default HowWeDidIt
