/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B1C8EA',
        'primary-light': '#d1ddef',
        secondary:'#F4BCBC',
        'secondary-light':'#f0cdcd'
      },
      keyframes: {
        appear: {
          '0%': { opacity: '0' },
          '100%': { opacity: '100%' },
        }
      },
      animation: {
        appear: 'appear 300ms ease-in-out',
      }
    },
    fontFamily: {
      body: ['Open\\Sans', 'sans-serif'],
      display: ['Karla', 'sans-serif']
    },
  },
  plugins: [],
}
