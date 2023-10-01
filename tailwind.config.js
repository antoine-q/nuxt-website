const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: {
    safelist: [
      'mt-5',
      'mt-14'
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
        mono: ["Roboto Mono",...defaultTheme.fontFamily.sans]
      },
      colors:{
        primary:"#9F96FF",
        accent:"#F538B9",
        dark:"#00072D",
        light:"#DCF4FC",
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
