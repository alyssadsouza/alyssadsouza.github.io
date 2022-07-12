/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#608010',
        'primary-light': '#A2B079',
        secondary:'#EDB9CD',
        'secondary-light':'#DBA0B6',
        beige: '#FFF4DD',
        'beige-400': '#EBDBB8',
        'beige-600': '#DBC087'
      },
      keyframes: {
        appear: {
          '0%': { opacity: '0' },
          '100%': { opacity: '100%' },
        }
      },
      animation: {
        appear: 'appear 300ms ease-in-out',
        'slow-appear': 'appear 1s ease-in-out',
      }
    },
    fontFamily: {
      body: ['Open\\Sans', 'sans-serif'],
      display: ['Karla', 'sans-serif']
    },
  },
  plugins: [],
}
