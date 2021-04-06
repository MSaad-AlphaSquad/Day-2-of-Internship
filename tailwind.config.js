module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  // darkMode: false, // or 'media' or 'class'
  darkMode : 'media',
  theme: {
    extend: {},
  },
  variants: {
    extend: { backgroundColor: ["active"],
    translate: ['motion-safe'],
    opacity: ['disabled'],
   }
  },
  plugins: [],
};
