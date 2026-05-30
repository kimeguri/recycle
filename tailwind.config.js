/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Noto Sans JP', 'system-ui', 'sans-serif'],
      },
      colors: {
        market: {
          ink: '#17211b',
          leaf: '#2f6f4e',
          mint: '#dff3e8',
          paper: '#fbfaf4',
          coral: '#ec7f61',
        },
      },
    },
  },
  plugins: [],
};
