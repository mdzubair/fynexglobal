import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: {
          50: "#EAF3FF",
          100: "#CFE8FF",
          500: "#0072FF",
          600: "#0060E0",
          700: "#004BBF",
        },
        deepBlue: "#001A4E",
      },
      keyframes: {
        scrollX: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "scroll-x": "scrollX 24s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;