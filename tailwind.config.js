/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      ...require("tailwindcss/defaultConfig").theme.screens,
      "2lg": "1280px",
      xxl: "122rem",
    },

    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        prompt: ["Prompt", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        rubik: "var(--font-rubik)",
      },
      colors: {
        // primary: {
        //   DEFAULT: "#0AB34E",
        //   10: "#DBFFD8",
        //   10.1: "#cef0dc",
        //   20: "#9de1b8",
        //   30: "#6cd195",
        //   40: "#3bc271",
        //   50: "#0ab34e",
        //   60: "#088f3e",
        //   70: "#066b2f",
        //   80: "#04481f",
        //   90: "#022410",
        // },

        primary: {
          DEFAULT: "#033a6d",
          10: "#cdd8e2",
          20: "#9ab0c5",
          30: "#6889a7",
          40: "#35618a",
          50: "#033a6d",
          60: "#022e57",
          70: "#022341",
          80: "#01172c",
          90: "#010c16",
        },

        // primary: {
        //   DEFAULT: "#1a41b6",
        //   10: "#d1d9f0",
        //   20: "#a3b3e2",
        //   30: "#768dd3",
        //   40: "#4867c5",
        //   50: "#1a41b6",
        //   60: "#153492",
        //   70: "#10276d",
        //   80: "#0a1a49",
        //   90: "#050d24",
        // },

        // DEFAULT: "#0AB34E",
        // 10: "#DBFFD8",
        secondary: {
          DEFAULT: "#4f4f4f",
          10: "#90979E",
          10.1: "#dcdcdc",
          20: "#b9b9b9",
          30: "#959595",
          40: "#727272",
          50: "#3f3f3f",
          60: "#2f2f2f",
          70: "#202020",
          80: "#101010",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
