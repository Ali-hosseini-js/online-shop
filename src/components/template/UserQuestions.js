"use client";

import { useState } from "react";
import { questions } from "@/data/questions";
import { IoIosArrowDown } from "react-icons/io";

function UserQuestions() {
  const [activeIndex, setActiveIndex] = useState(null);

  const clickHandler = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-start items-center px-5 max-md:justify-center">
        <p className="text-main text-[32px] font-semibold text-nowrap">
          سوالات متداول
        </p>
      </div>
      <div className="flex flex-col gap-10">
        {questions.map((question, index) => (
          <div className="flex flex-col gap-3" key={index}>
            <button
              className={`accordion ${
                activeIndex === index ? "bg-gray-100" : ""
              }`}
              onClick={() => clickHandler(index)}
            >
              {question.question}
              <IoIosArrowDown
                className={`text-main size-[24px] transition-transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`panel ${activeIndex === index ? "block" : "hidden"}`}
            >
              <p>{question.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserQuestions;
