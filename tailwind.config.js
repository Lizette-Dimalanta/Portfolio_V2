/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'DM-Sherif-Display': ['DM Sherif Display', 'Times New Roman'],
        'Inter': ['Inter', 'Arial', 'Helvetica'],
        'Roboto-Mono': ['Roboto Mono', 'Monospace']
      },
      backgroundImage: {
        'backgroundImage': "url('/images/ProfileImage.png')",
      },
    },
  },
  plugins: [],
}