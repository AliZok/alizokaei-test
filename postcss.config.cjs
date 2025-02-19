// tailwind.config.js
module.exports = {
  // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  purge: [  './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',],
  
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}