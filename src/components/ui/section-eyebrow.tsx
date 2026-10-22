// Shared dot + uppercase eyebrow label used above every section heading so
// the pattern stays identical across the homepage.
export default function SectionEyebrow({
  children,
  dark = false,
  center = false,
}: {
  children: React.ReactNode
  dark?: boolean
  center?: boolean
}) {
  return (
    <p
      className={`flex items-center gap-2 text-sm font-medium tracking-wide uppercase ${
        center ? 'justify-center' : ''
      } ${dark ? 'text-white/70' : 'text-gray-500'}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${dark ? 'bg-white' : 'bg-gray-800'}`}
        aria-hidden="true"
      />
      {children}
    </p>
  )
}
