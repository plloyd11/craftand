module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/pages/**/*.vue',
      './src/components/**/*.vue',
      './src/templates/*.vue'
    ]
  },
  theme: {
    extend: {
      colors: {
        'primary-color': '#fadd0d',
        'main-gray': '#231f20',
        'main-gray-faded': '#2B2728',
        'main-gray-semi-transparent': 'hsla(345, 6%, 13%,.8)',
        'light-gray': '#ebebeb',
        'header-color': '#2b2b2b',
        'client-blue': '#4e7fff',
        gray: {
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121'
        }
      }
    }
  },
  variants: {},
  plugins: [require('tailwindcss-plugin-fancy')]
}
