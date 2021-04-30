module.exports = {
  purge: ['./pages/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'oswald_learn': ['Oswald', 'sans-serif']
      },
      colors:{
        red:{
          default: '#f00'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
