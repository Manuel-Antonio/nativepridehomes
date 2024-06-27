/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color_primary)',
        secondary: 'var(--color_secondary)',
        accent: 'var(--color_accent)',
      },
    },
  },
  plugins: [],
}

