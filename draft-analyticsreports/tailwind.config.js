/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/templates/**/*.ejs"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FAF8FB',
          100: '#F3EEF6',
          200: '#E8E0EE',
          300: '#D4C6DE',
          400: '#B8A3C5',
          500: '#9B7FAC',
          600: '#7D5F8E',
          700: '#654B73',
          800: '#523D5E',
          900: '#3D2E47',
          950: '#2A1F31',
        }
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #8B7399 0%, #6B5478 50%, #4A3857 100%)',
        'brand-gradient-light': 'linear-gradient(135deg, #9B8AA8 0%, #7B6488 100%)',
      }
    },
  },
  plugins: [],
}
