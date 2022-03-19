const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './public/*.html',
    './src/components/*.{js,jsx}',
    './src/*.{js,jsx,ts,tsx}',
  ],
  // purge: [
  //   './src/**/*.{js,jsx,ts,tsx}',
  //   './src/*.{js,jsx,ts,tsx}',
  //   './public/index.html',
  //   './src/components/*.{js,jsx}',
  // ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        tertiary: 'var(--color-bg-tertiary)',
      },
      textColor: {
        accent: 'var(--color-text-accent)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        tertiary: 'var(--color-bg-tertiary)',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      container: {
        padding: {
          default: '0.5rem',
          sm: '1rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.gray,
      blue: colors.sky,
      red: colors.rose,
      pink: colors.fuchsia,
      indigo: colors.indigo,
      white: colors.white,
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
      dropShadow: ['hover', 'focus'],
    },
  },
  plugins: [],
}
