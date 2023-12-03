/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#baf8cf',
          300: '#85f0ab',
          400: '#48e07e',
          500: '#20c75b',
          600: '#14a548',
          700: '#14813c',
          800: '#156633',
          900: '#114a27',
          950: '#052e16',
        },
      },
    },
    boxShadow: {
      DEFAULT: '0 8px 0px #156633',
    },
  },
  plugins: [],
};
