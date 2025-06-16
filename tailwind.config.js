/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Add more paths if needed
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3B82F6",  // Blue-500
          50: "#EFF6FF",       // Blue-50
          100: "#DBEAFE",      // Blue-100
          500: "#3B82F6",     // Blue-500
          600: "#2563EB",      // Blue-600
          700: "#1D4ED8",     // Blue-700
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
}