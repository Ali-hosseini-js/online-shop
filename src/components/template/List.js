"use client";

import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import MegaMenu from "@/module/MegaMenu";

function List() {
  return (
    <div className="flex flex-wrap relative max-md:justify-center max-md:flex-col max-md:items-center py-10 px-[70px] border-b-[1px] border-black gap-5 text-nowrap">
      <div className="flex flex-col items-start group max-lg:hidden">
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
    </div>
  );
}

export default List;
