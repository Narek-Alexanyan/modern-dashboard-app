/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    screens: {
      "2xl": { max: "1536px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "567px" },
      xs: { max: "420px" },
    },
    extend: {
      colors: {
        "primary": "#475BE8",
        "danger": "#ff3333",
        "success": "#38B259",
        "book-success": "#EC4E2C",
        "primary-hover": "#1F36E3",
        "light": "#EFEFEF",
        "secondary-text": "#808191",
        "secondary-text-dark": "#6F767E",
        "app-bg-light": "#F4F4F4",
        "app-bg-dark": "#1A1D1F",
        "default-black": "#11142D",
        "default-white": "#FCFCFC",
        "default-border-color": "#E4E4E4",
        "default-border-color-dark": "#272B30",
        "bg-color-dark": "#111315"
      },
      transitionProperty: {
        'width': 'width'
      },
    },
  },
  plugins: [],
}
