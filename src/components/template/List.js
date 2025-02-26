"use client";

import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { useEffect, useState } from "react";
import MegaMenu from "@/module/MegaMenu";

function List() {
  const [activeMenu, setActiveMenu] = useState(false);

  useEffect(() => {
    if (activeMenu) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, [activeMenu]);

  return (
    <div className="flex relative justify-between max-md:justify-center py-10 px-[70px] border-b-[1px] border-black">
      <div>
        <ul className="flex gap-12 text-nowrap">
          <li>
            <button
              className={`items-center justify-center gap-3 list-item rounded-lg ${
                activeMenu ? "bg-gray-100 text-main" : ""
              }`}
              onMouseEnter={() => setActiveMenu(true)}
            >
              دسته بندی کالا
              <IoIosArrowDown
                className={`transition-transform ${
                  activeMenu ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeMenu && <MegaMenu setActiveMenu={setActiveMenu} />}
          </li>
          <li className="list-item">
            <Link href="/offer">تخفیف ها</Link>
          </li>
          <li className="list-item">
            <Link href="/"> خرید اقساطی</Link>
          </li>
          <li className="list-item">
            <Link href="/call"> راهنمای خرید</Link>
          </li>
          <li className="list-item">
            <Link href="/call"> تماس با ما</Link>
          </li>
          <li className="list-item">
            <Link href="/about"> درباره ما</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default List;
