// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#191818',      
        'primary-darker': '#131212',      
        'border-subtle': '#444',     
        'profile': '#252525',
        'text-secondary': '#AAA',    
        'hover-highlight': '#282828' 
      }
    },
  },
  plugins: [],
}