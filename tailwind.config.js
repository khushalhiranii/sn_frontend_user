/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "foundation-white-light-active": "#f3f3f3",
        "foundation-red-normal": "#a90542",
        mediumvioletred: "#cf2b69",
        "foundation-white-normal-active": "#cacaca",
        "foundation-white-normal-hover": "#e3e3e3",
        black: "#3c3a36",
        black1: "#000",
        whitesmoke: "#f6f6f6",
        "foundation-red-normal1": "#aa0542",
        "foundation-violet-violet-900": "#16141a",
        "foundation-violet-violet-100": "#c0bfc3",
        "foundation-blue-normal": "#0166e4",
        dodgerblue: {
          "100": "#268cff",
          "200": "rgba(38, 140, 255, 0.09)",
        },
        silver: "#bababa",
        gainsboro: "#e0e0e0",
        gray: {
          "100": "#fdfdfd",
          "200": "#191919",
        },
        deepskyblue: "#3eaeff",
        lightskyblue: "#a3d8ff",
        darkslategray: {
          "100": "#474747",
          "200": "#404040",
          "300": "#333",
          "400": "#2d2d2d",
        },
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        "app-regular-sub-heading-16": "'IBM Plex Sans Devanagari'",
      },
      borderRadius: {
        "981xl": "1000px",
        "984xl": "1003px",
        "31xl": "50px",
      },
    },
    fontSize: {
      mid: "1.063rem",
      sm: "0.875rem",
      "13xl": "2rem",
      lgi: "1.188rem",
      "7xl": "1.625rem",
      base: "1rem",
      "5xl": "1.5rem",
      xl: "1.25rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  plugins: [],
}

