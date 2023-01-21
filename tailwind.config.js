/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        dark: "#2C2C2C",
        primary: "#EBEBEB",
        secondary: "#D9D9D9",
        teal: "#1CA4A4",
        'light-gray': '#6D6D6D',
        "light-green": "#7FEF7D",
        "medium-green": "#73DB71",
        "dark-green": "#216416",
        "light-red": "#EF7D7D",
        "dark-red": "#611515",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
