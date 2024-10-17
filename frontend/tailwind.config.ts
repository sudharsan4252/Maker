import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        textScroller: "scrolling 20s infinite linear",
      },
      keyframes: {
        scrolling: {
          "0%": {
            transform: "translate(50%,0%)",
            opacity: "0%",
          },
          "10%": {
            opacity: "100%",
          },
          "90%": {
            opacity: "100%",
          },
          "100%": {
            transform: "translate(-100%,0%)",
            opacity: "0%",
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
