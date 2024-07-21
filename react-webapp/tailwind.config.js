/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '2rem',
          md: '1rem',
          lg:'1rem'
        },
      },
    },
  },
  plugins: [],
}

