module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extends: {
    },
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      "2xl": '1536px',
    },
    fontFamily: {
      generalSansExtralight: ["GeneralSans-Extralight", "sans-serif"],
      generalSansLight: ["GeneralSans-Light", "sans-serif"],
      generalSansRegular: ["GeneralSans-Regular", "sans-serif"],
      generalSansMedium: ["GeneralSans-Medium", "sans-serif"],
      generalSansSemiBold: ["GeneralSans-SemiBold", "sans-serif"],
      generalSansBold: ["GeneralSans-Bold", "sans-serif"],
    },
  },
  plugins: [],
};
