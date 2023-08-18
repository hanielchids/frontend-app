import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bvnk_blue: {
          light: "#3F53DD",
          dark: "#0f1957",
        },
        bvnk_gray: {
          100: "#EBEDF3",
          200: "#E3E8EE", // border
        },
        bvnk_text: {
          dark: "#0A1628",
          gray: "#556877",
          blue: "#3F53DD", //use bvnk_blue
        },
        bvnk_orange: {
          light: "#FF785F",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
