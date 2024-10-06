/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#1a1a1a',
        customWhite: '#e0e0e0',
      },
    },
  },
  plugins: [],
}