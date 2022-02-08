module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      colors: {
        "primary-bg": "#DAE0E6",
        "no-hover-color": "#CCCCCC",
        "hover-color": "#898989",
        "color-small-text": "#848687",
        "header-primary-color": "#1d2535",
      },
      fontFamily: {
        "primary-font": ["Arial"],
      },
    },
  },

  plugins: [],
};
