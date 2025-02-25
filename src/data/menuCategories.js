import { CiMobile1 } from "react-icons/ci";
import { AiOutlineLaptop } from "react-icons/ai";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

export const menuCategories = [
  {
    id: "mobile",
    name: "موبایل",
    svg: <CiMobile1 />,
    subCategories: [
      {
        name: "لوازم جانبی گوشی",
        items: ["کیف و کاور گوشی", "پاور بانک", "پایه نگهدارنده"],
      },
      {
        name: "گوشی موبایل",
        items: ["سامسونگ", "هوآوی", "اپل", "شیایومی", "آنر"],
      },
    ],
  },
  {
    id: "laptop",
    name: "لپ تاپ",
    svg: <AiOutlineLaptop />,
    subCategories: [
      {
        name: "لپ تاپ",
        items: [
          "لپ‌تاپ ایسوس",
          "لپ‌تاپ لنوو",
          "مک بوک",
          "لپ‌تاپ HP",
          "لپ‌تاپ دل",
          "لپ‌تاپ ایسر",
          "لپ‌تاپ ام اس آی",
          "لپ تاپ ROG",
          "لپ تاپ TUF Gaming",
          "لپ تاپ LOQ",
          "لپ تاپ ideapad slim 3",
          "لپ تاپ Vivobook",
          "لپ تاپ Victus",
          "لپ‌تاپ کاستوم",
          "لپ تاپ استوک",
        ],
      },
      {
        name: "لوازم جانبی لپ تاپ",
        items: ["شارژر لپ‌تاپ", "کیف لپ‌تاپ", "کول پد", "استیکر لپ‌تاپ"],
      },
    ],
  },
  {
    id: "computer",
    name: "کامپیوتر",
    svg: <HiOutlineComputerDesktop />,
    subCategories: [
      {
        name: "کامپیوتر",
        items: ["mini pc", "قلم نوری", "رم ریدر", "ماوس پد", "کیس اسمبل شده"],
      },
      {
        name: "کیبورد",
        items: ["کیبورد گیمینگ", "کیبورد بی سیم", "کیبورد مکانیکال"],
      },
      {
        name: "کیس کامپیوتر",
        items: ["کیس گیمینگ"],
      },
      {
        name: "ماوس کامپیوتر",
        items: ["ماوس گیمینگ", "ماوس بیسیم"],
      },
      {
        name: "مانیتور",
        items: ["مانیتور OLED"],
      },
      {
        name: "اسپیکر",
        items: [
          "اسپیکر بلوتوثی",
          "اسپیکر jbl",
          "اسپیکر هارمن کاردن",
          "اسپیکر سونی",
          "اسپیکر تسکو",
          "اسپیکر میکرولب",
          "پارتی باکس",
        ],
      },
      {
        name: "قطعات کامپیوتر",
        items: ["پردازنده (cpu)", "کارت گرافیک", "مادربرد", "دانگل بلوتوث"],
      },
      {
        name: "رم کامپیوتر",
        items: [],
      },
    ],
  },
];
