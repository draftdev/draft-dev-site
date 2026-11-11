// Shared SocialProof figures plus the 7,000+ developer network, in the homepage card style
const stats = [
  { value: '300+', label: 'Subject Matter Experts & Reviewers' },
  { value: '100+', label: 'Clients' },
  { value: '7,000+', label: 'Developers in Our Network' },
  { value: '3,000+', label: 'Content Pieces Published' },
  { value: '100%', label: 'Technical Audience' },
]

const Stats = () => {
  return (
    <section className="bg-gradient-brand relative isolate overflow-hidden py-12 sm:py-16">
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-24 -z-10 h-80 w-80 rounded-full bg-amber-300/15 blur-3xl"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="lg:subheader-light subheader-mobile-light text-balance">
            A Growth Agency with a Track Record
          </h2>
          <p className="mt-4 text-lg text-white/90">
            We have worked with hundreds of successful companies, including some
            of the most well-known in the tech industry.
          </p>
        </div>
        <dl className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col-reverse rounded-3xl bg-white/10 px-4 py-7 text-center ring-1 ring-white/20 last:col-span-2 lg:last:col-span-1"
            >
              <dt className="mt-2 min-h-[2lh] text-sm font-medium text-white/80">
                {stat.label}
              </dt>
              <dd className="font-code text-4xl font-semibold text-amber-300 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default Stats
