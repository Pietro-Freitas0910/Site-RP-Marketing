import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        night: "#050816",
        ink: "#091225",
        neon: "#00BFFF",
        pearl: "#F5F5F5",
        premium: "#9CA3AF"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "Space Grotesk", "Inter", "sans-serif"]
      },
      boxShadow: {
        neon: "0 0 48px rgba(0, 191, 255, 0.28)",
        glass: "0 24px 80px rgba(0, 0, 0, 0.42)"
      },
      backgroundImage: {
        "radial-glow": "radial-gradient(circle at center, rgba(0,191,255,0.2), transparent 55%)"
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -14px, 0)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.38", transform: "scale(1)" },
          "50%": { opacity: "0.75", transform: "scale(1.08)" }
        }
      },
      animation: {
        shimmer: "shimmer 2.4s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        float: "float 7s ease-in-out infinite",
        pulseGlow: "pulseGlow 5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
