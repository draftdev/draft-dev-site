import clsx from 'clsx'
import Image from 'next/image'

// Shared by the hero strip (LogosFlex) and the mid-page strip (LogosDark) so
// the roster and the per-logo sizing only ever live in one place.

// Default cap. Wide wordmarks hit the cell width first and letterbox down,
// which is what keeps a 10:1 mark from towering over a compact one.
const DEFAULT_SIZE = 'h-6 sm:h-8 md:h-10'

// `size` overrides exist because a logo's box says nothing about how big it
// *looks*: the artwork letterboxes inside it, and a 10:1 wordmark reads far
// heavier than a compact mark at the same height.
//
// These values are measured, not eyeballed. Each logo was rasterised at its
// rendered size in the 390px mobile grid and its opaque pixels counted, giving
// an ink area per logo; the override scales the cap by sqrt(target/area) so
// every logo carries the same optical mass. Target is the roster median,
// sqrt(area) ~= 22 at the h-6 mobile cap. Re-measure before eyeballing a new
// value — the spread was 16.7-30.7 by eye and is 20-24 measured.
export const logos = [
  { src: '/media/logos/docker-logo.svg', alt: 'Docker', size: 'h-8 sm:h-10 md:h-12' },
  // Compact circular mark: needs extra height to carry the same optical
  // weight as the wordmarks around it.
  { src: '/media/logos/hp-logo.svg', alt: 'HP', size: 'h-8 sm:h-10 md:h-12' },
  { src: '/media/logos/cloudflare-logo.svg', alt: 'Cloudflare', size: 'h-7 sm:h-9 md:h-11' },
  // Wide, densely-set wordmarks: heaviest on the strip at the default cap
  // (ink area 942 and 817 against a median of 506), so they come down hardest.
  { src: '/media/logos/qualcomm-logo.svg', alt: 'Qualcomm', size: 'h-4 sm:h-6 md:h-7' },
  { src: '/media/logos/supabase-logo.svg', alt: 'Supabase', size: 'h-5 sm:h-6 md:h-8' },
  { src: '/media/logos/jetbrains-logo.svg', alt: 'JetBrains' },
  { src: '/media/logos/sinch-logo.svg', alt: 'Sinch', size: 'h-7 sm:h-9 md:h-11' },
  { src: '/media/logos/red-panda-logo.svg', alt: 'Redpanda', size: 'h-5 sm:h-7 md:h-9' },
  { src: '/media/logos/amadeus-logo.svg', alt: 'Amadeus' },
  // Short, light wordmark — the lightest on the strip, so it scales up most.
  { src: '/media/logos/loft-logo.svg', alt: 'Loft', size: 'h-8 sm:h-10 md:h-12' },
  { src: '/media/logos/brightdata-logo.png', alt: 'brightdata' },
  { src: '/media/logos/descope-logo.png', alt: 'descope' },
  { src: '/media/logos/graphite.com.svg', alt: 'Graphite', size: 'h-5 sm:h-7 md:h-9' },
  // Bold, and at ~9.7:1 it fills the mobile cell edge to edge, so its height
  // cap never binds — the width cap is what brings its mass down to the median.
  {
    src: '/media/logos/name.com.svg',
    alt: 'Name.com',
    size: 'h-5 sm:h-6 md:h-8',
    maxW: 'max-w-[110px] sm:max-w-full',
  },
  { src: '/media/logos/foxit-logo.svg', alt: 'Foxit', size: 'h-6 sm:h-7 md:h-9' },
  { src: '/media/logos/auth0-okta-logo.svg', alt: 'Auth0 by Okta', size: 'h-7 sm:h-9 md:h-11' },
  // Mark + wordmark lockup at ~4.4:1, so like the other wide marks it hits the
  // cell width before the height cap.
  { src: '/media/logos/wordpress-logo.svg', alt: 'WordPress', size: 'h-7 sm:h-9 md:h-11' },
  { src: '/media/logos/control-plane-logo.svg', alt: 'Control Plane', size: 'h-7 sm:h-9 md:h-11' },
]

const EDGE_FADE =
  'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'

function Logo({
  src,
  alt,
  size,
  maxW,
}: {
  src: string
  alt: string
  size?: string
  maxW?: string
}) {
  return (
    <Image
      src={src}
      alt={alt}
      height={100}
      width={100}
      className={clsx(
        'w-auto object-contain',
        size ?? DEFAULT_SIZE,
        // A logo wide enough to hit the cell width is sized by that width, not
        // by its height cap, so `maxW` is the only lever that can shrink it.
        maxW ?? 'max-w-full',
      )}
      loading="lazy"
    />
  )
}

/** Static grid — used below lg, where a moving strip would be unreadable. */
export function LogoGrid({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        'mx-auto grid grid-cols-2 items-center gap-x-6 gap-y-6 rounded-lg bg-white/5 p-4 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-8 sm:p-6 md:grid-cols-4 lg:hidden',
        className,
      )}
    >
      {logos.map((logo) => (
        <div key={logo.alt} className="flex items-center justify-center">
          <Logo {...logo} />
        </div>
      ))}
    </div>
  )
}

/**
 * Continuous marquee for lg and up. The track holds two identical copies and
 * animates to -50%, so the loop point lands exactly on the seam.
 */
export function LogoMarquee({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        'hidden overflow-hidden rounded-lg bg-white/5 py-8 lg:block',
        className,
      )}
      style={{ maskImage: EDGE_FADE, WebkitMaskImage: EDGE_FADE }}
    >
      <div className="animate-marquee flex w-max motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            className="flex shrink-0 items-center gap-16 pr-16"
            aria-hidden={copy === 1 || undefined}
          >
            {logos.map((logo) => (
              <li
                key={logo.alt}
                // Fixed-width cells keep the track geometry constant, so
                // lazy-loaded logos can't shift the marquee as they arrive.
                className="flex w-[150px] shrink-0 items-center justify-center"
              >
                <Logo {...logo} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
