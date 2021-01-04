module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'wave-sm': "url('~@/assets/images/wave-sm.svg')",
        'wave': "url('~@/assets/images/wave.svg')"
       }),
      zIndex: {
          '-10': '-10',
      },
      colors: {
        RaisinBlack: {
          500 : '#a4aab6',
          700 : '#646B7D',
          900 : '#2A2D34',
        },
        SpringGreen: {
          500 : '#b6f7cd',
          700 : '#7ef1a8',
          900 : '#32E875',
          1100: '#18dc60',
          1300: '#06ce30'
        },
        OuterSpace: {
          500 : '#5c9aad',
          700 : '#3e6c7a',
          900 : '#1F363D'
        },
        DodgerBlue: {
          500: '#add5ff',
          700: '#70b5ff',
          900: '#3396FF'
        },
        Cultured: {
          900: '#F7F9F9',
          1000: '#e8eded'
        }
      }
    }
  },
  variants: {},
  plugins: [],
}
