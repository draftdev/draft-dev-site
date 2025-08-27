/** @type {import('tailwindcss').Config} */
const base = require('./tailwind.config.js')

module.exports = {
  // Only scan this one file so the output stays small
  content: ['./src/styles/extra.css'],

  // Reuse your theme + plugins
  theme: base.theme,
  plugins: base.plugins,

  // We don't need resets/containers here
  corePlugins: {
    preflight: false,
    container: false,
  },
}
