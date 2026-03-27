/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1B3A4B',
        'brand-green': '#2D9B6F',
        'brand-green-dark': '#237A57',
        'brand-green-light': '#E8F7F1',
        'navy-light': '#EEF2F5',
        'navy-muted': '#6B8593',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
      },
    },
  },
  plugins: [],
}
