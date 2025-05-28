"use client";

import { getAddress } from "@/services/address/AllAddress";
import { QueryKeys } from "@/utils/QueryKey";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

function AddressForm() {
  const [form, setForm] = useState({
    content: "",
  });
  const { refetch } = useQuery({
    queryKey: [QueryKeys.User_ADDRESS],
    queryFn: getAddress,
    staleTime: 3600,
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(form);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/panel/address`,
      {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await res.json();

    if (data.error) {
      toast.error(data.message);
    } else {
      toast.success("آدرس با موفقیت ثبت گردید");
      refetch();
      setForm({ content: "" });
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="grid grid-cols-2 max-xl:grid-cols-1">
        <label className="flex flex-col gap-3 text-[#606060] text-xl pr-6 p-3">
          آدرس{" "}
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
            <Image alt="" src="/personal/user.svg" width={24} height={24} />
            <input
              id="content"
              type="text"
              value={form?.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
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

export default AddressForm;
