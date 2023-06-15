/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#1b6a4d',
        secondary: '#00bd49',
        otherbalck: '#2B2730',
        othergreem: '#5C8984'
      }
    },
  },
  plugins: [],
}

