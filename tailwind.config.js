/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          100: '#F0FFF1',
          200: '#BBDEC7',
          300: '#072914',
          400: '#ADE59F',
          500: '#9AED82',
          600: '#52C46F',
          700: '#4FA96E',
          800: '#22754E',
          900: '#3D6F4E',
          950: '#072914',
        },
      },
      fontFamily: {
        comfortaa: ['Comfortaa'],
      },
    },
    boxShadow: {
      DEFAULT: '0 8px 0px #3D6F4E',
    },
  },
  plugins: [],
};
