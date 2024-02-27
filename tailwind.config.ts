import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      primary: "#F0B914",
      "accent-1": "#EA4B48",
      "accent-2": "#FF8A00",
      "neutral-900": "#1A1A1A",
      "neutral-800": "#333333",
      "neutral-700": "#4D4D4D",
      "neutral-600": "#666666",
      "neutral-500": "#808080",
      "neutral-400": "#999999",
      "neutral-300": "#B3B3B3",
      "neutral-200": "#CCCCCC",
      "neutral-100": "#E6E6E6",
      "neutral-50": "#F2F2F2",
      white: "#FFFFFF",
    },
    fontWeight: {
      bold: "600",
      medium: "500",
      regular: "400",
    },
    fontFamily: {},
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
