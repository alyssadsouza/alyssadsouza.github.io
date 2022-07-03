/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#B1C8EA'
        },
        orange: {
          500: '#F4C68A'
        },
        pink: {
          500: '#F4BCBC'
        },
        yellow: {
          500: '#F5D577'
        }
      }
    },
    fontFamily: {
      body: ['Open\\Sans', 'sans-serif'],
      display: ['Karla', 'sans-serif']
    },
  },
  plugins: [],
}
