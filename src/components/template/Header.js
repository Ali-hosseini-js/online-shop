import Image from "next/image";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import logo from "@/public/logo.svg";

function Header() {
  return (
    <div className="flex justify-between items-center my-7">
      <Link href="/" className="flex items-center justify-center gap-3">
        <Image alt="tecnoshop" src={logo} width={56} height={63} />
        <p className="text-2xl font-semibold text-main">تکنو شاپ</p>{" "}
      </Link>
      <div className="flex gap-3 rounded-lg items-center bg-inherit w-full max-w-[600px] p-2 max-sm:hidden border border-border ">
        <input
          className="bg-inherit p-2 w-full focus:outline-none"
          type="text"
          placeholder="جستجو"
        />
        <button className="rounded-full p-1 bg-inherit">
          <CiSearch className="w-[24px] h-[24px]" />
        </button>
      </div>
      <div className="flex items-center justify-center gap-3">
        <Link
          href="/login"
          className="bg-main text-white flex items-center justify-center p-2 rounded-md gap-2"
        >
          <CiLogin className="w-[24px] h-[24px]" />
          <p>ورود / ثبت نام</p>
        </Link>
        <Link href="/checkout" className="border-r-[1px] border-gray-500 pr-3">
          <CiShoppingCart className="w-[32px] h-[32px]" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
