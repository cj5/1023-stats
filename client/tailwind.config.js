module.exports = {
  content: [
    "./src/**/*.{vue, js}",
  ],
  theme: {
    screens: {
      'xs': '400px',
      'sm': '480px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
    },
    extend: {
      fontFamily: {
        'heading': '"Noto Serif", "Times", serif',
        'body': '"Inter", Helvetica, Arial, serif',
      }
    },
  },
  plugins: [],
}
