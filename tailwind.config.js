/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1330px',
    },
    extend: {
      colors: {
        primary: "#02a9a4",
        secondary: "#2e244e",
        accent: {
          DEFAULT: '#1cbccf',
          secondary: '#18abbc',
          teritiary: '#90c6cd'
        },
        grey: '#e8f0f1',
      },
      fontFamily: {
        primary: 'Poppins'
      }
    },
  },
  plugins: [],
}