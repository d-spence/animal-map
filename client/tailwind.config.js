const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      gray: colors.blueGray,
      red: colors.red,
      green: colors.emerald,
      yellow: colors.yellow,
      orange: colors.amber,
      blue: colors.blue,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
