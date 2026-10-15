/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dental Studio Theme Palettes
        dental: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6', // primary teal
          600: '#0d9488', // hover teal
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          navy: '#0b192c',
          dark: '#0f172a',
          mint: '#10b981',
          ice: '#f8fafc',
          card: '#ffffff'
        },
        // Skin & Dermatology Theme Palettes
        skin: {
          50: '#fbf9f5', // warm ivory
          100: '#f5f0e8',
          200: '#e8decb',
          300: '#d7c7aa',
          400: '#c5a880', // muted warm gold
          500: '#9b7d56',
          600: '#755d3e',
          700: '#52402a',
          800: '#332719',
          900: '#1b140b',
          sage: '#4a6b53', // sage green primary
          sageLight: '#eef3ef',
          sageDark: '#354f3c',
          gold: '#c5a880',
          goldLight: '#fbf5ed',
          charcoal: '#1f2421',
          cream: '#fbf9f5',
          card: '#ffffff'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 10px 30px -3px rgba(0, 0, 0, 0.08)',
        'dental': '0 10px 25px -5px rgba(13, 148, 136, 0.1)',
        'skin': '0 10px 25px -5px rgba(74, 107, 83, 0.12)',
      }
    },
  },
  plugins: [],
}
