import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#fcfafa',
        brand: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fdc4c6',
          300: '#f98f93',
          400: '#ee5359',
          500: '#de1f26',
          600: '#ba2024',
          700: '#9b171c',
          800: '#7f0000',
          900: '#5e1013',
          950: '#340708',
        },
        navy: {
          50: '#f8f1f1',
          100: '#efdfe0',
          200: '#d9bcbe',
          300: '#b98a8d',
          400: '#8f5a5e',
          500: '#693a3e',
          600: '#4d2a2d',
          700: '#3a1f22',
          800: '#2c171a',
          900: '#20100f',
          950: '#140909',
        },
        ink: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          900: '#20100f',
          950: '#020617',
        },
      },
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient':
          'linear-gradient(135deg, #20100f 0%, #7f0000 50%, #de1f26 100%)',
      },
      boxShadow: {
        'brand-glow-lg': '0 14px 34px -16px rgba(222, 31, 38, 0.3)',
        'soft': '0 8px 28px -12px rgba(32, 16, 15, 0.14)',
      },
    },
  },
  plugins: [],
};

export default config;
