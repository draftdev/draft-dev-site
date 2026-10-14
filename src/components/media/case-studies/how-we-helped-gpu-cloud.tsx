import { CheckIcon } from '@heroicons/react/24/solid'

const sprints = [
  {
    title: 'Audit and roadmap',
    items: [
      'Separated pages that rank from pages that had gone stale',
      'Found keyword, content and intent gaps against competitors',
      'Built a funnel-mapped roadmap with dated deliverables',
    ],
  },
  {
    title: 'Flagship guides and refreshes',
    items: [
      'Flagship inference optimization guide, with a lead magnet',
      'Industry report to build top-of-funnel authority',
      'Refreshed 3 legacy pages: model serving, managed ML platforms and multi-GPU training',
    ],
  },
  {
    title: 'Comparison pages',
    items: [
      'Head-to-head comparisons against 3 competing GPU clouds',
      'Specific technical detail, not feature grids',
      'A provider roundup for category-level searches',
    ],
  },
  {
    title: 'Category guides',
    items: [
      'In-depth guides on inference engines, GPU cloud servers and cluster architecture',
      'Self-contained sections with clear definitions AI assistants can quote',
      'A matching deployment tutorial for each guide',
    ],
  },
  {
    title: 'Agent framework integrations',
    items: [
      'Targeted fast-growing agent frameworks whose users need GPU compute',
      '6 integration guides in 2 months, from multi-agent orchestration to remote server hosting',
      'Cluster rental and distributed training content for hardware buyers',
    ],
  },
  {
    title: 'Syndication and measurement',
    items: [
      'Adapted flagship guides republished on developer communities',
      'Monthly tracking of organic, direct and AI assistant traffic',
      'AI citations monitored and fed back into the roadmap',
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
        <ol className="mx-auto mt-10 grid max-w-xl grid-cols-1 gap-6 sm:mt-16 lg:max-w-none lg:grid-cols-3">
          {sprints.map((sprint, index) => (
            <li
              key={sprint.title}
              className="flex flex-col rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-200"
            >
              <div className="flex items-baseline gap-x-4">
                <span className="font-code text-gradient-3 text-3xl font-semibold">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-secondary text-lg font-semibold">
                  {sprint.title}
                </h3>
              </div>
              <ul className="mt-6 space-y-3 text-base text-gray-600">
                {sprint.items.map((item) => (
                  <li key={item} className="flex gap-x-3">
                    <CheckIcon
                      className="text-primary mt-1 h-5 w-5 shrink-0"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default HowWeHelpedGpuCloud
