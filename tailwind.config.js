/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'bg-nav': '#222',
        'border-grey': '#444',
        'text-grey': '#AAA',
        'grey-200': '#282828',
      }
    },
  },
  plugins: [],
}

