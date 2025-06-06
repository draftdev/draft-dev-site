import Image from 'next/image'

type PersonProps = {
  name: string
  description: string
  img: string
}

const Person = ({ name, description, img }: PersonProps) => {
  return (
    <li className="flex flex-col items-center lg:items-start">
      <div className="w-56 rounded-4xl bg-white/15 p-1 shadow ring-1 ring-black/5 sm:w-64">
        <div className="rounded-3xl p-1 shadow-md shadow-black/5">
          <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
            <Image
              alt={`${name} - ${description}`}
              src={img}
              width={260}
              height={260}
              className="aspect-square w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="mt-4 text-center lg:text-left">
        <h3 className="text-xl font-medium text-white">{name}</h3>
        <p className="text-lg text-gray-300">{description}</p>
      </div>
    </li>
  )
}

type TeamMember = {
  name: string
  description: string
  img: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Karl Hughes',
    description: 'Founder, CEO',
    img: '/draft/team/karl_hughes_draft_dev.jpg',
  },
  {
    name: 'Manuel Weiss',
    description: 'Co-owner',
    img: '/draft/team/manuel_weiss_draft_dev.jpg',
  },
  {
    name: 'Elzet Blaauw',
    description: 'COO',
    img: '/draft/team/elzet_blaauw_draft_dev.jpg',
  },
  {
    name: 'Clayton Kast',
    description: 'Account Director',
    img: '/draft/team/clayton_kast_draft_dev.jpg',
  },
  {
    name: 'Annika Puura',
    description: 'Operations Manager',
    img: '/draft/team/annika_puura_draft_dev.jpg',
  },
  {
    name: 'Jakkie Koekemoer',
    description: 'Engineering Manager',
    img: '/draft/team/jakkie_koekemoer_draft_dev.jpg',
  },

  {
    name: 'Aniket Bhattacharyea',
    description: 'Developer Advocate',
    img: '/draft/team/aniket_bhattacharyea_draft_dev.jpg',
  },
  {
    name: 'Kumar Harsh',
    description: 'Developer Advocate',
    img: '/draft/team/kumar_harsh_draft_dev.jpg',
  },
  {
    name: 'Kirstin Spivey',
    description: 'Developmental Editor',
    img: '/draft/team/kirstin_spivey_draft_dev.jpg',
  },
  {
    name: 'Shane Cullen',
    description: 'Developmental Editor',
    img: '/draft/team/shane_cullen_draft_dev.jpg',
  },
]

const Team = () => {
  return (
    <div className="bg-gradient-brand py-12 text-center lg:py-32 lg:text-left">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="subheader-light">The team</h2>

        <hr className="mt-6 border-t border-gray-200/20" />
        <ul className="mx-auto mt-16 grid grid-cols-1 gap-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <Person
              key={member.name}
              name={member.name}
              description={member.description}
              img={member.img}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Team
