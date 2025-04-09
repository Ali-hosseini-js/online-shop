"use client";
import { BsHandbag } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";
import { LuCar } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { checkout } from "@/data/checkout";
import Image from "next/image";

function CheckoutNavigation({ children }) {
  const pathname = usePathname();
  const isActive = pathname.includes();
  return (
    <div className="flex flex-col ">
      <div className="flex items-center justify-between py-10">
        {checkout.map((item) => {
          const isActive = pathname.includes(item.href) && pathname.length > 1;
          return (
            <div key={item.id} className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-full bg-white border border-opinion size-[60px]">
                {/* <Image
                  alt=""
                  src={item.image}
                  width={35}
                  height={35}
                  className="text-opinion size-[35px] "
                /> */}
              </div>
              <div>
                <p className="text-opinion text-xs">{item.section}</p>
                <p>{item.desc}</p>
              </div>
            </div>
          );
        })}
        {/* <div className="flex items-center gap-3">
          <div className="flex items-center justify-center rounded-full bg-white border border-opinion size-[60px]">
            <BsHandbag className="text-opinion size-[35px] " />
          </div>
          <div>
            <p className="text-opinion text-xs">مرحله اول</p>
            <p>سبد خرید شما</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center rounded-full bg-white border border-opinion size-[60px]">
            <IoLocationOutline className="text-opinion size-[35px] " />
          </div>
          <div>
            <p className="text-opinion text-xs">مرحله دوم</p>
            <p>ارسال اطلاعات</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center rounded-full bg-white border border-opinion size-[60px]">
            <CiCreditCard1 className="text-opinion size-[35px] " />
          </div>
          <div>
            <p className="text-opinion text-xs">مرحله سوم</p>
            <p>پرداخت و ثبت نهایی</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center rounded-full bg-white border border-opinion size-[60px]">
            <LuCar className="text-opinion size-[35px] " />
          </div>
          <div>
            <p className="text-opinion text-xs">مرحله چهارم</p>
            <p>اتمام خرید و ارسال</p>
          </div>
        </div> */}
      </div>
      <p className="text-main text-xl border-b-[1px] border-opinion">
        سبد خرید شما
      </p>
      <div>{children}</div>
    </div>
  );
}

export default CheckoutNavigation;
