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
        // Blue Metallic Palette
        primary: '#0ea5e9',        // Sky blue metallic
        primaryLight: '#38bdf8',   // Lighter metallic blue
        primaryDark: '#0284c7',    // Darker metallic blue
        accent: '#0369a1',         // Deep metallic blue
        // Golden Palette
        golden: '#fbbf24',         // Amber golden
        goldenLight: '#fde047',    // Light golden yellow
        goldenDark: '#f59e0b',     // Deep golden orange
        // Shimmer effects
        metallic: '#7dd3fc',       // Light metallic shine
        shine: '#bae6fd',          // Bright shine effect
      },
    },
  },
  plugins: [],
}
