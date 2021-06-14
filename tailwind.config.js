module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    color: {
      backgroundPrimary: "#1e2535",
      backgroundSecondary: "#243c58",
      backgroundAccent: "#486177",
      textSecondary: "#909a9c",
      textPrimary: "#e0e0d4",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
