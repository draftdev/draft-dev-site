import clsx from 'clsx'
import Image from 'next/image'

// Shared by the hero strip (LogosFlex) and the mid-page strip (LogosDark) so
// the roster and the per-logo sizing only ever live in one place.

// Default cap. Wide wordmarks hit the cell width first and letterbox down,
// which is what keeps a 10:1 mark from towering over a compact one.
const DEFAULT_SIZE = 'h-6 sm:h-8 md:h-10'

// `size` overrides exist because a logo's box says nothing about how big it
// *looks*: the artwork letterboxes inside it. These values were set by
// measuring rendered ink height/area against the original eight logos
// (~30px tall, ~1480px² of ink) and matching them.
export const logos = [
  { src: '/media/logos/docker-logo.svg', alt: 'Docker' },
  // Compact circular mark: needs extra height to carry the same optical
  // weight as the wordmarks around it.
  { src: '/media/logos/hp-logo.svg', alt: 'HP', size: 'h-8 sm:h-10 md:h-12' },
  // No overrides needed: measured at the default cap these land at 36/28/28px
  // of ink against a roster median of 32px, well inside the existing spread.
  // Qualcomm and Supabase are wide wordmarks that hit the 150px cell first,
  // same as Graphite and Auth0.
  { src: '/media/logos/cloudflare-logo.svg', alt: 'Cloudflare' },
  { src: '/media/logos/qualcomm-logo.svg', alt: 'Qualcomm' },
  { src: '/media/logos/supabase-logo.svg', alt: 'Supabase' },
  { src: '/media/logos/jetbrains-logo.svg', alt: 'JetBrains' },
  { src: '/media/logos/sinch-logo.svg', alt: 'Sinch' },
  { src: '/media/logos/red-panda-logo.svg', alt: 'Redpanda' },
  { src: '/media/logos/amadeus-logo.svg', alt: 'Amadeus' },
  { src: '/media/logos/loft-logo.svg', alt: 'Loft' },
  { src: '/media/logos/brightdata-logo.png', alt: 'brightdata' },
  { src: '/media/logos/descope-logo.png', alt: 'descope' },
  { src: '/media/logos/graphite.com.svg', alt: 'Graphite' },
  { src: '/media/logos/name.com.svg', alt: 'Name.com' },
  {
    src: '/media/logos/foxit-logo.svg',
    alt: 'Foxit',
    size: 'h-5 sm:h-6 md:h-8',
  },
  { src: '/media/logos/auth0-okta-logo.svg', alt: 'Auth0 by Okta' },
  {
    // Stacked icon + two-line lockup, so its lettering reads far smaller
    // than the box height suggests.
    src: '/media/logos/control-plane-logo.svg',
    alt: 'Control Plane',
    size: 'h-7 sm:h-9 md:h-11',
  },
]

const EDGE_FADE =
  'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'

function Logo({ src, alt, size }: { src: string; alt: string; size?: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      height={100}
      width={100}
      className={clsx('w-auto max-w-full object-contain', size ?? DEFAULT_SIZE)}
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
