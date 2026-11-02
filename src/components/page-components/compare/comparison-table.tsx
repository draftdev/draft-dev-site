import {
  ChartBarIcon,
  CheckIcon,
  DocumentTextIcon,
  HandRaisedIcon,
  MegaphoneIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import { rowGroups, type Facts } from './data'

const groupIcons: Record<string, typeof CheckIcon> = {
  Team: UserGroupIcon,
  Content: DocumentTextIcon,
  'AI visibility': ChartBarIcon,
  'Marketing and distribution': MegaphoneIcon,
  'Working together': HandRaisedIcon,
}

// "Yes" answers get a check badge; a missing fact shows as "Not stated"
export const FactValue = ({ value }: { value: string | null }) => {
  if (!value) {
    return (
      <span className="inline-flex rounded-full bg-gray-100 px-2.5 py-0.5 text-sm text-gray-500">
        Not stated
      </span>
    )
  }
  const yes = value.match(/^Yes(?:,\s*(.*))?$/)
  if (yes) {
    return (
      <span className="inline-flex items-start gap-x-2">
        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <CheckIcon aria-hidden="true" className="size-3.5" strokeWidth={3} />
        </span>
        <span>{yes[1] ? `Yes, ${yes[1]}` : 'Yes'}</span>
      </span>
    )
  }
  return <span>{value}</span>
}

const ComparisonTable = ({
  name,
  draft,
  them,
  checked,
  sources = [],
}: {
  name: string
  draft: Facts
  them: Facts
  checked: string
  sources?: string[]
}) => {
  return (
    <section className="bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <h2 className="subheader-mobile-gradient sm:subheader-gradient text-center">
          Side by Side
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-lg text-gray-600">
          Every fact, from each company&apos;s own site. &quot;Not stated&quot;
          means they don&apos;t say, not that the answer is no.
        </p>

        {/* Tablet and up: one table, Draft.dev column highlighted */}
        <div className="mt-8 hidden overflow-hidden rounded-3xl shadow-lg ring-1 ring-[#5e5285]/15 md:block">
          <table className="w-full table-fixed border-separate border-spacing-0 text-left text-base">
            <colgroup>
              <col className="w-[28%]" />
              <col className="w-[36%]" />
              <col className="w-[36%]" />
            </colgroup>
            <thead>
              <tr>
                <th className="bg-[#f4f1f8] px-6 py-4" />
                <th className="bg-gradient-brand font-code px-6 py-4 text-lg font-semibold text-white">
                  Draft.dev
                </th>
                <th className="font-code text-secondary bg-[#f4f1f8] px-6 py-4 text-lg font-semibold">
                  {name}
                </th>
              </tr>
            </thead>
            {rowGroups.map((group) => {
              const Icon = groupIcons[group.title]
              return (
                <tbody key={group.title}>
                  <tr>
                    <th
                      colSpan={3}
                      className="border-t border-[#5e5285]/10 bg-[#5e5285]/[0.08] px-6 py-2.5"
                    >
                      <span className="text-secondary inline-flex items-center gap-x-2 text-sm font-semibold">
                        {Icon && <Icon aria-hidden="true" className="size-4" />}
                        {group.title}
                      </span>
                    </th>
                  </tr>
                  {group.rows.map((row) => (
                    <tr key={row.key}>
                      <th className="border-t border-gray-100 px-6 py-3.5 align-top font-medium text-gray-900">
                        {row.label}
                      </th>
                      <td className="border-t border-[#5e5285]/10 bg-[#5e5285]/[0.12] px-6 py-3.5 align-top font-medium text-gray-900">
                        <FactValue value={draft[row.key]} />
                      </td>
                      <td className="border-t border-gray-100 px-6 py-3.5 align-top text-gray-700">
                        <FactValue value={them[row.key]} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              )
            })}
          </table>
        </div>

        {/* Phone: one card per row */}
        <div className="mt-8 space-y-8 md:hidden">
          {rowGroups.map((group) => {
            const Icon = groupIcons[group.title]
            return (
              <div key={group.title}>
                <h3 className="text-secondary inline-flex items-center gap-x-2 text-sm font-semibold">
                  {Icon && <Icon aria-hidden="true" className="size-4" />}
                  {group.title}
                </h3>
                <dl className="mt-3 space-y-3">
                  {group.rows.map((row) => (
                    <div
                      key={row.key}
                      className="rounded-2xl p-4 ring-1 ring-gray-200"
                    >
                      <dt className="font-medium text-gray-900">{row.label}</dt>
                      <dd className="mt-2 rounded-xl bg-[#5e5285]/5 p-3 text-gray-900">
                        <span className="text-secondary block text-xs font-semibold uppercase">
                          Draft.dev
                        </span>
                        <FactValue value={draft[row.key]} />
                      </dd>
                      <dd className="mt-2 p-3 pt-1 text-gray-700">
                        <span className="block text-xs font-semibold text-gray-500 uppercase">
                          {name}
                        </span>
                        <FactValue value={them[row.key]} />
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            )
          })}
        </div>

        <p className="mt-5 text-center text-sm text-gray-500">
          Checked against {name}&apos;s published pages on {checked}. Details
          change, so check their site before you decide.
        </p>
        {sources.length > 0 && (
          <p className="mt-2 text-center text-xs break-all text-gray-400">
            Sources:{' '}
            {sources.map((src, i) => (
              <span key={src}>
                {i > 0 && ' · '}
                <a
                  href={src}
                  rel="nofollow noopener"
                  target="_blank"
                  className="hover:text-gray-600"
                >
                  {src.replace(/^https?:\/\/(www\.)?/, '')}
                </a>
              </span>
            ))}
          </p>
        )}
      </div>
    </section>
  )
}

export default ComparisonTable
