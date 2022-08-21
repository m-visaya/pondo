const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'pondo-blue' : '#2C6E8D',
      'pondo-blue-secondary' : '#738192',
      'pondo-light' : '#EFEFEF',
      'pondo-light-de' : '#DEDEDE',
      'pondo-hover' : '#B8B8B8',
      'pondo-muted' : '#A7A7A7',
      'pondo-yellow': '#ecc26d'
    },
    screens: {
      'xs': '280px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}