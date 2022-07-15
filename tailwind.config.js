/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4675D6',
        'primary-light': '#8da8de',
        secondary:'#E7AD8B',
        'secondary-light':'#F1C2A6'
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
      body: ['Inter', 'sans-serif'],
      display: ['Inter', 'sans-serif']
    },
  },
  plugins: [],
}
