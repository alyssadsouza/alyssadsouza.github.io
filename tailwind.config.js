/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#B1C8EA',
      'orange': '#F4C68A',
      'pink': '#F4BCBC',
      'yellow': '#F5D577',
      'white': '#FFF'
    },
    fontFamily: {
      body: ['Open\\Sans', 'sans-serif'],
      display: ['Karla', 'sans-serif']
    },
  },
  plugins: [],
}
