/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors:{
        'cor-principal': 'hsl(var(--hue-color), 100%, 60%)',
        'cor-secundaria': 'hsl(var(--hue-color), 69%, 61%)',
        'cor-principal-alt': 'hsl(var(--hue-color), 57%, 53%)',
        'cor-principal-lighter': 'hsl(var(--hue-color), 92%, 85%)',
        'cor-do-titulo': 'hsl(var(--hue-color), 8%, 15%)',
        'cor-do-texto': 'hsl(var(--hue-color), 8%, 45%)',
        'cor-do-texto-lighter': 'hsl(var(--hue-color), 8%, 65%)',
        'cor-input': 'hsl(var(--hue-color), 70%, 96%)',
        'cor-body': 'hsl(var(--hue-color), 60%, 99%)',
        'cor-container': '#fff',
        'scroll-bar-color': 'hsl(var(--hue-color), 12%, 90%)',
        'scroll-thumb-color': 'hsl(var(--hue-color), 12%, 80%)',
      },
      height: {
        header: '48px',
      },

      screens: {
        'sm': '767px'
      },

      gridTemplateRows:{
        3:'repeat(3, minmax(0,1fr))'
      }
    },
  },
  plugins: [],
}
