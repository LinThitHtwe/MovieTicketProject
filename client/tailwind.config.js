/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "1px 1px 3px 0 rgba(0, 0, 0, 0.2)",
      },
      colors: {
        gray: {
          850: "#1c2431",
          930: "#161c26",
        },
      },
    },
  },
  plugins: [],
};
