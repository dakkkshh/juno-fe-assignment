/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        BGLight: "#F5F5F5",
        BGBorder: "#E4E4E4",
        primary: '#4643EE',
        primaryLightBG: '#4643ee1a',
        secondary: '#777676',
        error: '#D13B3B',
        errorBG: '#F6D8D8',
        riskMedium: "#88670f",
        riskHigh: "#7d2424",
        riskLow: "#006540"
      }
    },
  },
  plugins: [],
}