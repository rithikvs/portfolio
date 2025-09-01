/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
        'card-gradient': 'linear-gradient(180deg, rgba(99,102,241,0.15), rgba(59,130,246,0.05))',
      },
    },
  },
  plugins: [],
}