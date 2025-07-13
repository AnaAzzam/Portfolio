/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./portfolio/templates/**/*.html",
    "./portfolio/static/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}