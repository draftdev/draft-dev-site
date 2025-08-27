// app/layout.tsx
import DeferStyles from '@/components/defer-styles'
import Banner from '@/components/media/banner'
import '@/styles/tailwind.css'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { firaCode, firaSans } from '../fonts/fonts'

const Analytics = dynamic(() => import('@/components/analytics'), {
  ssr: false,
})

const DynamicNavbar = dynamic(
  () => import('@/components/global/navbar-dynamic'),
  { ssr: true },
)

const Footer = dynamic(
  () => import('@/components/global/footer').then((mod) => mod.Footer),
  {
    ssr: false,
    loading: () => <div className="h-64 bg-gradient-brand"></div>,
  },
)

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#544b84',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${firaSans.variable} ${firaCode.variable}`}>
      <head>
        {/* Preload to keep it snappy, but don’t block render */}
        <link rel="preload" href="/extra.css" as="style" />
        {/* No event handlers here (Server Component). We’ll flip via DeferStyles */}
        <link
          rel="stylesheet"
          href="/extra.css"
          media="print"
          data-defer-style="extra"
        />
        {/* No-JS fallback */}
        <noscript>
          <link rel="stylesheet" href="/extra.css" />
        </noscript>
      </head>
      <body className="bg-white antialiased">
        {/* Client helper that flips media=all once the CSS has loaded */}
        <DeferStyles />

        <Suspense fallback={null}>
          <Analytics />
        </Suspense>

        <Banner
          text="Download Our FREE eBook: How to Set Up a Content Marketing Engine in the Age of AI →"
          link="https://draft.dev/content-marketing-engine"
        />

        <DynamicNavbar />

        <div className="flex min-h-screen flex-col">
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

// import Banner from '@/components/media/banner'
// import '@/styles/tailwind.css'
// import dynamic from 'next/dynamic'
// import { Suspense } from 'react'
// import { firaCode, firaSans } from '../fonts/fonts'

// const Analytics = dynamic(() => import('@/components/analytics'), {
//   ssr: false,
// })

// const DynamicNavbar = dynamic(
//   () => import('@/components/global/navbar-dynamic'),
//   { ssr: true },
// )

// const Footer = dynamic(
//   () => import('@/components/global/footer').then((mod) => mod.Footer),
//   {
//     ssr: false,
//     loading: () => <div className="h-64 bg-gradient-brand"></div>,
//   },
// )

// export const viewport = {
//   width: 'device-width',
//   initialScale: 1,
//   maximumScale: 5,
//   themeColor: '#544b84',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className={`${firaSans.variable} ${firaCode.variable}`}>
//       <body className="bg-white antialiased">
//         <Suspense fallback={null}>
//           <Analytics />
//         </Suspense>

//         <Banner
//           text="Download Our FREE eBook: How to Set Up a Content Marketing Engine in the Age of AI →"
//           link="https://draft.dev/content-marketing-engine"
//         />

//         <DynamicNavbar />

//         <div className="flex min-h-screen flex-col">
//           <main className="flex-grow">{children}</main>
//           <Footer />
//         </div>
//       </body>
//     </html>
//   )
// }
