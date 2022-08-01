/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#77CEC3',
        'primary-light': '#92BCDC',
        secondary:'#F2A798',
        'secondary-light':'#F3BDB2',
        'neutral-100': '#F3F5F5',
        'neutral-200': '#E9EEEF',
        'neutral-250': '#E2E8E9',
        'neutral-300': '#DAE2E3'
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
