/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#121212',
        text: '#ffffff',
        textMuted: '#a3a3a3',
        primary: '#ff7a00',
        primaryLight: '#ff9500',
        primaryDark: '#ff5e00',
      },
    },
  },
  plugins: [],
}
