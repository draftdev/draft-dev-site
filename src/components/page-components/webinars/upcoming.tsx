import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const WebinarCard = ({
  title,
  date,
  time,
  description1,
  description2,
  description3,
  registrationLink,
  isFeatured = false,
}) => {
  return (
    <div className={`${isFeatured ? 'h-full pr-8' : 'h-full'}`}>
      <h3 className="mb-4 text-xl font-semibold text-gray-800">{title}</h3>
      <div className="mb-2 flex items-center space-x-2 text-gray-500">
        <CalendarIcon className={`${isFeatured ? 'h-6 w-6' : 'h-5 w-5'}`} />
        <p>{date}</p>
      </div>
      <div className="mb-4 flex items-center space-x-2 text-gray-500">
        <ClockIcon className={`${isFeatured ? 'h-6 w-6' : 'h-5 w-5'}`} />
        <p>{time}</p>
      </div>

      {isFeatured ? (
        <div className="my-6 text-lg text-gray-700">
          {description1 && <p className="mb-4">{description1}</p>}
          {description2 && <p className="mb-4">{description2}</p>}
          {description3 && <p>{description3}</p>}
        </div>
      ) : (
        <div className="my-2 text-lg text-gray-700">
          {description1 && <p className="mb-4">{description1}</p>}
          {description2 && <p className="mb-4">{description2}</p>}
          {description3 && <p>{description3}</p>}
        </div>
      )}

      <Link
        href={registrationLink}
        className={`inline-block ${isFeatured ? 'mt-6' : 'mt-3'} rounded-sm px-3.5 py-2 text-sm font-semibold text-gray-600 shadow-sm ring-2 ring-gray-500 hover:bg-gradient-brand hover:text-white hover:ring-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
      >
        Register Now
      </Link>
    </div>
  )
}

const UpcomingWebinars = () => {
  // Sample data for the webinars
  const webinars = [
    {
      title:
        'How to Orchestrate Promotion Waves and Maximize Reach without Being Spammy',
      date: '6 Aug 2025',
      time: '11:00am CT',
      description1:
        "In this strategic webinar, Manuel Weiss will showcase frameworks for orchestrating effective content promotion across multiple channels. You'll learn how to create coordinated distribution waves, time promotions for maximum visibility without audience fatigue, and align marketing activities with sales enablement to drive business results.",
      description2:
        'Join us to discover how leading technical companies implement distribution playbooks that amplify content reach while maintaining audience trust and respect.',
      description3: '',

      registrationLink:
        'https://us02web.zoom.us/webinar/register/8417489732873/WN_T5ymVqZhShKUernjiQg_Cg',
      isFeatured: true,
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
            <WebinarCard
              title={webinars[0].title}
              date={webinars[0].date}
              time={webinars[0].time}
              description1={webinars[0].description1}
              description2={webinars[0].description2}
              description3={webinars[0].description3}
              registrationLink={webinars[0].registrationLink}
              isFeatured={true}
            />
          </div>

          <div className="flex flex-col justify-between space-y-4 lg:col-span-1">
            {webinars.slice(1, 3).map((webinar, index) => (
              <WebinarCard
                key={index}
                title={webinar.title}
                date={webinar.date}
                time={webinar.time}
                description1={webinar.description1}
                description2={webinar.description2}
                description3={webinar.description3}
                registrationLink={webinar.registrationLink}
                isFeatured={false}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars
