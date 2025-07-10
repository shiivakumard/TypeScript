// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: '16px', // Set a global base font size
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        // Add more custom sizes as needed
      },
      // You can also extend other properties like colors, spacing, etc.
    },
  },
  plugins: [],
}
