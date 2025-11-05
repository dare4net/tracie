import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#d41152",
        "background-light": "#f8f6f6",
        "background-dark": "#221016",
        "text-light": "#181113",
        "text-dark": "#f8f6f6",
        "subtle-light": "#f4f0f2",
        "subtle-dark": "#3a252b",
        "subtle-text-light": "#89616f",
        "subtle-text-dark": "#b5a1a7",
        "border-light": "#e6dbdf",
        "border-dark": "#44202c",
        "surface-light": "#ffffff",
        "surface-dark": "#2a141b",
      },
      fontFamily: {
        display: ["var(--font-manrope)", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
