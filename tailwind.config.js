/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
