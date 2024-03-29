/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        md: "900px",
      },
      colors: {
        grayscale: {
          DEFAULT: "#212121",
          10: "#F1F1F1",
          50: "#CECECE",
          100: "#C4C4C4",
          200: "#B0B0B0",
          300: "#9B9B9B",
          400: "#878787",
          500: "#737373",
          600: "#5E5E5E",
          700: "#4A4A4A",
          800: "#353535",
          900: "#212121",
        },
        neutral: {
          DEFAULT: "#F4ECDE",
          50: "#F9F5ED",
          100: "#F4ECDE",
          200: "#E6D3B4",
          300: "#D8BA8A",
          400: "#CAA160",
          500: "#B5873C",
          600: "#8B682E",
          700: "#614820",
          800: "#372912",
          900: "#0D0A04",
          950: "#000000",
        },
        primary: {
          DEFAULT: "#BC6C25",
          50: "#EECAAA",
          100: "#EBC099",
          200: "#E4AA77",
          300: "#DE9555",
          400: "#D78033",
          500: "#BC6C25",
          600: "#8D511C",
          700: "#5E3613",
          800: "#2F1B09",
          900: "#010000",
          950: "#000000",
        },
        secondary: {
          DEFAULT: "#6E78B5",
          50: "#E8E9F3",
          100: "#DADDEC",
          200: "#BFC3DE",
          300: "#A4AAD0",
          400: "#8991C2",
          500: "#6E78B5",
          600: "#505A9B",
          700: "#3D4576",
          800: "#2A2F51",
          900: "#171A2C",
          950: "#0D0F19",
        },
        accent: {
          DEFAULT: "#E9A654",
          50: "#FEFBF7",
          100: "#FCF1E5",
          200: "#F7DEC0",
          300: "#F2CC9C",
          400: "#EEB978",
          500: "#E9A654",
          600: "#E38C22",
          700: "#B56E17",
          800: "#845011",
          900: "#52320B",
          950: "#392307",
        },
        link: {
          DEFAULT: "#3A8CE9",
          300: "#83B7F1",
          400: "#5FA1ED",
          500: "#3A8CE9",
          600: "#1870D3",
          700: "#1255A1",
        },
      },
      keyframes: {
        appear: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100%" },
        },
        "delay-appear": {
          "0%": { opacity: "0" },
          "50%": { opacity: "0" },
          "60%": { opacity: "100%" },
        },
      },
      animation: {
        appear: "appear 300ms ease-in-out",
        "slow-appear": "appear 700ms ease-in-out",
        "delay-appear": "delay-appear 700ms",
      },
    },
    fontFamily: {
      body: ["Inter", "sans-serif"],
      display: ["Overpass", "sans-serif"],
    },
  },
  plugins: [],
};
