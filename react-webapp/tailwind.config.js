const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1400px",
      },
      padding: "1rem",
    },
    extend: {},
  },
  plugins: [flowbite.plugin()],
};
