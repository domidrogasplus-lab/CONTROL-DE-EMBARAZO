/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#FFD700',
        'gold-light': '#FFE44D',
        'gold-dark': '#E6C200',
        'dorado': '#FFD700',
      },
      fontFamily: {
        'sans': ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'bounce-in': 'bounceIn 0.6s ease-out',
      },
      keyframes: {
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounceIn: {
          '0%': { 
            transform: 'translateX(100%) scale(0.3)', 
            opacity: '0' 
          },
          '50%': { 
            transform: 'translateX(-10%) scale(1.05)', 
            opacity: '0.8' 
          },
          '70%': { 
            transform: 'translateX(5%) scale(0.95)', 
            opacity: '0.9' 
          },
          '100%': { 
            transform: 'translateX(0) scale(1)', 
            opacity: '1' 
          },
        },
      },
    },
  },
  plugins: [],
}
