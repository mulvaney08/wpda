import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Syne", "sans-serif"],
        serif: ["Cormorant Garamond", "serif"]
      },
      colors: {
        base: "#0A0A0B",
        panel: "#131317",
        ivory: "#F4EFE6",
        crimson: "#C1314B",
        gold: "#B98A2D",
        electric: "#2B83F6"
      },
      boxShadow: {
        glow: "0 0 80px rgba(193, 49, 75, 0.28)"
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at 20% 20%, rgba(185,138,45,0.2), transparent 38%), radial-gradient(circle at 80% 0%, rgba(43,131,246,0.2), transparent 45%), radial-gradient(circle at 80% 80%, rgba(193,49,75,0.2), transparent 38%)"
      }
    }
  },
  plugins: []
};

export default config;
