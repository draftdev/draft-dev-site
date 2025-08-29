'use client'

import Link from 'next/link'

/** Inline Calendar icon */
function CalendarIconInline({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  )
}

/** Inline Clock icon */
function ClockIconInline({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  )
}

type Webinar = {
  title: string
  date: string
  time: string
  description1?: string
  description2?: string
  description3?: string
  registrationLink: string
  isFeatured?: boolean
}

function WebinarCard({
  title,
  date,
  time,
  description1,
  description2,
  description3,
  registrationLink,
  isFeatured = false,
}: Webinar) {
  const external = /^https?:\/\//i.test(registrationLink)
  return (
    <div className={isFeatured ? 'h-full pr-8' : 'h-full'}>
      <h3 className="mb-4 text-xl font-semibold text-gray-800">{title}</h3>

      <div className="mb-2 flex items-center space-x-2 text-gray-500">
        <CalendarIconInline className={isFeatured ? 'h-6 w-6' : 'h-5 w-5'} />
        <p>{date}</p>
      </div>

      <div className="mb-4 flex items-center space-x-2 text-gray-500">
        <ClockIconInline className={isFeatured ? 'h-6 w-6' : 'h-5 w-5'} />
        <p>{time}</p>
      </div>

      <div
        className={
          isFeatured
            ? 'my-6 text-lg text-gray-700'
            : 'my-2 text-lg text-gray-700'
        }
      >
        {description1 && <p className="mb-4">{description1}</p>}
        {description2 && <p className="mb-4">{description2}</p>}
        {description3 && <p>{description3}</p>}
      </div>

      <Link
        href={registrationLink}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={`inline-block ${isFeatured ? 'mt-6' : 'mt-3'} hover:bg-gradient-brand rounded-sm px-3.5 py-2 text-sm font-semibold text-gray-600 shadow-sm ring-2 ring-gray-500 hover:text-white hover:ring-white focus-visible:outline-2 focus-visible:outline-offset-2`}
      >
        Register Now
      </Link>
    </div>
  )
}

const UpcomingWebinars = () => {
  const webinars: Webinar[] = [
    {
      title:
        'How to Orchestrate Promotion Waves and Maximize Reach without Being Spammy',
      date: '12 Aug 2025',
      time: '11:00am CT',
      description1:
        "In this strategic webinar, Manuel Weiss will showcase frameworks for orchestrating effective content promotion across multiple channels. You'll learn how to create coordinated distribution waves, time promotions for maximum visibility without audience fatigue, and align marketing activities with sales enablement to drive business results.",
      description2:
        'Join us to discover how leading technical companies implement distribution playbooks that amplify content reach while maintaining audience trust and respect.',
      registrationLink:
        'https://us02web.zoom.us/webinar/register/8117543420135/WN_x99WD2Y4SH2Iy8CQ3kyMrw',
      isFeatured: true,
    },
    {
      title: 'Standing Out in a Competitive Landscape',
      date: '20 Aug 2025',
      time: '11:00pm CT',
      description1:
        'Join Karl Hughes (Draft.dev) in conversation with Trent Blakely (ConsoleConnect) and Andres Valero (SUSE) as they share battle-tested strategies for carving out your space in the competitive developer tools ecosystem',
      description2:
        "You'll learn practical approaches for identifying underserved niches, developing a compelling point of view that sets you apart, and building authentic differentiation that goes beyond marketing buzzwords.",
      registrationLink:
        'https://us02web.zoom.us/webinar/register/7617543419480/WN_48xkDiG1QSKof3PeVYtCNg',
      isFeatured: false,
    },
  ]

  return (
    <div className="overflow-hidden bg-white py-14 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 className="sm:subheader-gradient subheader-mobile-gradient mb-6 pb-10 text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Upcoming Webinars
        </h2>

        <div className="grid grid-cols-1 gap-x-10 gap-y-8 lg:grid-cols-2">
          <div className="lg:col-span-1">
            <WebinarCard {...webinars[0]} isFeatured />
          </div>

          <div className="flex flex-col justify-between space-y-4 lg:col-span-1">
            {webinars.slice(1, 3).map((webinar, idx) => (
              <WebinarCard key={idx} {...webinars[idx + 1]} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars
