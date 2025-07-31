import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      colors: {
        "blue-start": "#00BAFF",
        "blue-stop": "#063EF9",
        "purple-start": "#8B5CF6",
        "purple-middle": "#BB48BF",
        "purple-stop": "#F67E4D",
        "off-black": "#14142B",
        "off-white": "#FCFCFC",
        grey: {
          0: "#FFFFFF",
          100: "#FCFCFC",
          200: "#F7F7FC",
          300: "#EFF0F7",
          400: "#D9DBE9",
          500: "#A0A3BD",
          600: "#6E7191",
          700: "#4E4B66",
          800: "#262338",
          900: "#14142B",
        },
        primary: {
          50: "#32a4ff",
          100: "#289aff",
          200: "#1e90ff",
          300: "#1486ff",
          400: "#0a7cff",
          500: "#0072ff",
          600: "#0068f5",
          700: "#005eeb",
          800: "#0054e1",
          900: "#004ad7",
        },
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "10%, 30%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        wave: "wave 1.5s ease-in-out infinite",
      },
      transformOrigin: {
        "70": "70% 70%",
      },
    },
  },
  plugins: [],
};

export default config;
