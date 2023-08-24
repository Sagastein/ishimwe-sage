/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainblue: "#1777E5",
        darkgrey: "#B8B8B8",
        lightgrey: "#F5F6F7",
      },
      fontFamily: {
        Inter: ["Inter", "sans - serif"],
        Cardo: ["Cardo", "serif"],
        Barlow: ["Barlow", "sans - serif"],
        Fira: ["Fira Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
