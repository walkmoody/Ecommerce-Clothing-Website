/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
         sine: {
          '0%': { transform: 'translateY(0)' },
          '12.5%': { transform: 'translateY(-3.5px)' },
          '25%': { transform: 'translateY(-5px)' },
          '37.5%': { transform: 'translateY(-3.5px)' },
          '50%': { transform: 'translateY(0)' },
          '62.5%': { transform: 'translateY(3.5px)' },
          '75%': { transform: 'translateY(5px)' },
          '87.5%': { transform: 'translateY(3.5px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        sine: 'sine 1.2s ease-in-out infinite',
      },
    },

  },
  plugins: [],
}