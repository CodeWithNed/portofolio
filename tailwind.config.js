/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#e0f906',
        secondary: '#a6a3b4',
      },
      fontFamily: {
        'sans': ['poppins'],
      },
    },
  },
  plugins: [],
}