const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './public/*.html',
    './src/components/*.{js,jsx}',
    './src/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    container: {
      padding: {
        default: '2rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      center: true,
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    fontSize: {
      sub: [
        '0.775rem',
        {
          letterSpacing: '-0.01em',
          lineHeight: '0.775rem',
        },
      ],
      sm: [
        '0.875rem',
        {
          letterSpacing: '-0.01em',
          lineHeight: '0.975rem',
        },
      ],
      base: [
        '1rem',
        {
          letterSpacing: '-0.02em',
          lineHeight: '1.5rem',
        },
      ],
      title: [
        '1.375rem',
        {
          letterSpacing: '-0.02em',
          lineHeight: '1.5rem',
        },
      ],
      lg: [
        '2.225rem',
        {
          letterSpacing: '-0.01em',
          lineHeight: '2.175rem',
        },
      ],
      xl: [
        '3rem',
        {
          letterSpacing: '-0.01em',
          lineHeight: '2.875rem',
        },
      ],
    },
    fontWeight: {
      bold: 500,
    },
    letterSpacing: {
      DEFAULT: '-5%',
      tightest: '-.075em',
      tighter: '-.05em',
      normal: '0',
      wider: '.05em',
      widest: '.25em',
    },
    borderWidth: {
      DEFAULT: '0.5px',
      0: '0.2px',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
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
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        gray: colors.gray,
        purple: colors.purple,
        blue: colors.sky,
        red: colors.rose,
        pink: colors.fuchsia,
        indigo: colors.indigo,
        white: colors.white,
      },
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
