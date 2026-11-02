import { rowGroups, type Facts } from './data'

// Side-by-side facts. Draft.dev's column is tinted; a dash means "not stated".
const Value = ({ value }: { value: string | null }) =>
  value ? (
    <span>{value}</span>
  ) : (
    <span className="text-gray-400" aria-label="Not stated">
      —
    </span>
  )

const ComparisonTable = ({
  name,
  draft,
  them,
  checked,
}: {
  name: string
  draft: Facts
  them: Facts
  checked: string
}) => {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <h2 className="subheader-mobile-gradient sm:subheader-gradient text-center">
          Side by Side
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-gray-600">
          Facts from each company&apos;s own site. A dash means they don&apos;t
          say, not that the answer is no.
        </p>

        {/* Desktop and tablet: one table, Draft.dev column highlighted */}
        <div className="mt-10 hidden overflow-hidden rounded-3xl shadow-sm ring-1 ring-gray-200 md:block">
          <table className="w-full table-fixed text-left text-base">
            <colgroup>
              <col className="w-[28%]" />
              <col className="w-[36%]" />
              <col className="w-[36%]" />
            </colgroup>
            <thead>
              <tr>
                <th className="bg-gray-50 px-6 py-5" />
                <th className="bg-gradient-brand font-code px-6 py-5 text-lg font-semibold text-white">
                  Draft.dev
                </th>
                <th className="font-code text-secondary bg-gray-50 px-6 py-5 text-lg font-semibold">
                  {name}
                </th>
              </tr>
            </thead>
            {rowGroups.map((group) => (
              <tbody key={group.title}>
                <tr>
                  <th
                    colSpan={3}
                    className="bg-gray-50 px-6 pt-6 pb-2 text-xs font-semibold tracking-wider text-gray-500 uppercase"
                  >
                    {group.title}
                  </th>
                </tr>
                {group.rows.map((row) => (
                  <tr key={row.key} className="border-t border-gray-100">
                    <th className="px-6 py-4 align-top font-medium text-gray-900">
                      {row.label}
                    </th>
                    <td className="bg-[#5e5285]/5 px-6 py-4 align-top text-gray-800">
                      <Value value={draft[row.key]} />
                    </td>
                    <td className="px-6 py-4 align-top text-gray-700">
                      <Value value={them[row.key]} />
                    </td>
                  </tr>
                ))}
              </tbody>
            ))}
          </table>
        </div>

        {/* Phone: one card per row */}
        <div className="mt-8 space-y-8 md:hidden">
          {rowGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
                {group.title}
              </h3>
              <dl className="mt-3 space-y-3">
                {group.rows.map((row) => (
                  <div
                    key={row.key}
                    className="rounded-2xl p-4 ring-1 ring-gray-200"
                  >
                    <dt className="font-medium text-gray-900">{row.label}</dt>
                    <dd className="mt-2 rounded-xl bg-[#5e5285]/5 p-3 text-gray-800">
                      <span className="text-secondary block text-xs font-semibold uppercase">
                        Draft.dev
                      </span>
                      <Value value={draft[row.key]} />
                    </dd>
                    <dd className="mt-2 p-3 pt-1 text-gray-700">
                      <span className="block text-xs font-semibold text-gray-500 uppercase">
                        {name}
                      </span>
                      <Value value={them[row.key]} />
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          Checked against {name}&apos;s published pages on {checked}. Details
          change, so check their site before you decide.
        </p>
      </div>
    </section>
  )
}

export default ComparisonTable
