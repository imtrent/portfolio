module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    options: {
      safelist: ['bg-red-200', 'bg-yellow-200', 'bg-purple-200', 'bg-blue-200'],
    },
  },
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
