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
        canvas: {
          DEFAULT: "#FAFAF8",
          subtle: "#F4F4F5",
          white: "#FFFFFF",
        },
        ink: {
          DEFAULT: "#09090B",
          primary: "#111113",
          secondary: "#3F3F46",
          muted: "#71717A",
          subtle: "#A1A1AA",
        },
        border: {
          DEFAULT: "#E4E4E7",
          hairline: "#E4E4E7",
          subtle: "#F4F4F5",
          active: "#09090B",
        },
        accent: {
          DEFAULT: "#2563EB",
          hover: "#1D4ED8",
          subtle: "#EFF6FF",
          border: "#BFDBFE",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      maxWidth: {
        content: "1240px",
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(0, 0, 0, 0.04)",
        card: "0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px -2px rgba(0, 0, 0, 0.03)",
        "card-hover": "0 8px 24px -4px rgba(0, 0, 0, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
