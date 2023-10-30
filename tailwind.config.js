import { nextui } from '@nextui-org/react';
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkOrange: 'hsl(15, 65%, 54%)',
        mediumOrange: 'hsl(19, 78%, 54%)',
        lightOrange: 'hsl(25, 71%, 51%)',
        accentOrange: 'hsl(28, 92%, 58%)',
        accentBlack: 'hsl(197, 61%, 10%)',
        lightRed: 'hsl(20, 75%, 66%)',
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: (theme) => ({
        'logo-dark-mode': "url('/images/logo-dark-mode.svg')",
        'logo-light-mode': "url('/images/logo-light-mode.svg')",
        'curvy-dark-mode': "url('/images/bg-curvy-dark-mode.svg')",
        'curvy-light-mode': "url('/images/bg-curvy-light-mode.svg')",
      }),
    },
    variants: {
      extend: {
        backgroundImage: ['dark'],
      },
    },
  },
  plugins: [],
};

export default config;
