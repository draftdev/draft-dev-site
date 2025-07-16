// 'use client'
// // components/global/google-analytics.tsx

// import { GTM_ID } from '@/app/utils/analytics'
// import { usePathname, useSearchParams } from 'next/navigation'
// import Script from 'next/script'
// import { Suspense, useEffect } from 'react'

// function AnalyticsPathTracker() {
//   const pathname = usePathname()
//   const searchParams = useSearchParams()

//   useEffect(() => {
//     if (pathname) {
//       const pageUrl =
//         pathname +
//         (searchParams?.toString() ? `?${searchParams.toString()}` : '')

//       // Send pageview to GTM
//       if (window.dataLayer) {
//         window.dataLayer.push({
//           event: 'pageview',
//           page: pageUrl,
//         })
//       }
//     }
//   }, [pathname, searchParams])

//   return null
// }

// export default function GoogleAnalytics() {
//   return (
//     <>
//       {/* Google Tag Manager */}
//       <Script
//         id="gtm-script"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: `
//             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//             })(window,document,'script','dataLayer','${GTM_ID}');
//           `,
//         }}
//       />

//       {/* Note: We're removing the direct GA4 implementation since we'll use GTM for this */}

//       <Suspense fallback={null}>
//         <AnalyticsPathTracker />
//       </Suspense>
//     </>
//   )
// }

'use client'
// components/global/google-analytics.tsx

import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { Suspense, useEffect } from 'react'

function AnalyticsPathTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // For GTM
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'pageview',
        page: pathname + searchParams.toString(),
      })
    }

    // For direct GA4
    if (window.gtag) {
      window.gtag('config', 'G-N4PJMERESN', {
        page_path: pathname + searchParams.toString(),
      })
    }
  }, [pathname, searchParams])

  return null
}

export default function GoogleAnalytics() {
  useEffect(() => {
    const GTM_ID = 'GTM-5W5755G3'

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js',
    })

    // Check if GTM is already initialized
    const initGTM = () => {
      if (window.gtmDidInit) return
      window.gtmDidInit = true

      // Push additional initialization events
      window.dataLayer.push({
        event: 'gtm.js',
        'gtm.start': new Date().getTime(),
        'gtm.uniqueEventId': 0,
      })
    }

    // Set up event listeners for user interaction
    const initGTMOnEvent = (event: Event) => {
      initGTM()
      event.currentTarget?.removeEventListener(event.type, initGTMOnEvent)
    }

    // Add event listeners for scroll, mouse movement, and touch
    document.addEventListener('scroll', initGTMOnEvent, { once: true })
    document.addEventListener('mousemove', initGTMOnEvent, { once: true })
    document.addEventListener('touchstart', initGTMOnEvent, { once: true })

    // Initialize GTM after a timeout as fallback
    const timeoutId = setTimeout(initGTM, 3500)

    return () => {
      clearTimeout(timeoutId)
      document.removeEventListener('scroll', initGTMOnEvent)
      document.removeEventListener('mousemove', initGTMOnEvent)
      document.removeEventListener('touchstart', initGTMOnEvent)
    }
  }, [])

  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5W5755G3');
          `,
        }}
      />

      {/* GA4 direct implementation */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-N4PJMERESN"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N4PJMERESN', {
              debug_mode: true
            });
          `,
        }}
      />

      <Suspense fallback={null}>
        <AnalyticsPathTracker />
      </Suspense>
    </>
  )
}
