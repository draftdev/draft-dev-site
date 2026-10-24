// The GPU cloud results for the case study hero, one simple row each
const results = [
  { value: '10x', label: 'More AI traffic than older pages' },
  { value: '3 of 3', label: 'Major LLMs cited one article' },
  { value: '29', label: 'Pieces published in under 5 months' },
]

const ResultsPanelGpuCloud = () => {
  return (
    <dl className="divide-y divide-white/15 rounded-3xl bg-white/10 px-6 shadow-2xl ring-1 ring-white/20 sm:px-8">
      {results.map((r) => (
        <div
          key={r.label}
          className="flex flex-col-reverse justify-end gap-y-1 py-5"
        >
          <dt className="text-base text-gray-200">{r.label}</dt>
          <dd className="font-code text-4xl font-semibold text-white">
            {r.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}

export default ResultsPanelGpuCloud
