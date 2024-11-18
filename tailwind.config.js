/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "mobile-h": { raw: "(max-height: 568px)" },
      },
    },
    colors: {
      primary: "#6E18DB",
    },
    screens: {
      'tablet': '768px',
      'laptop': '1280px',
      'desktop': '1600px'
    }
  },
  variants: {
    extend: {
      maxHeight: ["responsive", "mobile-h"],
    },
  },
  plugins: [],
};
