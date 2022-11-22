/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:"sans",
        sansBold:"sansBold",
        sansMedium:"sansMedium",
        snasBlack:"snasBlack",
      },
      colors:{
        black:"#222f3e"
      }
    },
  },
  plugins: [],
}
