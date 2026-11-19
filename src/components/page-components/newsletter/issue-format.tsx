interface IssuePart {
  title: string
  description: string
}

interface IssueFormatProps {
  title: string
  subtitle: string
  parts: IssuePart[]
}

// White section listing what goes into each issue. Numbered badges match the
// story numbers in DevTool Content Weekly, and there is no tall image, so the
// section stays as tall as its copy.
const IssueFormat = ({ title, subtitle, parts }: IssueFormatProps) => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:text-center">
          <h2 className="subheader-mobile-gradient sm:subheader-gradient">
            {title}
          </h2>
          <p className="sm:paragraph-dark py-3 text-lg text-gray-600">
            {subtitle}
          </p>
        </div>
        <ol className="mx-auto mt-10 grid max-w-xl grid-cols-1 gap-6 sm:mt-12 sm:max-w-none sm:grid-cols-2 lg:grid-cols-4">
          {parts.map((part, i) => (
            <li
              key={part.title}
              className="rounded-2xl bg-[#f7f5fa] p-6 ring-1 ring-[#e6e1ee]"
            >
              <span className="font-code inline-block rounded-md bg-[#544b84] px-2 py-0.5 text-sm font-bold text-white">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-secondary font-code mt-4 text-lg font-semibold sm:text-xl">
                {part.title}
              </h3>
              <p className="mt-3 text-base text-gray-600">{part.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default IssueFormat
