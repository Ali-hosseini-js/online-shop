import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="flex justify-between items-center my-7">
      <Link href="/" className="flex items-center justify-center gap-3">
        <Image alt="tecnoshop" src="logo.svg" width={56} height={63} />
        <p className="text-2xl font-semibold text-main">تکنو شاپ</p>{" "}
      </Link>
      <div className="flex gap-3 rounded-lg items-center bg-inherit w-full max-w-[600px] p-2 max-sm:hidden border border-border ">
        <input
          className="bg-inherit p-2 w-full focus:outline-none"
          type="text"
          placeholder="جستجو"
        />
        <button className="rounded-full p-1 bg-inherit">
          <Image alt="search" src="search.svg" width={24} height={24} />
        </button>
      </div>
      <div className="flex items-center justify-center gap-3">
        <Link
          href="/login"
          className="bg-main text-white flex items-center justify-center p-2 rounded-md gap-2"
        >
          <Image alt="login" src="login.svg" width={24} height={24} />
          <p>ورود / ثبت نام</p>
        </Link>
        <Link href="/checkout" className="border-r-[1px] border-gray-500 pr-3">
          <Image alt="سبد خرید" src="cart.svg" width={32} height={32} />
        </Link>
      </div>
    </div>
  );
}

export default Header;
