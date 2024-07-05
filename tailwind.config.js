/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {colors: {
      'custom-background': {
        DEFAULT: '#1c2227', // This is the hex value for the RGB (51, 58, 61)
      },
    },
   },
  },
  plugins: [],
}

