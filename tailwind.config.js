/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#07090e',
        surface: {
          50: '#111625',
          100: '#161c2e',
          200: '#1c243a',
          300: '#232d47',
        },
        primary: {
          DEFAULT: '#8b5cf6', // Violet
          light: '#a78bfa',
          dark: '#7c3aed',
        },
        secondary: {
          DEFAULT: '#06b6d4', // Cyan
          light: '#22d3ee',
          dark: '#0891b2',
        },
        accent: {
          DEFAULT: '#6366f1', // Indigo
          light: '#818cf8',
          dark: '#4f46e5',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        'serif-editorial': ['Newsreader', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      animation: {
        'glow-pulse': 'glow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      }
    },
  },
  plugins: [],
}
