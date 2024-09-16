/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        primaryT: '#FFA600',
        secondaryT: '#ffff9c'
      },
      fontFamily: {
        primaryT: "Poppins, sans-serif"
      }
    }
  },
  plugins: [],
}

