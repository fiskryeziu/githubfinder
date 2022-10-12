/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        textColor: '#ffffff',
        textColorHover: 'rgba(255,255,255,0.7)',
        header: '#161b22',
        darkHeader: '#010409',
        btnPrimary: '#238636',
        borderInput: '#58a6ff',
        focusText: '#c9d1d9',
        borderColor: '#21262d',
        repoColor: '#58a6ff',
      },
    },
  },
  plugins: [],
}
