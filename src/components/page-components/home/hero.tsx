import { LogosFlex } from '@/components/media/logos-flex'
import LPVideo from '../../../components/global/lp-video'

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-brand relative pb-24">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex flex-col lg:flex-row lg:items-center lg:gap-x-14">
            {/* Text content */}

            <LPVideo
              title="Content-Powered Growth Marketing for Developer Tools & Platforms"
              description="We build technical content engines that compound and resonate with developers, search engines and LLMs. Proven AI workflows and 300+ subject matter experts ensure fast turnaround times and high quality."
              downloadableAssetTitle="How to Set Up a Content Marketing Engine in the Age of AI"
              downloadableAssetURL="/content-marketing-engine"
              cta1="Book a Discovery Call"
              cta1URL="/call"
              cta2="What our clients say"
              cta2As="link"
              cta2URL="#casestudymain"
              video={{
                title: 'Service overview',
                poster: '/videos/poster-play.jpg',
                mp4Src: '/videos/lp_video_sm_2.mp4',
                webmSrc: '',
                tracks: [],
                startAt: 0,
              }}
            />
          </div>
          <LogosFlex />
        </div>
      </div>
    </section>
  )
}

export default Hero
