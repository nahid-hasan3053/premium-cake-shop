/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        caketheme: {
          primary: '#FFC4D4',
          secondary: '#FFF3F6',
          accent: '#EFE3E6',
          'base-100': '#ffffff'
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}