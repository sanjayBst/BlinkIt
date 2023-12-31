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
        "sans": ["Gilroy-Bold", "sans-serif"],
        "Gilroy-Heavy": ["Gilroy-Heavy", "sans-serif"],
        "Gilroy-Light": ["Gilroy-Light", "sans-serif"],
        "Gilroy-Medium": ["Gilroy-Medium", "sans-serif"],
        "Gilroy-Regular": ["Gilroy-Regular", "sans-serif"],
      },
      width: {
        "w-28": ["width: 7rem"],
        "w-32": ["width: 8rem"],
        "w-36": ["width: 9rem"],
        "w-4/5": ["width: 80%"],
        "w-3/6": ["width: 50%"],
        "w-11/12": ["91.666667%"],
        
      },
      height: {
        "h-44": ["height: 11rem"],
        "h-72": ["height: 18rem"],
        "h-32": ["height: 8rem"],
        "h-36": ["height: 9rem"],
        "h-48": ["height: 12rem"],
        "h-3/4": ["height: 75%"],
        "h-1/4": ["height: 25%"],
        "h-3/6": ["height: 50%"],
        
      },
    
    },
    colors:{
      'counter':'#318616',
      'it': '#54B226',
      'blink': '#F8CB45',
      'custom-green':'#328616'
    },
    screens: {
      'sm': '320px',  // Small screens like mobile phones
      'md': '700px',  // Medium screens like tablets
      'lg': '1240px', // Large screens like laptops
      // 'xl': '1440px', // Extra-large screens like desktops
    },
  },
  // plugins: [],
};
