/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      green: "#00BB2D",
      blue: "#1B72BF",
      black: colors.black,
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      primary: "#A7916A",
    },
    extend: {},
  },
  plugins: [],
};
