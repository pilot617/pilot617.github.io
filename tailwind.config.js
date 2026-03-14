/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#00fff5',
          magenta: '#ff00ff',
          green: '#39ff14',
          yellow: '#facc15',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
