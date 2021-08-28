module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    safeList: [],
    content: ['./index.html', './src/**/*.tsx', './src/**/*.ts'],
  },
  theme: {
    minWidth: {
      40: '10rem',
      60: '15rem',
      80: '20rem',
      100: '25rem',
    },
    maxWidth: {
      120: '30rem',
      160: '40rem',
      200: '50rem',
    },
    fontFamily: {
      body: ['Montserrat', 'sans-serif'],
      serif: ['Nunito', 'sans-serif'],
      logo: ['Pacifico', 'cursive'],
      quotes: ['Just Me Again Down Here', 'cursive'],
    },
  },
  variants: {
    extend: {
      maxWidth: {
        1024: '1024px',
      },
    },
  },
  plugins: [],
}
