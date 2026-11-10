/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bacx: {
          bg: '#07130E',
          'bg-deep': '#030806',
          'bg-elevated': '#0E231B',
          surface: '#0B1812',
          'surface-card': '#0D1A14',
          mint: '#A4DFD6',
          'neon-green': '#18E888',
          'electric-lime': '#00E676',
          'text-white': '#FFFFFF',
          'text-muted': '#8CA599',
          'text-dim': '#495F53',
          border: 'rgba(164, 223, 214, 0.15)',
          'border-active': 'rgba(24, 232, 136, 0.4)',
        }
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        mono: ['Inter', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
