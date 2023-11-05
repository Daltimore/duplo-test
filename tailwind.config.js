/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#F8F9FB',
          75: '#FCFCFD',
          95: '#F4F4F4',
          100: '#E6E7EC',
          200: '#CDD0D8',
          300: '#B3B8C5',
          400: '#9AA1B1',
          500: '#81899E',
          600: '#676E7E',
          700: '#4D525F',
          800: '#34373F',
          900: '#1A1B20',
        },
      }
    },
  },
  plugins: [],
}

