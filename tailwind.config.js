module.exports = {
  purge: [],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: 'Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", "sans-serif"'
      },
      colors: {
        green: {
          1: '#11B980'
        },
        black: {
          1: '#000',
          2: '#1E1E1E',
          3: 'rgba(0, 0, 0, 0.48)'
        },
        white: {
          1: '#fff',
          2: '#F1F1F1'

        },
        gray: {
          1: '#E2E2E2',
          2: '#C4C4C4',
          4: '#505050',
          5: '#4E4E4E',
          6: 'rgba(152, 152, 152, 1)',
          7: '#989898',
          8: '#6A6A6A',
          9: '#CFCFCF'
        },
        blue: {
          1: '#549DF2',
          2: '#318FE7'
        }
      }
    },
    container: {
      screens: {
        DEFAULT: '100%',
        xl: '1024px'
      },
      center: true,
      padding: {
        DEFAULT: '1rem',
        xl: '0'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
