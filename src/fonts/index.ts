import localFont from 'next/font/local'

export const firaSans = localFont({
  src: [
    {
      path: './FiraSans-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './FiraSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './FiraSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './FiraSans-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './FiraSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-fira-sans',
  preload: true,
})

export const firaCode = localFont({
  src: [
    {
      path: './FiraCode-VariableFont_wght.ttf',
      weight: '300 700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-fira-code',
  preload: true,
})
