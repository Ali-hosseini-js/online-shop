"use client";

import { getCachedUsers } from "@/services/user/CachedUsers";
import { QueryKeys } from "@/utils/QueryKey";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

function UserForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    password: "",
    role: "user",
  });
  const { refetch } = useQuery({
    queryKey: [QueryKeys.ADMIN_USER],
    queryFn: getCachedUsers,
    staleTime: 3600,
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(form);
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();

    if (data.error) {
      toast.error(data.message);
    } else {
      toast.success(data.message);
      refetch();
      setForm({
        firstName: "",
        lastName: "",
        mobile: "",
        password: "",
        role: "user",
      });
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="grid grid-cols-2 max-xl:grid-cols-1">
        <label className="flex flex-col gap-3 text-[#606060] text-xl pr-6 p-3">
          نام
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
            <Image alt="" src="/personal/user.svg" width={24} height={24} />
            <input
              id="firstName"
              type="text"
              value={form?.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className="bg-inherit outline-none text-[#606060] text-xl w-full"
            />
          </div>
        </label>
        <label className="flex flex-col gap-3 text-[#606060] text-xl pr-6 p-3">
          نام خانوادگی
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
            <Image alt="" src="/personal/direct.svg" width={24} height={24} />
            <input
              id="lastName"
              type="text"
              value={form?.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              className="bg-inherit outline-none text-[#606060] text-xl w-full"
            />
          </div>
        </label>

        <label className="flex flex-col gap-3 text-[#606060] text-xl pr-6 p-3">
          شماره همراه
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
            <Image alt="" src="/personal/call.svg" width={24} height={24} />
            <input
              id="phoneNumber"
              type="tel"
              value={form?.mobile}
              placeholder="09XXXXXXXXX"
              onChange={(e) => setForm({ ...form, mobile: e.target.value })}
              className="bg-inherit outline-none text-[#606060] text-xl w-full"
            />
          </div>
        </label>

        <label className="flex flex-col gap-3 text-[#606060] text-xl pr-6 p-3">
          پسوورد
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
            <Image alt="" src="/personal/key.svg" width={24} height={24} />
            <input
              required
              id="password"
              type="password"
              value={form?.password}
              placeholder="رمز عبور را وارد کنید"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="bg-inherit outline-none text-[#606060] text-xl w-full"
            />
          </div>
        </label>

        <label className="flex flex-col gap-3 text-[#606060] text-xl pr-6 p-3">
          سطح دسترسی
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
            <Image alt="" src="/personal/home.svg" width={24} height={24} />
            <select
              name="role"
              id="roles"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="bg-inherit outline-none text-[#606060] text-xl w-full"
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="copyRighter">CopyRighter</option>
            </select>
          </div>
        </label>
      </div>

      <button type="submit" className="button m-3">
        ذخیره اطلاعات
      </button>
    </form>
  );
}

export default UserForm;
