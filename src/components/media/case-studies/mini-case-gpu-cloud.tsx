const details = [
  { label: 'Client', value: 'GPU cloud infrastructure platform (AI/ML)' },
  { label: 'Work duration', value: 'February 2026 – present (ongoing)' },
  { label: 'Industry', value: 'AI infrastructure / GPU cloud' },
]

const goals = [
  'Win the comparison, alternatives and deployment searches developers make right before they choose a provider.',
  'Build enough topical authority to become the answer developers get from both search engines and LLMs.',
]

const MiniCaseGpuCloud = () => {
  return (
    <div>
      <main className="relative isolate my-16">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="relative py-8 pl-8">
              <div className="absolute top-0 left-0 h-full w-1 bg-gray-300" />
              <p className="bg-gradient-brand font-code text-gradient text-2xl font-semibold sm:text-3xl">
                We helped a GPU cloud platform publish 29 articles, guides and
                refreshes in under five months. Its new content earned citations
                from all three major LLMs and outperformed refreshed legacy
                pages.
              </p>
              <dl className="mt-8 space-y-3 text-gray-600">
                {details.map((item) => (
                  <div key={item.label}>
                    <dt className="case-study-small inline font-semibold">
                      {item.label}:
                    </dt>{' '}
                    <dd className="case-study-small inline">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="py-8">
              <h2 className="subheader-gradient">Their goals</h2>
              <ol className="mt-8 space-y-8">
                {goals.map((goal, index) => (
                  <li key={index} className="flex gap-x-6">
                    <span className="font-code text-gradient-3 text-3xl font-semibold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="text-lg text-gray-600">{goal}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default MiniCaseGpuCloud
