// Visual summary of the GPU cloud results for the case study hero
const ResultsPanelGpuCloud = () => {
  return (
    <div className="rounded-3xl bg-white/10 p-6 shadow-2xl ring-1 ring-white/20 backdrop-blur-sm sm:p-8">
      {/* 10x: new content vs older pages */}
      <div>
        <p className="text-sm font-semibold tracking-wide text-gray-200 uppercase">
          AI traffic
        </p>
        <div className="mt-4 space-y-3">
          <div className="flex items-center gap-x-3">
            <span className="w-24 shrink-0 text-sm text-gray-200">
              Older pages
            </span>
            <div className="h-3 flex-1 rounded-full bg-white/10">
              <div className="h-3 w-[10%] rounded-full bg-white/50" />
            </div>
          </div>
          <div className="flex items-center gap-x-3">
            <span className="w-24 shrink-0 text-sm text-white">
              New content
            </span>
            <div className="h-3 flex-1 rounded-full bg-white/10">
              <div className="h-3 w-full rounded-full bg-amber-400" />
            </div>
          </div>
        </div>
        <p className="font-code mt-4 text-5xl font-semibold text-white">10x</p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/15 pt-6">
        {/* 3 of 3 LLMs */}
        <div>
          <div className="flex gap-x-1.5" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <span key={i} className="h-3 w-3 rounded-full bg-amber-400" />
            ))}
          </div>
          <p className="font-code mt-3 text-3xl font-semibold text-white">
            3 of 3
          </p>
          <p className="mt-1 text-sm text-gray-200">
            Major LLMs cited one article
          </p>
        </div>
        {/* 29 pieces */}
        <div>
          <div className="flex gap-x-1" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => (
              <span key={i} className="h-3 w-2 rounded-sm bg-white/60" />
            ))}
          </div>
          <p className="font-code mt-3 text-3xl font-semibold text-white">29</p>
          <p className="mt-1 text-sm text-gray-200">Pieces in under 5 months</p>
        </div>
      </div>
    </div>
  )
}

export default ResultsPanelGpuCloud
