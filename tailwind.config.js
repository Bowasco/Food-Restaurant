/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customYellow: '#fbe690',
        customPink: '#f9f2ea',
        customRed: '#dd2803'
      },
      width: {
        custom: '1100px',
        customW: '46%',
      },
    },
  },
  plugins: [],
}