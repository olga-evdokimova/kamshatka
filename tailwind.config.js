/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './posts/**/*.html',
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 4px 20px 0 rgba(110, 149, 224, 0.3)',
      }
    },
    screens: {
      'mobile': { 'max': '421px' },
      'tablet': { 'max': '769px' },
      'laptop': { 'max': '1025px' },
      'desktop': { 'max': '1281px' },
    },
  },
  plugins: [],
}
