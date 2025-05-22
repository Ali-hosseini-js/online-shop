"use client";

import { getRole } from "@/services/CachedApi";
import { QueryKeys } from "@/utils/QueryKey";
import { useQuery } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import { Toaster } from "react-hot-toast";

function MyList() {
  const { data } = useQuery({
    queryKey: [QueryKeys.ROLE],
    queryFn: getRole,
    staleTime: 3600,
  });

  if (!data) redirect("/");

  return (
    <div className="w-full">
      <div className="flex flex-col p-8 gap-4">
        <p className="text-xl font-medium">علاقه مندی ها</p>
        <p className="text-[#606060] text-xl font-extralight">
          مواردی که لیست شده
        </p>
      </div>
      <div className="flex flex-col m-5 justify-center gap-5"></div>
      <Toaster />
    </div>
  );
}

export default MyList;
