/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
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
        primary: {
          DEFAULT: "#0AB34E",
          10: "#DBFFD8",
        },
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

//  DEFAULT: "#0A66C2",
//           10: "#d0e0f0",
