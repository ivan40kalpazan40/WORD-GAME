/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        'wordle-gold': '#c8b653',
        'wordle-green': '#6ca965',
        'wordle-grey': '#787c7f',
        'wordle-lightgrey': '#d3d6da',
      },
    },
  },
  plugins: [],
};
