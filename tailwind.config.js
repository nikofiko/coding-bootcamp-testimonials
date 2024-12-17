/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"], // Fixed the syntax
      },
      backgroundPosition: {
        'left-20-top': '80px top',
      },
      boxShadow: {
        custom: '0px 7px 29px 0px rgba(100, 100, 111, 0.2)', // Twoja wartość cienia
      },
    },
  },
  plugins: [],
}

