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
        "bg": "var(--bg)",
        "bg-border": "var(--bg-border)",
        "container": "var(--container)",
        "container-border": "var(--container-border)",
        "main-container": "var(--main-container)",
        "primary-0": "#f7f7fd",
        "primary-100": "#e5e3f8",
        "primary-200": "#d1cef2",
        "primary-300": "#bdbaed",
        "primary-400": "#aaa6e8",
        "primary-500": "#9792e3",
        "primary-600": "#837dde",
        "primary-700": "#6f69d9",
        "primary-800": "#5b54d4",
        "primary-900": "#4740cf",
        "secondary-0": "#76ea96",
        "secondary-100": "#61e786",
        "secondary-200": "#49e374",
        "secondary-300": "#34e064",
        "secondary-400": "#21d954",
        "secondary-500": "#1ec34c",
        "secondary-600": "#1bb246",
        "secondary-700": "#1aa842",
        "secondary-800": "#189e3e",
        "secondary-900": "#16943a",
        "danger-0": "#ffffff",
        "danger-100": "#fdcdd1",
        "danger-200": "#f99ea4",
        "danger-300": "#f2747d",
        "danger-400": "#e9535d",
        "danger-500": "#dd3a45",
        "danger-600": "#cd2833",
        "danger-700": "#b81b26",
        "danger-800": "#a0131c",
        "danger-900": "#870e16",
        "warning-0": "#fffdf5",
        "warning-100": "#fffdcc",
        "warning-200": "#fff399",
        "warning-300": "#ffea66",
        "warning-400": "#ffe23f",
        "warning-500": "#ffd400",
        "warning-600": "#dbb200",
        "warning-700": "#b79200",
        "warning-800": "#937300",
        "warning-900": "#7a5d00",
        "info-0": "#f5fbff",
        "info-100": "#c5e8fd",
        "info-200": "#98d5f9",
        "info-300": "#70c3f2",
        "info-400": "#50b1e9",
        "info-500": "#38a1dd",
        "info-600": "#2790cd",
        "info-700": "#1b7eb8",
        "info-800": "#136ca0",
        "info-900": "#0e5b87",
        "success-0": "#fbfff5",
        "success-100": "#e7fdc5",
        "success-200": "#d2f998",
        "success-300": "#bef270",
        "success-400": "#ace950",
        "success-500": "#98dd38",
        "success-600": "#8acd27",
        "success-700": "#79b81b",
        "success-800": "#67a013",
        "success-900": "#56870e",
      },
      height: {
        exceptHeader: "calc(100% - 72px)"
      }
    },
  }
}