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
    animation: {
      "skeleton-pulse": "skeleton-pulse 1.5s infinite",
    },
    extend: {
      backgroundColor: {
        skeleton:
          "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
      },
    },
  },
  plugins: [],
};
