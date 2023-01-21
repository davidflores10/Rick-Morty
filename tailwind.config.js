/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey_bg: {
          50: "#272b33",
        },
        grey_card: {
          50: "#3c3e44",
        },
        grey_title: {
          50: "#9e9e9e",
        },
      },
    },
  },
  plugins: [],
};
