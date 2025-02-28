const stats = [
  { id: 1, name: 'Subject Matter Experts & Reviewers ', value: '300+' },
  { id: 2, name: 'Clients', value: '100+' },
  { id: 3, name: 'Content Pieces Published', value: '3000+' },
  { id: 4, name: 'Technical Audience', value: '100%' },
]

export default function SocialProof() {
  return (
    <div className="bg-gradient-brand py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="lg:subheader-light subheader-mobile-light">
              A proven track record of success
            </h2>
            <p className="mt-4 text-lg text-gray-100 lg:leading-8">
              Draft.dev has worked with hundreds of successful companies,
              including some of the most well-known in the tech industry.
            </p>
          </div>
          <dl className="my-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
