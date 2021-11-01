const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    content: ['./src/**/*.njk', './src/**/*.svg'],
    layers: ['components', 'utilities'],
    options: {
      safelist: ['header-shadow', '-translate-y-full', 'hidden']
    }
  },
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    borderColor: (theme)=>({
        ...theme('colors')
    }),
    backgroundColor: (theme)=>({
        ...theme('colors')
    }),
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c'
      },
      teal: colors.teal,
      blue: colors.blue
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'h1': {
              fontWeight: '700',
              color: theme('colors.white')
            },
            'h2': {
              fontWeight: '700',
              color: theme('colors.white')
            },
            'h3': {
              fontWeight: '700',
              color: theme('colors.white')
            },
            'a':{
              color: 'gray'
            },
            'strong':{
              color: theme('colors.white')
            },
            'blockquote': {
              padding:'10px',
              backgroundColor:'#0d1233',
              fontWeight: 'normal',
              color: "snow"
            },  
            'blockquote p:first-of-type::before': {
              content: ''
            },
            'blockquote p:last-of-type::after': {
              content: ''
            }
          }
        }
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};
