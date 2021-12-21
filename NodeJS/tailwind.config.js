module.exports = {
  content: ["./*.html", "./views/*.html"],
  theme: {
    extend: {
      screens: {
        // Added by Paul
        xs: "480px",
        // => @media (min-width: 480px) { ... }
      },
    },
  },
  variants: {},
  plugins: [],
};
