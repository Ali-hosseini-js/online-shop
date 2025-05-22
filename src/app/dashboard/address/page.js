"use client";

import AddressForm from "@/module/address/AddressForm";
import AddressList from "@/module/address/AddressList";
import { getRole } from "@/services/CachedApi";
import { QueryKeys } from "@/utils/QueryKey";
import { useQuery } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import { Toaster } from "react-hot-toast";

function Address() {
  const { data } = useQuery({
    queryKey: [QueryKeys.ROLE],
    queryFn: getRole,
    staleTime: 3600,
  });

  if (!data) redirect("/");

  return (
    <div className="w-full">
      <div className="flex flex-col m-5 justify-center gap-5">
        <p className="text-main text-xl border-b-[1px] border-opinion mb-5">
          ایجاد آدرس جدید
        </p>
        <AddressForm />
        <p className="text-main text-xl border-b-[1px] border-opinion mb-5">
          لیست آدرس های شما
        </p>
        <AddressList />
      </div>
      <Toaster />
    </div>
  );
}

export default Address;
