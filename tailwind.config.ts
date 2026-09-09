import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#004587',
        secondary: '#F9C681',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
