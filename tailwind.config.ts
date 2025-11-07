import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      jost: ['var(--font-jost)', 'sans-serif'],
      luxurious: 'Luxurious Roman, serif',
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        orange: 'var(--orange)',
        blue: 'var(--blue)',
        green: 'var(--green)',
      },
    },
  },
  plugins: [],
} satisfies Config;
