/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#274287',
        'primary-100': '#2E4599',
        'primary-150': '#3B4D8D',
        'primary-200': '#4A6BBF',
        'primary-300': '#3E61DB',
        secondary:'#D4A685',
        'secondary-50':'#FCF8F7',
        'secondary-light':'#E8BA99',
        'secondary-dark': '#A66D39',
        'neutral-50': '#ECEEF5',
        'neutral-100': '#DADCEA',
        'neutral-150': '#CCCEE4',
        'neutral-200': '#5860A4',
        'light-text': '#F1E5DE'
      },
      keyframes: {
        appear: {
          '0%': { opacity: '0' },
          '100%': { opacity: '100%' },
        },
        'delay-appear': {
          '0%': { opacity: '0' },
          '50%': { opacity: '0' },
          '60%': { opacity: '100%' },
        }
      },
      animation: {
        appear: 'appear 300ms ease-in-out',
        'slow-appear': 'appear 1s ease-in-out',
        'delay-appear': 'delay-appear 2s'
      }
    },
    fontFamily: {
      body: ['Source Code Pro', 'monospace'],
      display: ['Source Code Pro', 'monospace']
    },
  },
  plugins: [],
}
