// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkTheme: '#11001F',
      },
      fontFamily: {
        Ovo: ['Ovo', 'serif'],
      },
      boxShadow: {
        white: '4px 4px 0px #fff',
      },
    },
  },
  plugins: [],
}
