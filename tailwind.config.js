/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Gilroy-Bold": ["Gilroy-Bold", "sans-serif"],
        "Gilroy-Heavy": ["Gilroy-Heavy", "sans-serif"],
        "Gilroy-Light": ["Gilroy-Light", "sans-serif"],
        "Gilroy-Medium": ["Gilroy-Medium", "sans-serif"],
        "Gilroy-Regular": ["Gilroy-Regular", "sans-serif"],
      },
      width: {
        "w-28": ["width: 7rem"],
        
      },
      height: {
        "h-44": ["height: 11rem"],
        
      },
    },
  },
  plugins: [],
};
