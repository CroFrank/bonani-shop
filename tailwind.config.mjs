/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Poppins"],
    },
    extend: {
      height: {
        half: "50vh",
        quarter: "15vh",
      },
      colors: {
        roza1: "#f4efec",
        roza2: "#f0d9d1",
        roza3: "#ddb7ac",
        zelena: "#999b85",
      },
    },
  },
  plugins: [],
});
