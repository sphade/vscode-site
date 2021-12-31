module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        vsb: "var(--vsb)",
        tag: "var(--tag)",
        class: "var(--class)",
        cname: "var(--cname)",
        word: "var(--word)",
      },
      fontFamily: {
        style: ["italianno"],
        main: ['"Patrick"'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
