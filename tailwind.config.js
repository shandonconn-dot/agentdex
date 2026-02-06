/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'pokedex-red': '#FF1A1A',
        'pokedex-blue-screen': '#3BB9FF',
        'pixel-gray': '#333333',
        'pixel-white': '#F0F0F0',
      },
      fontFamily: {
        'pixel': ['VT323', 'monospace'],
      },
      backgroundImage: {
        'pokedex-texture': 'linear-gradient(45deg, #FF1A1A, #CC0000)',
      },
      animation: {
        'flip-open': 'flipOpen 0.5s ease-in-out',
        'blink': 'blink 1s infinite',
      },
      keyframes: {
        flipOpen: {
          '0%': { transform: 'rotateY(180deg)' },
          '100%': { transform: 'rotateY(0deg)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        }
      }
    },
  },
  plugins: [],
}