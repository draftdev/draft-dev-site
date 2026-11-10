interface Step {
  number: string
  title: string
  description: string
}

interface AboutStepsProps {
  title: string
  subtitle: string
  steps: Step[]
}

// "How we work with you" as numbered cards on a lavender band
const AboutSteps = ({ title, subtitle, steps }: AboutStepsProps) => {
  return (
    <section className="bg-[#f4f1f8] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="subheader-mobile-gradient sm:subheader-gradient">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
        </div>

        <ol className="relative mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Line joining the step numbers on wider screens */}
          <div
            aria-hidden="true"
            className="absolute top-[3.25rem] right-[16%] left-[16%] hidden h-0.5 bg-[#5e5285]/15 md:block"
          />
          {steps.map((step) => (
            <li
              key={step.number}
              className="relative flex flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-[#5e5285]/10 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="bg-gradient-brand font-code flex size-12 items-center justify-center rounded-xl text-xl font-semibold text-white shadow-md">
                {step.number}
              </span>
              <h3 className="font-code text-secondary mt-6 text-lg font-semibold">
                {step.title}
              </h3>
              <p className="mt-3 text-base text-gray-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default AboutSteps
