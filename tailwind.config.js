module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'bookmark-purple': '#5267DF',
        'bookmark-red': '#FA5959',
        'bookmark-blue': '#242A45',
        'bookmark-grey': '#9194A2',
        'bookmark-white': '#f7f7f7'
      }
    },
    fontFamily: {
      DMsans: ['DMsans,san-serif']
    },
    container: {
      center: true,
      screens: {
        lg: '1124px',
        xl: '1124px',
        '2xl': '1124px'
      }
    }
  },
  plugins: []
}
