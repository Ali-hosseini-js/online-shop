"use client";

import Breadcrumbs from "@/module/Breadcrumb";
import Image from "next/image";
import mapImage from "@/public/map.png";

function page() {
  const submitHandler = () => {};

  return (
    <>
      <Breadcrumbs />
      <div>
        <h1 className="font-medium text-5xl text-main pb-7">تماس با ما</h1>
        <div className="p-6 border border-black rounded-lg">
          <p className="text-xl font-extralight mb-8 mt-8">
            می‌توانید برای پیگیری سفارش خود و یا طرح سوال، فرم زیر را تکمیل
            کنید.
          </p>
          <form onSubmit={submitHandler} className="flex flex-col gap-6">
            <div className="flex max-md:flex-col gap-6">
              <div className="flex flex-col w-full gap-4">
                <label htmlFor="username" className="text-xl font-extralight">
                  نام و نام خانوادگی
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="border border-gray-400 rounded-2xl h-[70px] focus:outline-none p-3"
                  required
                />
              </div>
              <div className="flex flex-col w-full gap-4">
                <label htmlFor="email" className="text-xl font-extralight">
                  ایمیل
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="border border-gray-400 rounded-2xl h-[70px] focus:outline-none p-3"
                  required
                />
              </div>
            </div>
            <div className="flex max-md:flex-col gap-6">
              <div className="flex flex-col w-full gap-4">
                <label htmlFor="call" className="text-xl font-extralight">
                  شماره تماس
                </label>
                <input
                  type="text"
                  id="call"
                  name="call"
                  className="border border-gray-400 rounded-2xl h-[70px] focus:outline-none p-3"
                  required
                />
              </div>
              <div className="flex flex-col w-full gap-4">
                <label htmlFor="cart" className="text-xl font-extralight">
                  شماره سفارش
                </label>
                <input
                  type="text"
                  id="cart"
                  name="cart"
                  className="border border-gray-400 rounded-2xl h-[70px] focus:outline-none p-3"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="text" className="text-xl font-extralight mb-4">
                متن
              </label>
              <textarea
                rows={10}
                id="text"
                name="text"
                placeholder="متن خود را بنویسید..."
                className="border border-gray-400 rounded-2xl focus:outline-none w-1/2 max-md:w-full p-3"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-main text-white rounded-lg py-2 px-4 w-[100px] h-[40px]"
            >
              ارسال پیام
            </button>
          </form>
          <div className="flex flex-col mt-10 gap-6">
            <p className="text-main text-[37px] font-light">نشانی:</p>
            <p className="text-[#606060] ">
              تهران، خیابان ولیعصر، بالاتر از زرتشت، کوچه جاوید، پلاک ۲۴
            </p>
            <Image
              className="w-full h-[300px]"
              alt=""
              src={mapImage}
              width={1150}
              height={300}
            />
            <div>
              <h2 className="text-main text-[37px] font-light pb-2">
                خدمات پس از فروش:
              </h2>
              <p className="text-[#606060] ">
                کلیه بسته‌های ارسالی و محصولاتی که قرار است از خدمات پس از فروش
                استفاده کنند را صرفا به صندوق پستی ارسال فرمایید.
              </p>
              <p className="text-[#606060] ">کد پستی: ۱۵۹۴۸۴۳۸۱۲ </p>
            </div>
            <div>
              <h2 className="text-main text-[37px] font-light pb-2">
                پاسخگویی:
              </h2>
              <p className="text-[#606060] ">
                تکنوشاپ در تمامی روزهای هفته از ساعت 08:00 الی 24:00 پاسخگوی
                شماست.
              </p>
              <p className="text-[#606060] flex flex-col gap-2">
                تلفن مرکز تماس تکنو شاپ:
                <span className="text-main">۰۲۱-۱۲۳۱۲۳۴۵</span>
                <span className="text-main">۰۲۱-۱۲۳۱۲۳۴۵</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
