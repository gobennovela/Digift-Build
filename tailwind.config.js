module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBg: "#15131F",
        lightBg: "#FDFDFD",
        toogleBgDark: "#29293C",
        headerToggleDark: "#3A3A55",
        digiftGray: "#F1F1F3",
        prevalentText: "#5A627A",
        darkText: "#090521",
        digiftBorder: "#F2F3F3",
        digiftBrandBlue: "#564CF5",
        prevalentTextSecondary: "#AFAFB9",
        lightBgColor: "#F5F6FF",
        backgroundSecondary: "#F6F5FE",
      }
    },
  },
  plugins: [],
}
