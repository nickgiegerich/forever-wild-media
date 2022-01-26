module.exports = {
  purge: [], //remove this line
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx", "./public/**/*.html"], //add this line
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        nick: "url('https://www.foreverwild.media/wp-content/uploads/2020/11/IMG_1956-e1606363284958.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
