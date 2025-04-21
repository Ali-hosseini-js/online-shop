"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useRef, useState } from "react";

function Payment() {
  const [input, setInput] = useState(null);
  const firstCreditCardRef = useRef(null);
  const secondCreditCardRef = useRef(null);
  const { data } = useSession();

  const [form, setForm] = useState({
    firstCredit: "",
    secondCredit: "",
  });

  if (!data) redirect("/");

  const editHandler = (fieldName) => {
    setInput(fieldName);
    switch (fieldName) {
      case "firstCreditCardRef":
        firstCreditCardRef.current.focus();
        break;
      case "secondCreditCardRef":
        secondCreditCardRef.current?.focus();
        break;
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col p-8 gap-4">
        <p className="text-xl font-medium">کارت ها</p>
        <p className="text-[#606060] text-xl font-extralight">
          مدیریت روش های پرداخت
        </p>
      </div>
      <div className="flex flex-col">
        <div className="p-3">
          <label htmlFor="lastName " className="text-[#606060] text-xl pr-6">
            کارت بانکی اول
          </label>
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
            <input
              id="lastName"
              type="text"
              placeholder="****-****-****-****"
              value={form.firstCredit}
              onChange={(e) =>
                setForm({ ...form, firstCredit: e.target.value })
              }
              readOnly={input !== "firstCreditCardRef"}
              ref={firstCreditCardRef}
              className="bg-inherit outline-none text-[#606060] text-xl w-full"
            />
            <button onClick={() => editHandler("firstCreditCardRef")}>
              <Image alt="" src="/personal/edit.svg" width={24} height={24} />
            </button>
          </div>
        </div>
        <div className="p-3">
          <label htmlFor="lastName " className="text-[#606060] text-xl pr-6">
            کارت بانکی دوم
          </label>
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
            <input
              id="lastName"
              type="text"
              placeholder="****-****-****-****"
              value={form.secondCredit}
              onChange={(e) =>
                setForm({ ...form, secondCredit: e.target.value })
              }
              readOnly={input !== "secondCreditCardRef"}
              ref={secondCreditCardRef}
              className="bg-inherit outline-none text-[#606060] text-xl w-full"
            />
            <button onClick={() => editHandler("secondCreditCardRef")}>
              <Image alt="" src="/personal/edit.svg" width={24} height={24} />
            </button>
          </div>
        </div>
      </div>
      <button className="button m-3">ذخیره اطلاعات</button>
    </div>
  );
}

export default Payment;
