"use client";

import Image from "next/image";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { CiLogin } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import logo from "@/public/logo.svg";
import List from "@/template/List";
import { useSession } from "next-auth/react";
import { useCart } from "src/context/CartContext";
import { e2p } from "@/utils/replaceNumber";
function Header() {
  // const session = await getServerSession(authOptions);
  const { data: session } = useSession();
  const [state] = useCart();
  return (
    <>
      <div className="flex justify-between items-center my-7 max-lg:flex-col max-lg:gap-5">
        <Link href="/" className="flex items-center justify-center gap-3">
          <Image alt="tecnoshop" src={logo} width={56} height={63} />
          <p className="text-2xl font-semibold text-main">تکنو شاپ</p>
        </Link>
        <div className="flex gap-3 rounded-lg items-center bg-inherit w-full max-w-[600px] p-2 border border-border ">
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
          {session ? (
            <Link href="/dashboard" className="text-main">
              <CgProfile className="w-[30px] h-[30px]" />
            </Link>
          ) : (
            <Link href="/login" className="button">
              <CiLogin className="w-[24px] h-[24px]" />
              <p>ورود / ثبت نام</p>
            </Link>
          )}
          <Link
            href="/checkout"
            className="border-r-[1px] border-gray-500 pr-3"
          >
            <div className="text-3xl text-center bg-white text-main size-[35px] rounded-lg p-1 flex items-center justify-center relative z-0">
              <CiShoppingCart className="w-[40px] h-[40px]" />
              {!!state.itemsCounter && (
                <span className="absolute text-sm size-[20px] bg-main  text-white rounded-full  -top-[10px] -right-[10px]">
                  {e2p(state.itemsCounter)}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>
      <List />
    </>
  );
}

export default Header;
