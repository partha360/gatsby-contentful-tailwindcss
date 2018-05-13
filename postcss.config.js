const tailwindcss = require('tailwindcss');
const cssnext = require('postcss-cssnext');

module.exports = {
  plugins: [tailwindcss('./tailwind.js'), cssnext()],
};
