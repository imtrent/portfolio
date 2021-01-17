module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#47535E",
        border: "#cdcfd3",
        mdgray: "#656d78",
        ltgray: "#ABB2BC",
        offgray: "#a0a0a2",
      },
      top: {
        "1/2": "50%",
      },
    },
    fontFamily: {
      body: ["Inter", "-apple-system", "sans-serif"],
      heading: ["DM Serif Display", "serif"],
    },
  },
  variants: {},
  plugins: [],
}
