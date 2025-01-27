/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Add custom theme extensions here
    },
  },
  plugins: [
    daisyui, // Import daisyUI as an ES module
  ],
};
