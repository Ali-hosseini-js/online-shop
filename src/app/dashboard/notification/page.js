"use client";

import { getRole } from "@/services/CachedApi";
import { QueryKeys } from "@/utils/QueryKey";
import { useQuery } from "@tanstack/react-query";
import { redirect } from "next/navigation";

function Notification() {
  const { data } = useQuery({
    queryKey: [QueryKeys.ROLE],
    queryFn: getRole,
    staleTime: 3600,
  });

  if (!data) redirect("/");

  return (
    <div className="w-full">
      <div className="flex flex-col p-8 gap-4">
        <p className="text-xl font-medium">پیغام ها</p>
        <p className="text-[#606060] text-xl font-extralight">
          لیست پیغام های دریافت شده
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <p className="button text-center text-2xl">
          هیچ پیامی در صندوق نامه ها وجود ندارد.
        </p>
      </div>
    </div>
  );
}

export default Notification;
