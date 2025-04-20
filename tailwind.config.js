/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#5E0A8E",
        mainTint: "#945CB4",
        mainGray: "#F9F9F9",
        footer: "#1F032F",
        border: "#929292",
        card: "#FAFAFA",
        point: "#F4B740",
        opinion: "#ADADAD",
      },
    },
  },
  plugins: [],
};
