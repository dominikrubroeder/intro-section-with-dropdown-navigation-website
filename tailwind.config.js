/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'app-white': 'hsl(0,0%,98%)',
        'app-medium-gray': 'hsl(0,0%,41%)',
        'app-black': 'hsl(0,0%,8%)',
      },
      keyframes: {
        fadeUp: {
          '0%': {
            transform: 'translateY(16%)',
            opacity: 0,
            visibility: 'hidden',
          },
          '100%': {
            transform: 'translateY(0%)',
            opacity: 1,
            visibility: 'visible',
          },
        },
        fadeDown: {
          '0%': {
            transform: 'translateY(-16%)',
            opacity: 0,
            visibility: 'hidden',
          },
          '100%': {
            transform: 'translateY(0%)',
            opacity: 1,
            visibility: 'visible',
          },
        },
        fadeToLeft: {
          '0%': {
            transform: 'translateX(16%)',
            opacity: 0,
            visibility: 'hidden',
          },
          '100%': {
            transform: 'translateX(0%)',
            opacity: 1,
            visibility: 'visible',
          },
        },
        fadeToRight: {
          '0%': {
            transform: 'translateX(-16%)',
            opacity: 0,
            visibility: 'hidden',
          },
          '100%': {
            transform: 'translateX(0%)',
            opacity: 1,
            visibility: 'visible',
          },
        },
      },
      animation: {
        fadeUp: 'fadeUp .6s ease-out forwards',
        fadeDown: 'fadeDown .6s ease-out forwards',
        fadeToLeft: 'fadeToLeft .6s ease-out forwards',
        fadeToRight: 'fadeToRight .6s ease-out forwards',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.animation-delay-600': {
          'animation-delay': '600ms',
        },
        '.animate-hidden': {
          visibility: 'hidden',
          opacity: '0',
        },
      });
    }),
  ],
};
