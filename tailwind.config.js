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
        sans: ["Lato", ...defaultTheme.fontFamily.sans]
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
