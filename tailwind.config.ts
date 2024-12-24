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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'mw-gray': '#181818'
      },
      fontFamily: {
        'poppins': 'var(--font-poppins)',
        'playfair': 'var(--font-playfair)'
      },
      screens: {
        mobile: "800px"
      }
    },
  },
  plugins: [],
} satisfies Config;
