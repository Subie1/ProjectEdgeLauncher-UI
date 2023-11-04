/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111",
        secondary: "#222",
        highlight: "#333",

        accent: "#48bb78",
      }
    },
  },
  plugins: [],
}

