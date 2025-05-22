"use client";

import { getShipping } from "@/services/shipping/AllShipping";
import { QueryKeys } from "@/utils/QueryKey";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

function ShippingForm() {
  const [form, setForm] = useState({
    title: "",
    price: 0,
    freeShippingThreshold: 0,
  });
  const { refetch } = useQuery({
    queryKey: [QueryKeys.ADMIN_SHIPPING],
    queryFn: getShipping,
    staleTime: 3600,
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(form);
    const res = await fetch(`http://localhost:3100/shipping`, {
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
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="grid grid-cols-2 max-xl:grid-cols-1">
        <label className="flex flex-col gap-3 text-[#606060] text-xl pr-6 p-3">
          عنوان{" "}
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
            <Image alt="" src="/personal/user.svg" width={24} height={24} />
            <input
              id="title"
              type="text"
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="bg-inherit outline-none text-[#606060] text-xl w-full"
            />
          </div>
        </label>
        <label className="flex flex-col gap-3 text-[#606060] text-xl pr-6 p-3">
          هزینه{" "}
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
            <Image alt="" src="/personal/direct.svg" width={24} height={24} />
            <input
              id="price"
              type="number"
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              className="bg-inherit outline-none text-[#606060] text-xl w-full"
            />
          </div>
        </label>

        <label className="flex flex-col gap-3 text-[#606060] text-xl pr-6 p-3">
          حداقل هزینه ارسال رایگان{" "}
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
            <Image alt="" src="/personal/call.svg" width={24} height={24} />
            <input
              id="freeShippingThreshold"
              type="number"
              onChange={(e) =>
                setForm({ ...form, freeShippingThreshold: e.target.value })
              }
              className="bg-inherit outline-none text-[#606060] text-xl w-full"
            />
          </div>
        </label>
      </div>

      <button type="submit" className="button m-3">
        ذخیره اطلاعات
      </button>
    </form>
  );
}

export default ShippingForm;
