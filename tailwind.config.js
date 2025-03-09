/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        jump: "cubic-bezier(0.68,-0.55,0.265,1.55)", // Keeps your existing transition effect
      },
      animation: {
        glow: "glowEffect 1.5s infinite alternate", // Smooth glowing animation
      },
      keyframes: {
        glowEffect: {
          "0%": { filter: "drop-shadow(0 0 10px #00ffff)" }, // Bright cyan glow
          "100%": { filter: "drop-shadow(0 0 25px #00ffff)" }, // Stronger glow
        },
        whiteGlowEffect: {
          "0%": { filter: "drop-shadow(0 0 15px rgba(255, 255, 255, 0.8)) brightness(1.2)" }, 
          "50%": { filter: "drop-shadow(0 0 35px rgba(255, 255, 255, 1)) brightness(1.5)" }, 
          "100%": { filter: "drop-shadow(0 0 50px rgba(255, 255, 255, 1)) brightness(2)" }, 
        },
      },
    },
  },
  plugins: [],
};
