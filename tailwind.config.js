/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        md: '788',
        lg: '1090px', // Default is 1024px
        xl: '1280px', // Default is 1280px

        tablet: '1090px',
        laptop: '1024px',
        desktop: '1280px',
      },
      fontFamily: {
        sans: ['var(--font-fira-sans)', 'var(--font-fallback-sans)'],
        code: ['var(--font-fira-code)', 'var(--font-fallback-code)'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        primary: {
          DEFAULT: '#544B84',
          80: '#6A6296',
          60: '#8179A8',
          40: '#9790BA',
          20: '#AEA8CC',
        },
        secondary: {
          DEFAULT: '#916C7C',
          80: '#A28693',
          60: '#B3A0A9',
          40: '#C4BAC0',
          20: '#D5D4D6',
        },
        gradient: {
          1: '#8B687F',
          2: '#785E80',
          3: '#6C5782',
        },
      },
      backgroundImage: {
        'gradient-primary':
          'linear-gradient(315deg, var(--primary), var(--gradient-stop))',
        'gradient-background':
          'linear-gradient(315deg, var(--primary), var(--secondary))',
        'gradient-brand':
          'linear-gradient(315deg, var(--secondary), var(--primary))',
        'gradient-text': 'linear-gradient(to bottom right, #916C7C, #916C7C)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary.DEFAULT'),
              '&:hover': {
                color: theme('colors.primary.80'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-gradient': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          color: 'transparent',
          '-webkit-text-fill-color': 'transparent',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}
