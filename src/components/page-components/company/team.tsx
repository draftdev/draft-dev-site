import Image from 'next/image'

type TeamMember = {
  name: string
  description: string
  // No photo yet: show initials instead
  img?: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Mushfiq Sarker, PhD',
    description: 'CEO',
    img: '/draft/team/mushfiq_sarker_draft_dev.jpg',
  },
  {
    name: 'Karl Hughes',
    description: 'Founder',
    img: '/draft/team/karl_hughes_draft_dev.jpg',
  },
  {
    name: 'Manuel Weiss',
    description: 'COO',
    img: '/draft/team/manuel_weiss_draft_dev.jpg',
  },
  {
    name: 'Suprity Acharyya',
    description: 'Project Manager',
    img: '/draft/team/suprity_acharyya_draft_dev.jpg',
  },
  {
    name: 'Saswata Baksi',
    description: 'Head of Discoverability (AEO & SEO)',
    img: '/draft/team/saswata_baksi_draft_dev.jpg',
  },
  {
    name: 'Sthitapragyan Mohanty',
    description: 'Head of Growth',
    img: '/draft/team/sthitapragyan_mohanty_draft_dev.jpg',
  },
  {
    name: 'Aniket Bhattacharyea',
    description: 'Principal Developer Advocate',
    img: '/draft/team/aniket_bhattacharyea_draft_dev.jpg',
  },
  {
    name: 'Shane Cullen',
    description: 'Developmental Editor',
    img: '/draft/team/shane_cullen_draft_dev.jpg',
  },
]

// Technical specialists from our expert network. First name and last initial
// only, in names, alt text and file names, so they can't be looked up directly.
const specialists = [
  { name: 'Aykut B.', img: 'aykut_b_draft_dev.jpg' },
  { name: 'Damaso S.', img: 'damaso_s_draft_dev.jpg' },
  { name: 'Kevin K.', img: 'kevin_k_draft_dev.jpg' },
  { name: 'Kumar H.', img: 'kumar_h_draft_dev.jpg' },
  { name: 'Lucien C.', img: 'lucien_c_draft_dev.jpg' },
  { name: 'Manish H.', img: 'manish_h_draft_dev.jpg' },
  { name: 'Thinus S.', img: 'thinus_s_draft_dev.jpg' },
  { name: 'Vivek M.', img: 'vivek_m_draft_dev.jpg' },
]

const NETWORK_SIZE = 300

const initials = (name: string) =>
  name
    .split(/[\s,]+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')

// Round photo with a thin, soft border
const PhotoFrame = ({
  frameClassName,
  className,
  children,
}: {
  frameClassName: string
  className: string
  children: React.ReactNode
}) => (
  <div
    className={`mx-auto aspect-square rounded-full p-0.5 shadow-md ${frameClassName} ${className}`}
  >
    <div className="size-full overflow-hidden rounded-full">{children}</div>
  </div>
)

const Team = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center lg:text-left">
          <h2 className="subheader-mobile-gradient sm:subheader-gradient">
            Meet Our Team
          </h2>
          <p className="mt-3 max-w-3xl text-lg text-gray-600 max-lg:mx-auto">
            Our team is composed of dedicated professionals, each bringing
            unique skills and expertise to drive our mission forward.
          </p>
        </div>

        {/* Core team on the brand gradient */}
        <div className="bg-gradient-brand relative isolate mt-10 overflow-hidden rounded-3xl px-6 py-10 shadow-xl sm:px-10">
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 -z-10 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl"
          />
          <p className="font-code text-center text-sm font-semibold tracking-widest text-white/90 uppercase lg:text-left">
            Our core team, from strategy to delivery
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <li key={member.name} className="text-center">
                <PhotoFrame
                  frameClassName="bg-white/60"
                  className="w-28 sm:w-32"
                >
                  {member.img ? (
                    <Image
                      alt={`${member.name} - ${member.description}`}
                      src={member.img}
                      width={256}
                      height={256}
                      className="size-full object-cover"
                    />
                  ) : (
                    <span
                      role="img"
                      aria-label={`${member.name} - ${member.description}`}
                      className="font-code bg-gradient-brand flex size-full items-center justify-center text-3xl font-semibold text-white"
                    >
                      {initials(member.name)}
                    </span>
                  )}
                </PhotoFrame>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-base text-white/80">
                  {member.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Technical specialists */}
        <div className="mt-14">
          <h2 className="font-code text-secondary text-center text-2xl font-semibold lg:text-left">
            Our Technical Specialists
          </h2>
          <p className="mt-2 text-center text-lg text-gray-600 lg:text-left">
            Plus subject matter experts from our network of {NETWORK_SIZE}+
            developers, matched to your niche.
          </p>
          <ul className="mt-8 grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-5 xl:grid-cols-9">
            {specialists.map((person) => (
              <li key={person.name} className="text-center">
                <PhotoFrame frameClassName="bg-[#e4deee]" className="w-20">
                  <Image
                    alt={`${person.name}, Draft.dev technical specialist`}
                    src={`/draft/team/specialists/${person.img}`}
                    width={160}
                    height={160}
                    className="size-full bg-white object-cover"
                  />
                </PhotoFrame>
                <p className="mt-3 text-base text-gray-700 xl:whitespace-nowrap">
                  {person.name}
                </p>
              </li>
            ))}
            <li className="text-center">
              <PhotoFrame frameClassName="bg-[#e4deee]" className="w-20">
                <span className="bg-gradient-brand font-code flex size-full items-center justify-center text-xl font-semibold text-white">
                  +{NETWORK_SIZE - specialists.length}
                </span>
              </PhotoFrame>
              <p className="text-secondary mt-3 text-base font-semibold">
                more experts
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Team
