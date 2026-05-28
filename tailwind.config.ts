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
        base: "#18130F",
        panel: "#261D16",
        ivory: "#FFF8EA",
        crimson: "#D96A75",
        gold: "#F0B94A",
        electric: "#6FB9C9"
      },
      boxShadow: {
        glow: "0 0 90px rgba(240, 185, 74, 0.28)"
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at 20% 20%, rgba(240,185,74,0.22), transparent 38%), radial-gradient(circle at 80% 0%, rgba(111,185,201,0.16), transparent 45%), radial-gradient(circle at 80% 80%, rgba(217,106,117,0.16), transparent 38%)"
      }
    }
  },
  plugins: []
};

export default config;
