import localFont from 'next/font/local'

export const firaSans = localFont({
  src: [
    { path: './FiraSans-Regular.ttf', weight: '400', style: 'normal' },
    { path: './FiraSans-Italic.ttf', weight: '400', style: 'italic' },
    { path: './FiraSans-Medium.ttf', weight: '500', style: 'normal' },
    { path: './FiraSans-Bold.ttf', weight: '700', style: 'normal' },
    { path: './FiraSans-BoldItalic.ttf', weight: '700', style: 'italic' },
  ],
  display: 'swap',
  variable: '--font-fira-sans',
})

export const firaCode = localFont({
  src: [{ path: './FiraCode-VariableFont_wght.ttf', style: 'normal' }],
  display: 'swap',
  variable: '--font-fira-code',
})
