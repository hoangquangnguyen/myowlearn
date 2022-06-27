/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,vue}","./public/index.html"],
  theme: {
    extend: {
      colors:{
        pinkD: "#DC4298",
        brown2:"#230F0F",
      }
    },
  },
  plugins: [],
}
