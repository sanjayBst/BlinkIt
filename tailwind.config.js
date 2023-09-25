/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  "./node_modules/flowbite/**/*.js"],
  plugins: [
    require('flowbite/plugin')
],
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
        "w-32": ["width: 8rem"],
        "w-4/5": ["width: 80%"],
        "w-3/6": ["width: 50%"],
        "w-11/12": ["91.666667%"],
        
      },
      height: {
        "h-44": ["height: 11rem"],
        "h-72": ["height: 18rem"],
        "h-32": ["height: 8rem"],
        "h-48": ["height: 12rem"],
        "h-3/4": ["height: 75%"],
        "h-1/4": ["height: 25%"],
        "h-3/6": ["height: 50%"],
        
      },
    },
  },
  plugins: [],
};
