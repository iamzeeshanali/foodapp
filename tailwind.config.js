const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "430px",
      threexl: "1600px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
