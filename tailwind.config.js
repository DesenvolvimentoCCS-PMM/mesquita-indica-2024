/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      colors: {
        gow: "#F5EBDC",
        brown: "#7D2D0A",
        gold: "#F3BF3A",
        darkBrown: "#411603",
        ph: "rgba(125, 45, 10, 0.50)",
      },
      fontFamily: {
        sans: ["Jost", "sans-serif"],
        serif: ["Marcellus SC", "serif"],
      },
      boxShadow: {
        cardOscar:
          "box-shadow: 1.092px 7.645px 16.383px 0px rgba(66, 30, 5, 0.54), 4.369px 29.489px 30.581px 0px rgba(66, 30, 5, 0.47), 10.922px 67.715px 40.411px 0px rgba(66, 30, 5, 0.28), 19.659px 120.14px 48.056px 0px rgba(66, 30, 5, 0.08), 30.581px 186.763px 53.517px 0px rgba(66, 30, 5, 0.01)",
      },
    },
    keyframes: {
      borderAnimation: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
      heightAnimation: {
        "0%": { height: "500px" },
        "100%": { height: "290px" },
      },
      heightReverseAnimation: {
        "0%": { height: "290px" },
        "100%": { height: "650px" },
      },
      opacityAnimation: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
    },
  },
  plugins: [],
};
