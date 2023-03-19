/** @type {import('tailwindcss').Config} */
module.exports = {
  //just in time mode makes build time much faster
  mode: 'jit',
  content: ['./src/**/*.{js,jsx}', './main.html'],
  theme: {
    extend: {},
  },
  plugins: [],
};
