const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './public/index.html',
    './dist/*.{html,js}',
    './index.html',
     "./node_modules/flowbite/**/*.js",
    './src/components/**/*.{js,jsx,html}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    container: {
      padding: {
        default: '1rem',
        sm: '0.2rem',
        md: '2rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '5rem',
      },
      center: true,
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    fontSize: {
      sub: [
        '0.675rem',
        {
          letterSpacing: '-0.01em',
          lineHeight: '0.775rem',
        },
      ],
      sm: [
        '0.875rem',
        {
          letterSpacing: '0.05em',
          lineHeight: '0.975rem',
        },
      ],
      base: [
        '1rem',
        {
          letterSpacing: '0.01em',
          lineHeight: '1.3rem',
        },
      ],
      title: [
        '1.175rem',
        {
          letterSpacing: '0.02em',
          lineHeight: '1.475rem',
          paddingBottom: '1rem',
        },
      ],
      lg: [
        '2.225rem',
        {
          letterSpacing: '-0.01em',
          lineHeight: '2.175rem',
          paddingBottom: '1rem',
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
      DEFAULT: '.05em',
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
  plugins: [
    require('@tailwindcss/line-clamp'), 
    require('flowbite/plugin')
  ],
}
