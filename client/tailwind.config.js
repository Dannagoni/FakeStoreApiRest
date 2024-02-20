/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'mabry-pro':['Mabry-pro', 'sans']
      },
      colors: {
        blue900: '#111321',
        blue950: '#00041A',
        purple:'#A157FF'
      },
    },
  },
  plugins: [],
};
