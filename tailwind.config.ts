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
        background: "#080808",
        surface: "#111111",
        "border-custom": "#1e1e1e",
        accent: "#7c3aed",
        "accent-light": "#a78bfa",
        "text-primary": "#f5f5f5",
        "text-muted": "#71717a",
      },
    },
  },
  plugins: [],
};
export default config;