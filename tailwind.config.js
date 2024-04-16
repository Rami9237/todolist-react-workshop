/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        data: 'rgb(var(--color-data) / <alpha-value>)',
        navbar: 'rgb(var(--color-navbar) / <alpha-value>)',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        task: 'rgb(var(--color-task) / <alpha-value>)',
      }
    },
  },
  plugins: [],
  darkMode: 'selector',
}

