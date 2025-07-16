// types/global.d.ts

export type Data = {
  id: string
  title: string
  url: string
  date: string
  description?: string
}

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set' | 'consent',
      targetId: string | Date,
      config?: {
        [key: string]: any
      },
    ) => void
    dataLayer: any[]
    gtmDidInit: boolean
  }
}

export {}
