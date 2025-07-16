'use client'

export default function GoogleTagManagerNoScript() {
  return (
    <noscript
      dangerouslySetInnerHTML={{
        __html: `
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5W5755G3"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>
      `,
      }}
    />
  )
}
