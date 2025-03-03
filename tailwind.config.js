/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rollIn: {
          '0%': {
            transform: 'translateX(100%) rotate(-250deg)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0) rotate(-360deg)',
            opacity: '1',
          },
        },
      },
      animation: {
        rollIn: 'rollIn 2s ease 1',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), animations],
};
