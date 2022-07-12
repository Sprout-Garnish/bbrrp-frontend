module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    colors: {
      // Lemon table - #ffe12e
      lemon: "#ffe12e",

      // Restaurant reserve website - #d3d2c1
      whitesmoke: "#d3d2c1",

      // Product/ introduce/ image- #60603c
      khaki: "#60603c",

      // Table/ review/ location- #ffb42e
      orange: "#ffb42e",

      white: "#ffffff"
    },
    extend: {},
  },
  plugins: [require('daisyui')],
}
