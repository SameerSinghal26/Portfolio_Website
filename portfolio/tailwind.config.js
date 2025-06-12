/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        pearl_bush: '#E3DED1',
        bison_hide: '#C1B59F',
        stonewall: '#908471',
        soya_bean: '#5F5A4D',
        pale_oyster: '#969286',
        armadillo: '#4F493F',
        pale_brown: '#9D8161',
        old_copper: '#7B5037',
      },
    },
  },
  plugins: [],
}

