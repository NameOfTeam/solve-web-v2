import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        bgBorder: "var(--bg-border)",
        container: "var(--container)",
        containerBorder: "var(--container-border)",
        mainContainer: "var(--main-container)",
      },
      height: {
        execptHeader
      }
    },
  },
  plugins: [],
} satisfies Config;
