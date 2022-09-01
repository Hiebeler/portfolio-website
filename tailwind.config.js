/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '400px',
        'smHeight': { 'raw': '(max-height: 800px)' },
        'lgOrTall': { 'raw': '(max-height: 800px) and (max-width: 1024px' },
        // => @media (min-height: 800px) { ... }
        '2xlAndTall': { 'min': '1736px' },
        '2xl': '1736px',
      }
    },
    fontFamily: {
      dosis: ["Dosis"],
    },
    colors: {
      'dark_background': '#222629',
      'light_background': '#eaf3fa',
      'primary': '#86C232',
      'secondary': '#6b6E70'
    },
  },
  plugins: [],
}
