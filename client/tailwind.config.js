const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins"],
    },
    extend: {
      colors: {
        "scarlet-gum": {
          50: "#fbf7fd",
          100: "#f5ecfb",
          200: "#ecdcf8",
          300: "#ddc1f1",
          400: "#c899e7",
          500: "#b272da",
          600: "#9e53ca",
          700: "#8840b0",
          800: "#723990",
          900: "#5d2f74",
          950: "#4c1c64",
        },
        mercury: {
          50: "#f7f7f7",
          100: "#ededed",
          200: "#e4e4e4",
          300: "#c8c8c8",
          400: "#adadad",
          500: "#999999",
          600: "#888888",
          700: "#7b7b7b",
          800: "#676767",
          900: "#545454",
          950: "#363636",
        },
        shocking: {
          50: "#fbf4f9",
          100: "#f8ebf3",
          200: "#f3d7ea",
          300: "#eab7d8",
          400: "#e198c5",
          500: "#cf65a3",
          600: "#bb4786",
          700: "#a0366c",
          800: "#852f5a",
          900: "#702b4d",
          950: "#43142b",
        },
      },
    },
  },
  plugins: [],
});
