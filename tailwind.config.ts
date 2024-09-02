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
        'game-button-white-active': '#c8c8c8',
        'game-button-red': '#ff0000',
        'game-button-red-active': '#c80000',
        'game-button-green': '#00ff00',
        'game-button-green-active': '#00c800',
        'game-button-blue': '#0000ff',
        'game-button-blue-active': '#0000c8',
        'game-button-black': '#000000',
        'game-button-black-active': '#323232',
      },
    },
  },
  plugins: [],
};
export default config;
