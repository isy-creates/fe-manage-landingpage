module.exports = {
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  purge: [
    './public/**/*.html',
    './src/**/*.vue',
    ],
  theme: {
    extend: {
      colors: {
        blue: 'hsla(228, 39%, 23%, 1)',
        blueopacity: 'hsla(228, 39%, 23%, .8)'
      },
      zIndex: {
        'minusone': '-1'
      },
      backgroundImage: {
        'backdrop': 'linear-gradient(to bottom, transparent 5%, hsla(228, 0%, 0%, .8) 100%)'
      },
      spacing: {
        '5': '5px',
        '9': '9px',
        '19': '19px',
        '25': '25px',
        '29': '29px'
      },
      inset: {
        '39': '39px'
      },
      borderRadius: {
        'default': '5px'
      },
      maxWidth: {
        '1440': '1440px'
      },
      screens: {
        'desktop': '1448px'
      },
      fontFamily: {
        'sans': ['Be Vietnam Pro', 'sans-serif']
      },
      fontSize: {
        'base': ['16px', '28px']
      },
      lineHeight: {
        '28': '28px'
      }
    },
    'th-blue': 'var(--blue)'
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
