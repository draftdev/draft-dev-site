'use client'

import {
  PauseIcon,
  PlayIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
} from '@heroicons/react/24/solid'
import { useCallback, useEffect, useId, useRef, useState } from 'react'

type Track = {
  src: string
  srcLang: string
  label: string
  kind?: 'captions' | 'subtitles'
}

export type HeroVideoConfig = {
  title: string
  /** URL string from /public or https URL. Example: "/images/poster.jpg" */
  poster: string
  /** URL string from /public or https URL. Example: "/videos/clip.mp4" */
  mp4Src: string
  /** URL string from /public or https URL. Example: "/videos/clip.webm" */
  webmSrc?: string
  tracks?: Track[]
  /** Begin playback at this time (seconds). */
  startAt?: number
}

export default function HeroVideoPlayer({
  title,
  poster,
  mp4Src,
  webmSrc,
  tracks = [],
  startAt = 0,
}: HeroVideoConfig) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const volPanelRef = useRef<HTMLDivElement | null>(null)
  const hideTimerRef = useRef<number | null>(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [controlsVisible, setControlsVisible] = useState(false)

  const [volume, setVolume] = useState(1)
  const [showVol, setShowVol] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const appliedStartRef = useRef(false)

  const labelId = useId()

  // Guard: don’t allow non-string sources (prevents accidental imports)
  if (process.env.NODE_ENV !== 'production') {
    const all = [poster, mp4Src, webmSrc, ...tracks.map((t) => t?.src)].filter(
      Boolean,
    )
    if (all.some((v) => typeof v !== 'string')) {
      // eslint-disable-next-line no-console
      console.warn(
        'HeroVideoPlayer: All media props must be URL strings (e.g. "/videos/foo.mp4"). Do NOT import media.',
      )
    }
  }

  const clearHideTimer = useCallback(() => {
    if (hideTimerRef.current !== null) {
      window.clearTimeout(hideTimerRef.current)
      hideTimerRef.current = null
    }
  }, [])

  const pokeControls = useCallback(
    (ms = 2500) => {
      setControlsVisible(true)
      clearHideTimer()
      hideTimerRef.current = window.setTimeout(() => {
        if (!showVol) setControlsVisible(false)
      }, ms) as unknown as number
    },
    [clearHideTimer, showVol],
  )

  // Lazy-add sources near viewport (keeps poster for LCP)
  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true)
      },
      { rootMargin: '200px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Force <video> to parse newly added <source> tags
  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    if (isInView) {
      el.load()
    }
  }, [isInView, mp4Src, webmSrc])

  // Sync + apply startAt after metadata
  useEffect(() => {
    const el = videoRef.current
    if (!el) return

    const onLoaded = () => {
      setDuration(el.duration || 0)
      setVolume(el.volume)
      if (startAt > 0 && !appliedStartRef.current && el.readyState >= 1) {
        const target = Math.min(Math.max(startAt, 0), el.duration || startAt)
        if (Number.isFinite(target)) {
          el.currentTime = target
          setCurrentTime(el.currentTime)
          appliedStartRef.current = true
        }
      }
    }
    const onTime = () => setCurrentTime(el.currentTime || 0)
    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)
    const onVolume = () => setVolume(el.volume)

    el.addEventListener('loadedmetadata', onLoaded)
    el.addEventListener('timeupdate', onTime)
    el.addEventListener('play', onPlay)
    el.addEventListener('pause', onPause)
    el.addEventListener('volumechange', onVolume)
    return () => {
      el.removeEventListener('loadedmetadata', onLoaded)
      el.removeEventListener('timeupdate', onTime)
      el.removeEventListener('play', onPlay)
      el.removeEventListener('pause', onPause)
      el.removeEventListener('volumechange', onVolume)
    }
  }, [startAt])

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    el.volume = Math.min(Math.max(volume, 0), 1)
  }, [volume])

  useEffect(() => {
    if (showVol) {
      setControlsVisible(true)
      clearHideTimer()
    } else if (isPlaying) {
      pokeControls()
    }
  }, [showVol, isPlaying, clearHideTimer, pokeControls])

  useEffect(() => () => clearHideTimer(), [clearHideTimer])

  const togglePlay = () => {
    const el = videoRef.current
    if (!el) return
    pokeControls()
    if (el.paused) {
      if (startAt > 0 && el.readyState >= 1 && !appliedStartRef.current) {
        const target = Math.min(Math.max(startAt, 0), el.duration || startAt)
        if (Number.isFinite(target)) {
          el.currentTime = target
          setCurrentTime(el.currentTime)
          appliedStartRef.current = true
        }
      }
      void el.play().catch(() => undefined)
    } else {
      el.pause()
    }
  }

  const setVideoTime = (t: number) => {
    const el = videoRef.current
    if (!el) return
    const clamped = Math.min(Math.max(t, 0), duration || 0)
    el.currentTime = clamped
    setCurrentTime(clamped)
    pokeControls()
  }

  const fmt = (s: number) => {
    if (!isFinite(s)) return '0:00'
    const m = Math.floor(s / 60)
    const r = Math.floor(s % 60)
    return `${m}:${r.toString().padStart(2, '0')}`
  }

  const safeTracks = tracks.filter((t) => t.src && t.src.trim().length > 0)

  return (
    <div
      ref={containerRef}
      className="relative aspect-[9/16] w-[280px] overflow-hidden sm:w-[300px] lg:w-[350px] xl:w-[400px]"
      onMouseEnter={() => pokeControls(4000)}
      onMouseMove={() => pokeControls(4000)}
      onMouseLeave={() => setControlsVisible(false)}
      onTouchStart={() => pokeControls(4000)}
    >
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        preload="metadata"
        controls={false}
        playsInline
        poster={poster}
        aria-labelledby={labelId}
        onClick={togglePlay}
      >
        {isInView && webmSrc && <source src={webmSrc} type="video/webm" />}
        {isInView && <source src={mp4Src} type="video/mp4" />}
        {safeTracks.map((t, i) => (
          <track
            key={i}
            src={t.src}
            kind={t.kind ?? 'captions'}
            srcLang={t.srcLang}
            label={t.label}
            default={i === 0}
          />
        ))}
        Your browser does not support HTML5 video.
      </video>

      <span id={labelId} className="sr-only">
        {title}
      </span>

      {/* legibility gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
      />

      {/* Controls (fade) */}
      <div
        className={[
          'absolute inset-x-3 bottom-3 space-y-2 transition-opacity duration-300',
          controlsVisible
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0',
        ].join(' ')}
      >
        {/* Progress */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-medium text-white/90 tabular-nums">
            {fmt(currentTime)}
          </span>
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={Number.isFinite(currentTime) ? currentTime : 0}
            onChange={(e) => setVideoTime(parseFloat(e.target.value))}
            onInput={() => pokeControls(4000)}
            className="w-full accent-[#544b84]"
            aria-label="Seek video"
          />
          <span className="text-[11px] font-medium text-white/90 tabular-nums">
            {fmt(duration || 0)}
          </span>
        </div>

        {/* Buttons */}
        <div className="relative flex items-center gap-2">
          <button
            type="button"
            onClick={togglePlay}
            className="inline-flex items-center justify-center rounded-lg bg-[#544b84] px-3.5 py-2 text-sm font-semibold text-white shadow hover:bg-[#1f2937] focus:ring-2 focus:ring-[#1f2937]/50 focus:outline-none"
            aria-pressed={isPlaying}
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? (
              <PauseIcon className="h-5 w-5 text-white" />
            ) : (
              <PlayIcon className="h-5 w-5 text-white" />
            )}
            <span className="sr-only">{isPlaying ? 'Pause' : 'Play'}</span>
          </button>

          {/* Volume popover (opens UP) */}
          <div className="relative ml-auto" ref={volPanelRef}>
            <button
              type="button"
              onClick={() => {
                setShowVol((s) => !s)
                pokeControls(4000)
              }}
              className="flex items-center gap-2 rounded-lg bg-[#544b84] px-3 py-2 text-sm font-medium text-white shadow hover:bg-[#1f2937] focus:ring-2 focus:ring-[#1f2937]/50 focus:outline-none"
              aria-haspopup="true"
              aria-expanded={showVol}
              aria-label="Volume"
            >
              {volume === 0 ? (
                <SpeakerXMarkIcon className="h-5 w-5 text-white" />
              ) : (
                <SpeakerWaveIcon className="h-5 w-5 text-white" />
              )}
              <span className="text-white tabular-nums">
                {Math.round(volume * 100)}%
              </span>
            </button>

            {showVol && (
              <div
                role="dialog"
                aria-label="Volume control"
                className="absolute right-0 bottom-full z-10 mb-2 rounded-lg bg-white p-3 shadow-lg ring-1 ring-black/5"
              >
                <div className="flex items-center justify-center">
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={Number.isFinite(volume) ? volume : 1}
                    onChange={(e) => {
                      setVolume(parseFloat(e.target.value))
                      pokeControls(4000)
                    }}
                    onInput={() => pokeControls(4000)}
                    aria-label="Volume slider"
                    className="tpc-vert-range"
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowUp') {
                        e.preventDefault()
                        setVolume((v) => Math.min(v + 0.05, 1))
                      }
                      if (e.key === 'ArrowDown') {
                        e.preventDefault()
                        setVolume((v) => Math.max(v - 0.05, 0))
                      }
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* vertical slider styles */}
      <style jsx global>{`
        .tpc-vert-range {
          appearance: slider-vertical;
          writing-mode: bt-lr;
          width: 22px;
          height: 180px;
          padding: 0;
          background: transparent;
          cursor: pointer;
        }
        .tpc-vert-range::-webkit-slider-runnable-track {
          background: #1f2937;
          border-radius: 9999px;
          height: 100%;
        }
        .tpc-vert-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 9999px;
          background: #544b84;
          border: 2px solid #fff;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
          margin: 0;
        }
        .tpc-vert-range::-moz-range-track {
          background: #1f2937;
          border-radius: 9999px;
          width: 22px;
        }
        .tpc-vert-range::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border: 2px solid #fff;
          border-radius: 9999px;
          background: #544b84;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
        }
        .tpc-vert-range::-moz-range-progress {
          background: #28536b;
        }
        .tpc-vert-range:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px rgba(31, 41, 55, 0.6);
          border-radius: 8px;
        }
      `}</style>
    </div>
  )
}
