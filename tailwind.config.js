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
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #3b82f6, #1d4ed8, #1e40af)',
        'card-gradient': 'linear-gradient(135deg, rgba(59, 131, 246, 0.91), rgba(30, 64, 175, 0.05))',
      },
    },
  },
  plugins: [],
}