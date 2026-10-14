const sprints = [
  {
    title: 'Audit, competitor analysis and roadmap',
    items: [
      'Reviewed every existing page to separate what ranks from what had gone stale.',
      'Studied competitors to find gaps in keywords, content and search intent.',
      'Built a roadmap mapped to the funnel, with dated deliverables.',
    ],
  },
  {
    title: 'Flagship guides and legacy recovery',
    items: [
      'Launched a flagship guide on inference optimization, with a matching lead magnet.',
      'Published an industry report to build authority at the top of the funnel.',
      'Refreshed three legacy pages on model serving, managed ML platforms and multi-GPU training.',
    ],
  },
  {
    title: 'Comparison pages for buyers',
    items: [
      'Wrote head-to-head comparisons against three competing GPU cloud platforms.',
      'Focused on specific technical detail instead of feature grids.',
      'Published a roundup of providers to capture category-level searches.',
    ],
  },
  {
    title: 'Category education and topical authority',
    items: [
      'Published in-depth guides on inference engines, GPU cloud servers and cluster architecture.',
      'Broke every piece into self-contained sections with clear definitions that AI assistants can quote.',
      'Paired each guide with a deployment tutorial on the same technology.',
    ],
  },
  {
    title: 'Integration guides for agent frameworks',
    items: [
      'Found fast-growing agent frameworks whose users need GPU compute.',
      'Published six integration guides in two months, from multi-agent orchestration to remote server hosting.',
      'Added content on GPU cluster rental and distributed training for buyers ready to choose hardware.',
    ],
  },
  {
    title: 'Syndication, measurement and ongoing optimization',
    items: [
      'Republish adapted versions of flagship guides on external developer communities.',
      'Track organic, direct and AI assistant traffic every month.',
      'Monitor AI citations and feed the results back into the roadmap.',
    ],
  },
]

const HowWeHelpedGpuCloud = () => {
  return (
    <div className="bg-white py-14 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:text-center">
          <h2 className="subheader-mobile-gradient sm:subheader-gradient">
            How We Helped the Platform Grow
          </h2>
          <p className="sm:paragraph-dark py-3 text-lg text-gray-600">
            We built a roadmap around content developers would read to the end
            and AI assistants would cite. Each month we ran two or three
            workstreams at once, building authority while also reaching buyers
            ready to choose a provider.
          </p>
        </div>
        <dl className="mx-auto mt-10 grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-16 lg:max-w-none lg:grid-cols-3">
          {sprints.map((sprint, index) => (
            <div key={sprint.title} className="flex flex-col">
              <p className="font-code text-gradient-3 text-sm font-semibold">
                Sprint {index + 1}
              </p>
              <dt className="text-secondary mt-1 text-lg font-semibold">
                {sprint.title}
              </dt>
              <dd className="mt-3">
                <ul className="list-disc space-y-2 pl-4 text-base text-gray-600">
                  {sprint.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default HowWeHelpedGpuCloud
