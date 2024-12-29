import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        textShine: 'textShine 3s ease-in-out infinite alternate',
      },
      keyframes: {
        textShine: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        gradient: 'radial-gradient(circle, #7182ff 0%, #3cff52 100%)',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
