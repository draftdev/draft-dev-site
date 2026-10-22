import Image from 'next/image'

import SectionEyebrow from '@/components/ui/section-eyebrow'

// Team section following 21st.dev's cnippet.dev/team layout: header with an
// icon badge, then a continuously scrolling marquee of member cards that go
// grayscale-to-color on hover, with name/role overlaid on each card and
// fade-outs at both edges. Pauses while hovered.

const TEAM = [
  { name: 'Mushfiq Sarker, PhD', role: 'CEO', img: '/draft/team/mushfiq_sarker_draft_dev.jpg' },
  { name: 'Karl Hughes', role: 'Founder', img: '/draft/team/karl_hughes_draft_dev.jpg' },
  { name: 'Manuel Weiss', role: 'COO', img: '/draft/team/manuel_weiss_draft_dev.jpg' },
  { name: 'Jakkie Koekemoer', role: 'Director of Engineering', img: '/draft/team/jakkie_koekemoer_draft_dev.jpg' },
  { name: 'Annika Puura', role: 'Operations Manager', img: '/draft/team/annika_puura_draft_dev.jpg' },
  { name: 'Saswata Baksi', role: 'Discoverability Lead (SEO & GEO)', img: '/draft/team/saswata_baksi_draft_dev.png' },
  { name: 'Ofer Prossner', role: 'Content Strategist', img: '/draft/team/ofer_prossner_draft_dev.jpg' },
  { name: 'Aniket Bhattacharyea', role: 'Developer Advocate', img: '/draft/team/aniket_bhattacharyea_draft_dev.jpg' },
  { name: 'Kumar Harsh', role: 'Developer Advocate', img: '/draft/team/kumar_harsh_draft_dev.jpg' },
  { name: 'Shane Cullen', role: 'Developmental Editor', img: '/draft/team/shane_cullen_draft_dev.jpg' },
]

const EDGE_FADE =
  'linear-gradient(to right, transparent, black 6%, black 94%, transparent)'

function MemberCard({ name, role, img }: { name: string; role: string; img: string }) {
  return (
    <li className="team-card relative w-64 shrink-0 overflow-hidden rounded-2xl">
      <Image
        src={img}
        alt={`${name} - ${role}`}
        width={256}
        height={320}
        className="team-photo h-80 w-64 object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-10">
        <p className="text-base font-semibold text-white">{name}</p>
        <p className="text-sm text-white/75">{role}</p>
      </div>
    </li>
  )
}

export default function TeamMarquee() {
  return (
    <section className="overflow-hidden bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionEyebrow center>Our technical editors</SectionEyebrow>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl">
            300+ technical subject matter experts
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Working with us to make every piece technically accurate and
            resonant with developers.
          </p>
        </div>
      </div>

      <div
        className="group mt-14"
        style={{ maskImage: EDGE_FADE, WebkitMaskImage: EDGE_FADE }}
      >
        <div className="animate-team-marquee flex w-max group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              className="flex shrink-0 gap-6 pr-6"
              aria-hidden={copy === 1 || undefined}
            >
              {TEAM.map((member) => (
                <MemberCard key={`${copy}-${member.name}`} {...member} />
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
