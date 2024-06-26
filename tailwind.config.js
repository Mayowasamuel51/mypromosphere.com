/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxs: "280px",
      xs: "360px",
      380: "380px",
      390: "390px",
      xsm: "412px",
      xxx: "440px",
      sm: "480px",
      smsm: "510px",
      smd: "540px",
      sms: "580px",
      smmd: "600px",
      smax: "680px",
      md: "768px",
      mdxs: "800px",
      mdsm: "860px",
      mdsmax: "900px",
      mdlg: "930px",
      lg: "976px",
      xlg: "992px",
      bigLg: "1024px",
      fity: "1026px",
      extraLg: "1090px",
      extraExtra: "1120px",
      large: "1170px",
      exl: "1280px",
      topXl: "1300px",
      pcXl: "1360px",
      extraXl: "1450px",
    },
    extend: {
      colors: {
        purple: "#3D217A",
        pink: "#EC6A87",
        purple2: "#D60DE8",
        offwhite: "#F6EFEF",
        darkpink: "#FE34E6",
        blue: "#407BFF",
        red: "#E3111E",
        grey:"#A9A2A2",
        mistyRose: "#E1AFB5",
        lightGrayishBlue: "#F4F5F4"
      },
      backgroundImage: {
        barber: "url('/src/assests/images/barber.png')",
      },
    },
  },
  plugins: [],
};

