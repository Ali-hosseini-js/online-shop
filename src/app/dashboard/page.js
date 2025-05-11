"use client";

import Image from "next/image";
import { redirect } from "next/navigation";
import { useRef, useState } from "react";

function Dashboard() {
  const [input, setInput] = useState(null);
  const firstNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);
  const addressRef = useRef(null);
  const postalCodeRef = useRef(null);
  const { data } = useSession();

  const [form, setForm] = useState({
    firstName: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    postalCode: "",
  });

  if (!data) redirect("/");

  const editHandler = (fieldName) => {
    setInput(fieldName);
    switch (fieldName) {
      case "firstNameRef":
        firstNameRef.current.focus();
        break;
      case "emailRef":
        emailRef.current?.focus();
        break;
      case "phoneRef":
        phoneRef.current?.focus();
        break;
      case "passwordRef":
        passwordRef.current?.focus();
        break;
      case "addressRef":
        addressRef.current?.focus();
        break;
      case "postalCodeRef":
        postalCodeRef.current?.focus();
        break;
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col p-8 gap-4">
        <p className="text-xl font-medium">اطلاعات فردی</p>
        <p className="text-[#606060] text-xl font-extralight">
          هویت خود را تایید کنید.
        </p>
      </div>
      <div className="grid grid-cols-2 max-xl:grid-cols-1">
        <div className="p-3">
          <label htmlFor="lastName " className="text-[#606060] text-xl pr-6">
            نام و نام خانوادگی
          </label>
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
            <Image alt="" src="/personal/user.svg" width={24} height={24} />
            <input
              id="lastName"
              type="text"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              readOnly={input !== "firstNameRef"}
              ref={firstNameRef}
              className="bg-inherit outline-none text-[#606060] text-xl w-full"
            />
            <button onClick={() => editHandler("firstNameRef")}>
              <Image alt="" src="/personal/edit.svg" width={24} height={24} />
            </button>
          </div>
        </div>
        <div className="p-3">
          <label htmlFor="lastName " className="text-[#606060] text-xl pr-6">
            ایمیل
          </label>
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
            <Image alt="" src="/personal/direct.svg" width={24} height={24} />
            <input
              id="lastName"
              type="email"
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              readOnly={input !== "emailRef"}
              ref={emailRef}
              className="bg-inherit outline-none text-[#606060] text-xl w-full"
            />
            <button onClick={() => editHandler("emailRef")}>
              <Image alt="" src="/personal/edit.svg" width={24} height={24} />
            </button>
          </div>
        </div>
        <div className="p-3">
          <label htmlFor="lastName " className="text-[#606060] text-xl pr-6">
            شماره همراه
          </label>
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
            <Image alt="" src="/personal/call.svg" width={24} height={24} />
            <input
              id="lastName"
              type="tel"
              placeholder="09XXXXXXXXX"
              pattern="^09\d{9}$"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              readOnly={input !== "phoneRef"}
              ref={phoneRef}
              className="bg-inherit outline-none text-[#606060] text-xl w-full"
            />
            <button onClick={() => editHandler("phoneRef")}>
              <Image alt="" src="/personal/edit.svg" width={24} height={24} />
            </button>
          </div>
        </div>
        <div className="p-3">
          <label htmlFor="lastName " className="text-[#606060] text-xl pr-6">
            پسوورد
          </label>
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
            <Image alt="" src="/personal/key.svg" width={24} height={24} />
            <input
              id="lastName"
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              readOnly={input !== "passwordRef"}
              ref={passwordRef}
              className="bg-inherit outline-none text-[#606060] text-xl w-full"
            />
            <button onClick={() => editHandler("passwordRef")}>
              <Image alt="" src="/personal/edit.svg" width={24} height={24} />
            </button>
          </div>
        </div>
        <div className="p-3">
          <label htmlFor="lastName " className="text-[#606060] text-xl pr-6">
            آدرس
          </label>
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
            <Image alt="" src="/personal/home.svg" width={24} height={24} />
            <input
              id="lastName"
              type="text"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              readOnly={input !== "addressRef"}
              ref={addressRef}
              className="bg-inherit outline-none text-[#606060] text-xl w-full"
            />
            <button onClick={() => editHandler("addressRef")}>
              <Image alt="" src="/personal/edit.svg" width={24} height={24} />
            </button>
          </div>
        </div>
        <div className="p-3">
          <label htmlFor="lastName " className="text-[#606060] text-xl pr-6">
            کدپستی
          </label>
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
            <Image alt="" src="/personal/signpost.svg" width={24} height={24} />
            <input
              id="lastName"
              type="text"
              value={form.postalCode}
              onChange={(e) => setForm({ ...form, postalCode: e.target.value })}
              readOnly={input !== "postalCodeRef"}
              ref={postalCodeRef}
              className="bg-inherit outline-none text-[#606060] text-xl w-full"
            />
            <button onClick={() => editHandler("postalCodeRef")}>
              <Image alt="" src="/personal/edit.svg" width={24} height={24} />
            </button>
          </div>
        </div>
      </div>
      <button className="button m-3">ذخیره اطلاعات</button>
    </div>
  );
}

export default Dashboard;
