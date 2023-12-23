/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Open Sans'],
        secondary: ['Inter'],
        tertiary: ['Great Vibes'],
      },
      colors: {
        primary: '#B20A0B',
        secondary: '#F2F2F2',
      },
    },
  },
  plugins: [],
};
