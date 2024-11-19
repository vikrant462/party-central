/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F14069FF',
          dark: '#E83718FF',
        },
        secondary: {
          DEFAULT: '#6C63FF',
          dark: '#4B47B7',
        },
        accent: {
          yellow: '#FFD93D',
          purple: '#6C63FF',
          pink: '#FF6B6B',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
      },
    },
  },
  plugins: [],
};