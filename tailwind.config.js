/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
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
          DEFAULT: "#4F4F4F",
          10: "#90979E",
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
