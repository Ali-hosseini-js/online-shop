import localFont from "next/font/local";

export const vazir = localFont({
  src: [
    {
      path: "../../public/fonts/Vazirmatn-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazirmatn-Regular.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazirmatn-Medium.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazirmatn-Bold.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazirmatn-ExtraBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
});
