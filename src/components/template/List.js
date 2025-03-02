"use client";

import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import MegaMenu from "@/module/MegaMenu";

function List() {
  return (
    <div className="flex relative justify-between max-md:justify-center py-10 px-[70px] border-b-[1px] border-black">
      <ul className="flex gap-12 text-nowrap">
        <div className="flex flex-col items-start group">
          <div className="list-item items-center justify-center gap-3 rounded-lg group-hover:bg-gray-100 group-hover:text-main">
            دسته بندی کالا
            <IoIosArrowDown className="transition-transform group-hover:rotate-180" />
          </div>
          <MegaMenu className={"group-hover:block"} />
        </div>
        <Link className="list-item" href="/offer">
          تخفیف ها
        </Link>
        <Link className="list-item" href="/">
          خرید اقساطی
        </Link>
        <Link className="list-item" href="/call">
          راهنمای خرید
        </Link>
        <Link className="list-item" href="/call">
          تماس با ما
        </Link>
        <Link className="list-item" href="/about">
          درباره ما
        </Link>
      </ul>
    </div>
  );
}

export default List;
