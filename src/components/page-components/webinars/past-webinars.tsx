import type { Data } from '@/components/global/types'
import { ResourceCard } from '../resources/resource-card'
import { pastWebinars } from './data'

const PastWebinars = () => {
  return (
    <div className="overflow-hidden bg-gradient-brand py-24" id="past-webinars">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 className="sm:subheader-light subheader-mobile-light pb-6">
            Past Webinars
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pastWebinars.map((webinar: Data) => (
              <ResourceCard key={webinar.id} resource={webinar} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PastWebinars
