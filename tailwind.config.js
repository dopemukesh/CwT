/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable dark mode using a class
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // This should include all your React components
    './public/index.html',          // Include HTML files as well
    'index.html',          // Include HTML files as well
    './src/**/*.json',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}