import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "human0": "url('/images/nashi-proekty/Human0.png')",
          "human1": "url('/images/nashi-proekty/Human1.png')",
          "human2": "url('/images/nashi-proekty/Human2.png')",
          "human4": "url('/images/nashi-proekty/Human4.png')",
          "human21": "url('/images/nashi-proekty/Human21.png')",
          "human22": "url('/images/nashi-proekty/Human22.png')",
      },
      colors: {
        white: "#fff",
        black: "#000",
        turquoise: { dark: "#002A33", light: "#007084" },
        red: "#E50000",
        blue: {
          light: "#D4F3F4",
          medium: "#7FC9CA",
          dark1: "#00ADB1",
          dark2: "#009FA6",
        },
        gray: "#505050",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  }, 
  plugins: [],
};
export default config;
