/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#1F6F4A',
          50: '#E7F3ED',
          100: '#CFE7DB',
          200: '#9FCFB7',
          300: '#6FB893',
          400: '#4A9C78',
          500: '#1F6F4A',
          600: '#195B3D',
          700: '#134730',
          800: '#0D3323',
          900: '#082117'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji']
      }
    }
  },
  plugins: []
}
