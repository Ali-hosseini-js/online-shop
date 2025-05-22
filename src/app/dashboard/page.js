"use client";

import { getRole } from "@/services/CachedApi";
import { getProfile } from "@/services/Profile";
import { QueryKeys } from "@/utils/QueryKey";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useCart } from "src/context/CartContext";

function Dashboard() {
  const [state, dispatch] = useCart();
  const [pass, setPass] = useState({
    oldPassword: 0,
    newPassword: 0,
    id: state.id,
  });
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
  });
  const [input, setInput] = useState(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const mobileRef = useRef(null);

  const { data } = useQuery({
    queryKey: [QueryKeys.ROLE],
    queryFn: getRole,
    staleTime: 3600,
  });

  if (!data) redirect("/");

  const { data: profileData } = useQuery({
    queryKey: [QueryKeys.PROFILE],
    queryFn: getProfile,
    staleTime: 3600,
  });

  useEffect(() => {
    dispatch({
      type: "SET_PROFILE",
      payload: {
        firstName: profileData?.firstName,
        lastName: profileData?.lastName,
        mobile: profileData?.mobile,
      },
    });

    if (profileData) {
      setForm({
        firstName: profileData.firstName || "",
        lastName: profileData.lastName || "",
        mobile: profileData.mobile || "",
      });
    }
  }, [profileData, dispatch]);

  const editHandler = (fieldName) => {
    setInput(fieldName);
    switch (fieldName) {
      case "firstNameRef":
        firstNameRef.current.focus();
        break;
      case "lastNameRef":
        lastNameRef.current?.focus();
        break;
      case "mobileRef":
        mobileRef.current?.focus();
        break;
    }
  };

  const passHandler = async (e) => {
    e.preventDefault();
    console.log(pass);
    const res = await fetch("http://localhost:3100/panel/change-password", {
      method: "PATCH",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pass),
    });
    const data = await res.json();

    if (data.success) {
      toast.success(data.message);
    } else {
      toast.error(data.message);
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
          <label htmlFor="firstName " className="text-[#606060] text-xl pr-6">
            نام
          </label>
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
            <Image alt="" src="/personal/user.svg" width={24} height={24} />
            <input
              id="firstName"
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
            نام خانوادگی
          </label>
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
            <Image alt="" src="/personal/direct.svg" width={24} height={24} />
            <input
              id="lastName"
              type="text"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              readOnly={input !== "lastNameRef"}
              ref={lastNameRef}
              className="bg-inherit outline-none text-[#606060] text-xl w-full"
            />
            <button onClick={() => editHandler("lastNameRef")}>
              <Image alt="" src="/personal/edit.svg" width={24} height={24} />
            </button>
          </div>
        </div>
        <div className="p-3">
          <label htmlFor="mobile " className="text-[#606060] text-xl pr-6">
            شماره همراه
          </label>
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
            <Image alt="" src="/personal/call.svg" width={24} height={24} />
            <input
              id="mobile"
              type="tel"
              value={form.mobile}
              onChange={(e) => setForm({ ...form, mobile: e.target.value })}
              readOnly={input !== "mobileRef"}
              ref={mobileRef}
              className="bg-inherit outline-none text-[#606060] text-xl w-full"
            />
            <button onClick={() => editHandler("mobileRef")}>
              <Image alt="" src="/personal/edit.svg" width={24} height={24} />
            </button>
          </div>
        </div>
      </div>
      <button className="button m-3">ذخیره اطلاعات</button>
      <div className="flex flex-col p-8 gap-4">
        <p className="text-xl font-medium">تغییر رمز عبور</p>
      </div>
      <form onSubmit={passHandler}>
        <div className="grid grid-cols-2 max-xl:grid-cols-1">
          <div className="p-3">
            <label htmlFor="oldPass " className="text-[#606060] text-xl pr-6">
              رمز عبور قدیم
            </label>
            <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
              <Image alt="" src="/personal/key.svg" width={24} height={24} />
              <input
                name="oldPass"
                id="oldPass"
                type="text"
                onChange={(e) =>
                  setPass({ ...pass, oldPassword: e.target.value })
                }
                className="bg-inherit outline-none text-[#606060] text-xl w-full"
              />
            </div>
          </div>
          <div className="p-3">
            <label htmlFor="newPass " className="text-[#606060] text-xl pr-6">
              رمز عبور جدید
            </label>
            <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
              <Image alt="" src="/personal/key.svg" width={24} height={24} />
              <input
                name="newPass"
                id="newPass"
                type="text"
                onChange={(e) =>
                  setPass({ ...pass, newPassword: e.target.value })
                }
                className="bg-inherit outline-none text-[#606060] text-xl w-full"
              />
            </div>
          </div>
        </div>
        <button type="submit" className="button m-3">
          تغییر رمز
        </button>
      </form>
    </div>
  );
}

export default Dashboard;
