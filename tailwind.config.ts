import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0f3c5f",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Luxury color palette
        luxury: {
          50: "#f0f5fa",
          100: "#d9e5f1",
          200: "#b3cbe3",
          300: "#8db1d5",
          400: "#6697c7",
          500: "#407db9",
          600: "#0f3c5f", // Primary blue
          700: "#0c3251",
          800: "#092843",
          900: "#061e35",
        },
        gold: {
          50: "#faf8f0",
          100: "#f5efd8",
          200: "#ebdfb1",
          300: "#e1cf8a",
          400: "#d7bf63",
          500: "#cdaf3c", // Primary gold
          600: "#a48c30",
          700: "#7b6924",
          800: "#524618",
          900: "#29230c",
        },
        charcoal: {
          50: "#f5f5f6",
          100: "#e6e7e9",
          200: "#cdcfd3",
          300: "#b4b7bd",
          400: "#9b9fa7",
          500: "#828791",
          600: "#656a74",
          700: "#4c5058", // Primary charcoal
          800: "#323539",
          900: "#191a1d",
        },
        cream: {
          50: "#fefefe",
          100: "#fcfcfc",
          200: "#faf9f7", // Primary cream
          300: "#f5f2ed",
          400: "#ebe5db",
          500: "#e0d8c9",
          600: "#b3ada1",
          700: "#868279",
          800: "#595650",
          900: "#2c2b28",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.8s ease-out forwards",
        "slide-up": "slide-up 0.8s ease-out forwards",
      },
      fontFamily: {
        sans: ["var(--font-playfair)", "serif"],
        serif: ["var(--font-playfair)", "serif"],
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-raleway)", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 10px 30px -10px rgba(15, 60, 95, 0.1), 0 4px 6px -4px rgba(15, 60, 95, 0.05)",
        "luxury-hover": "0 20px 40px -15px rgba(15, 60, 95, 0.15), 0 10px 20px -5px rgba(15, 60, 95, 0.1)",
        gold: "0 4px 20px -2px rgba(205, 175, 60, 0.2)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
