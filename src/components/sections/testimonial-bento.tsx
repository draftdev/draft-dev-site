import Image from 'next/image'

import SectionEyebrow from '@/components/ui/section-eyebrow'

// Testimonial bento following 21st.dev's uilayout.contact/testimonial
// layout, extended to carry the full roster of ten client testimonials:
// wide light card (subtle grid-line background) + brand-primary accent card,
// a row of three dark cards, then the first row mirrored, then three more
// dark cards.

interface Entry {
  quote: string
  name: string
  company: string
  img: string
}

const RAVI: Entry = {
  quote:
    'Draft.dev really accelerated our developer-focused marketing efforts. They really helped us build a competitive advantage as a developer-friendly platform without pulling away our internal technical teams to write that content.',
  name: 'Ravi Dehar',
  company: 'Gusto',
  img: '/media/testimonials-sm/ravi_dehar_gusto_draft_dev.jpg',
}

const ROBERT: Entry = {
  quote:
    'In a matter of weeks, our referral traffic and organic keyword rankings increased by 3x. One post also hit Hacker News which resulted in 5 demo requests in a single day!',
  name: 'Robert Gibb',
  company: 'fabric Inc.',
  img: '/media/testimonials-sm/robert_gibb_fabric_draft_dev.jpg',
}

const DAWN: Entry = {
  quote:
    'Having previously worked with draft.dev, I reached out to them within weeks of starting to help us accelerate our content creation. Our first pieces were published within weeks and ranked within the first month. What impressed me the most was that as traffic grew, conversion from visitors to signups stayed consistent at 10-15% — helping us not only hit our goals but exceed them.',
  name: 'Dawn Parzych',
  company: 'Shorebird',
  img: '/media/testimonials-sm/dawn_parzych_shorebird_draft_dev.jpg',
}

const TONY: Entry = {
  quote:
    "We've seen amazing results with the technical content produced from the team at Draft.dev. The attention to technical detail from start to finish has been a huge addition to our content.",
  name: 'Tony Chan',
  company: 'CloudForecast',
  img: '/media/testimonials-sm/tony_chan_cloudforecast_draft_dev.jpg',
}

const DARK_ROW_1: Entry[] = [
  {
    quote:
      "Having draft.dev source quality technical content for the Loft Labs blog has been a competitive advantage. It's given us a steadier flow of content, and some of the posts are among the most popular ones we've published.",
    name: 'Rich Burroughs',
    company: 'Loft Labs',
    img: '/media/testimonials-sm/rich_burroughs_loft_labs_draft_dev.jpg',
  },
  {
    quote:
      'Draft.dev is our go-to for practical, well-written content that actually resonates with technical audiences. It has been invaluable to have their brilliant writers, editors, and PMs in our content corner!',
    name: 'Jenny Medeiros',
    company: 'Redpanda',
    img: '/media/testimonials-sm/jenny_medeiros_redpanda_draft_dev.png',
  },
  {
    quote:
      'Partnering with Draft.dev has accelerated our technical content output while extending the bandwidth of our developer relations team. It is truly high-quality content written by devs for devs.',
    name: 'Abhishek Iyer',
    company: 'Descope',
    img: '/media/testimonials-sm/abhishek_iyer_descope_draft_dev.png',
  },
]

const DARK_ROW_2: Entry[] = [
  {
    quote:
      "I was thoroughly impressed by the smooth onboarding and ability to adapt to our product suite. Draft.dev's attention to detail and dedication to aligning content with our brand have significantly impacted our developer-focused content strategy.",
    name: 'Emily Blitstein',
    company: 'Sinch Mailgun',
    img: '/media/testimonials-sm/emily_blitstein_sinch_mailgun_draft_dev.png',
  },
  {
    quote:
      'Draft.dev has been an amazing partner, helping us scale our content program by creating thoughtful and technically-sound developer content and training materials. They have been instrumental in helping us realize our ambitions.',
    name: 'Randall Degges',
    company: 'Snyk',
    img: '/media/testimonials-sm/randall_degges_snyk_draft_dev.jpg',
  },
  {
    quote:
      'Draft.dev has been instrumental in enabling us to generate the deep technical content we require, something we simply could not produce with our current internal bandwidth. It significantly enhances our content marketing strategy.',
    name: 'Nicholas DeWald',
    company: 'Prove',
    img: '/media/testimonials-sm/nicholasdewald_prove_draft_dev.jpg',
  },
]

// One avatar treatment everywhere: same size, circular, cover-cropped.
function Avatar({ entry }: { entry: Entry }) {
  return (
    <Image
      src={entry.img}
      alt={entry.name}
      width={56}
      height={56}
      className="h-14 w-14 shrink-0 rounded-full object-cover"
    />
  )
}

const GRID_LINES = {
  backgroundImage:
    'repeating-linear-gradient(to right, rgba(84, 75, 132, 0.06) 0 1px, transparent 1px 96px), repeating-linear-gradient(to bottom, rgba(84, 75, 132, 0.06) 0 1px, transparent 1px 96px)',
}

function WideCard({ entry }: { entry: Entry }) {
  return (
    <figure
      className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 lg:col-span-2"
      style={GRID_LINES}
    >
      <blockquote className="max-w-xl text-lg leading-relaxed text-gray-800 sm:text-xl">
        &ldquo;{entry.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-8 flex items-end justify-between">
        <div>
          <p className="text-base font-semibold text-gray-900">{entry.name}</p>
          <p className="text-sm text-gray-500">{entry.company}</p>
        </div>
        <Avatar entry={entry} />
      </figcaption>
    </figure>
  )
}

function AccentCard({ entry }: { entry: Entry }) {
  return (
    <figure className="bg-primary rounded-2xl p-8">
      <blockquote className="text-lg leading-relaxed text-white">
        &ldquo;{entry.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-8 flex items-end justify-between">
        <div>
          <p className="text-base font-semibold text-white">{entry.name}</p>
          <p className="text-sm text-white/70">{entry.company}</p>
        </div>
        <Avatar entry={entry} />
      </figcaption>
    </figure>
  )
}

function DarkCard({ entry }: { entry: Entry }) {
  return (
    <figure className="rounded-2xl bg-[#141126] p-8">
      <blockquote className="text-base leading-relaxed text-white/90">
        &ldquo;{entry.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-8 flex items-end justify-between">
        <div>
          <p className="text-base font-semibold text-white">{entry.name}</p>
          <p className="text-sm text-white/60">{entry.company}</p>
        </div>
        <Avatar entry={entry} />
      </figcaption>
    </figure>
  )
}

export default function TestimonialBento() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionEyebrow center>Testimonials</SectionEyebrow>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl">
            Trusted by startups and the world&apos;s largest companies
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Hear how our clients feel about working with us.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {/* Row 1: wide + accent */}
          <WideCard entry={RAVI} />
          <AccentCard entry={ROBERT} />

          {/* Row 2: three dark */}
          {DARK_ROW_1.map((entry) => (
            <DarkCard key={entry.name} entry={entry} />
          ))}

          {/* Row 3: mirrored — accent + wide */}
          <AccentCard entry={TONY} />
          <WideCard entry={DAWN} />

          {/* Row 4: three dark */}
          {DARK_ROW_2.map((entry) => (
            <DarkCard key={entry.name} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  )
}
