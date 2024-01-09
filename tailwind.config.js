/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      xxl: '1920px',
  },
    extend: {
      fontFamily: {
        // Define your custom fonts here
        exo: ['Exo', 'sans-serif'],
        exo2: ['Exo 2', 'sans-serif'],
        nobile: ['Nobile', 'sans-serif'],
      },
      backgroundImage: {
        'grass-contact': "url('./grass-contact.jpg')",
        'mower-hero': "url('./mower-hero.jpg')",
      },
      colors: {
        primary: {
          DEFAULT: '#006B4F',
          hover: '#1e315d',
          50: '#24FFC6',
          100: '#0FFFC0',
          200: '#00E5A9',
          300: '#00BD8B',
          400: '#00946D',
          500: '#006B4F',
          600: '#003326',
          700: '#000000',
          800: '#000000',
          900: '#000000',
          950: '#000000',
        },
        grey: {
          DEFAULT: '#696969',
          50: '#EEEEEE',
          100: '#E3E3E3',
          200: '#CFCFCF',
          300: '#BBBBBB',
          400: '#A6A6A6',
          500: '#929292',
          600: '#7D7D7D',
          700: '#696969',
          800: '#4D4D4D',
          900: '#313131',
          950: '#232323'
        },
      },
    },
  },
  plugins: [],
}

