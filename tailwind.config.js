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
      },
    },
  },
  plugins: [],
}

