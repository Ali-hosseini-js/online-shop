"use client";

import { useState } from "react";
import { menuCategories } from "@/data/menuCategories";
import Link from "next/link";

const MegaMenu = ({ className }) => {
  const [activeCategory, setActiveCategory] = useState("mobile");

  const menuHandler = (id) => {
    setActiveCategory(id);
  };

  return (
    <div className={`hidden ${className}`}>
      <div className="absolute flex justify-start text-center rounded-md  bg-white border-2 border-solid border-[#22262e] p-5  h-[400px] w-[950px] z-20">
        {/* Right side */}
        <div className="flex relative w-full h-full ">
          <div>
            <ul className="flex flex-col relative gap-5 border-l-2 border-main border-dashed pl-3 w-[150px] h-full">
              {menuCategories.map((category) => (
                <li
                  key={category.id}
                  className="flex items-center text-[18px] gap-3 font-semibold hover:text-main cursor-pointer"
                  onMouseEnter={() => menuHandler(category.id)}
                >
                  {category.svg}
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
          {/* Left Side */}
          <div>
            {activeCategory && (
              <div className="absolute right-[160px] p-4 grid grid-cols-4 gap-4 w-[800px] h-full scrollbar overflow-y-scroll scroll-smooth">
                {menuCategories
                  .find((category) => category.id === activeCategory)
                  ?.subCategories.map((sub, idx) => (
                    <div key={idx} className="space-y-2">
                      <h3 className="font-bold mb-2">{sub.name}</h3>
                      <ul className="space-y-1">
                        {sub.items.map((item, i) => (
                          <li key={i}>
                            <a className="text-gray-600 hover:text-main text-sm">
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
