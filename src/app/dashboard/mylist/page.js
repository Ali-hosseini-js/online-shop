"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

function MyList() {
  const { data } = useSession();

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
