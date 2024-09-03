import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'game-button-white': '#ffffff',
        'game-button-white-active': '#f0f0f0',
        'game-button-red': '#cc1111',
        'game-button-red-active': '#c01111',
        'game-button-green': '#11bb11',
        'game-button-green-active': '#11b011',
        'game-button-blue': '#1111cc',
        'game-button-blue-active': '#1111c0',
        'game-button-black': '#000000',
        'game-button-black-active': '#101010',
      },
    },
  },
  plugins: [],
};
export default config;
