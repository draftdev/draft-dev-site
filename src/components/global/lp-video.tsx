// components/landing/PodcastLPVideo.tsx
import Link from 'next/link'
import React, { ReactNode } from 'react'
import HeroVideoPlayer, {
  HeroVideoConfig,
} from '../../components/global/hero-video-player'

type CTA2Mode = 'auto' | 'modal' | 'link'

interface PodcastLPVideoProps {
  title: string
  description: string
  downloadableAssetTitle: string
  downloadableAssetURL: string

  cta1: string
  cta1URL: string

  cta2?: string
  cta2URL?: string

  dialogTitle?: ReactNode
  dialogContent?: string
  videoUrl?: string
  cta2As?: CTA2Mode

  video?: HeroVideoConfig
}

function isAbsoluteHttpUrl(url?: string) {
  if (!url) return false
  return /^https?:\/\//i.test(url)
}

const PodcastLPVideo: React.FC<PodcastLPVideoProps> = ({
  title,
  description,
  downloadableAssetTitle,
  downloadableAssetURL,
  cta1,
  cta1URL,
  cta2,
  cta2URL,
  dialogTitle,
  dialogContent,
  videoUrl,
  cta2As = 'auto',
  video,
}) => {
  // Decide how CTA #2 should render
  const modalPropsAreValid =
    !!cta2 && !!dialogTitle && !!dialogContent && isAbsoluteHttpUrl(videoUrl)

  let renderAs: 'modal' | 'link' | 'none' = 'none'

  if (cta2As === 'modal') {
    renderAs = modalPropsAreValid ? 'modal' : cta2URL ? 'link' : 'none'
  } else if (cta2As === 'link') {
    renderAs = cta2 && cta2URL ? 'link' : 'none'
  } else {
    if (modalPropsAreValid) renderAs = 'modal'
    else if (cta2 && cta2URL) renderAs = 'link'
    else renderAs = 'none'
  }

  return (
    <div className="">
      <main className="relative isolate py-10">
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 py-2 sm:py-8 lg:px-8">
            <div className="mx-auto w-full lg:flex lg:items-center lg:justify-between lg:gap-12">
              {/* Left: copy */}
              <div className="relative max-w-2xl lg:shrink-0">
                <div className="py-3 lg:mt-16">
                  <Link
                    href={downloadableAssetURL}
                    className="text-primary ring-primary-40 mr-3 inline-block rounded-full bg-white px-3 py-1 text-sm font-semibold ring-1 ring-inset"
                  >
                    New eBook
                  </Link>

                  <Link href={downloadableAssetURL} className="inline-flex">
                    <span className="inline-flex items-center text-sm text-white">
                      {downloadableAssetTitle}
                      <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                </div>

                <h1 className="font-code mb-4 py-2 text-left text-4xl leading-tight font-semibold text-white sm:text-5xl">
                  {title}
                </h1>

                <p className="mt-3 max-w-[60ch] text-base text-gray-100 sm:text-lg">
                  {description}
                </p>

                <div className="mt-16 mb-6 flex flex-col items-start gap-y-4 pl-3 sm:mb-0 sm:flex-row sm:items-center sm:gap-x-6 sm:gap-y-0 lg:pl-0">
                  <Link
                    href={cta1URL}
                    className="focus-visible:outline-primary mb-8 inline-block rounded-sm px-3.5 py-2.5 font-semibold text-white shadow-sm ring-2 ring-white hover:bg-white hover:text-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 sm:mb-0 sm:text-base"
                  >
                    {cta1}
                  </Link>
                  {renderAs === 'link' && cta2 && cta2URL && (
                    <Link
                      href={cta2URL}
                      className="inline-block font-semibold text-white hover:text-gray-200 sm:text-base"
                    >
                      {cta2} <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </div>
              </div>

              {/* Right: hero video */}
              <div className="mt-10 hidden justify-center lg:flex lg:justify-start">
                <div className="inline-block shrink-0">
                  <div className="rounded-[2rem] bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
                    <div className="rounded-[1.75rem] p-2 shadow-md shadow-black/5">
                      <div className="overflow-hidden rounded-[1.5rem]">
                        {video && (
                          <HeroVideoPlayer
                            title={video.title}
                            poster={video.poster}
                            mp4Src={video.mp4Src}
                            webmSrc={video.webmSrc}
                            tracks={video.tracks}
                            startAt={video.startAt}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default PodcastLPVideo
