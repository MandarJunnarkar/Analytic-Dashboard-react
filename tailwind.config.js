module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'fill': ' repeat(auto-fill, minmax(320px, 1fr))',
      },
      height:{
        '85': '22rem'
      }
    },
  },
  plugins: [],
}
