"use client";

import { getRole } from "@/services/CachedApi";
import { QueryKeys } from "@/utils/QueryKey";
import { useQuery } from "@tanstack/react-query";
import { redirect } from "next/navigation";

function Admin() {
  const { data } = useQuery({
    queryKey: [QueryKeys.ROLE],
    queryFn: getRole,
    staleTime: 3600,
  });

  if (!data || data.role !== "admin") {
    redirect("/");
  }

  return (
    <div className="w-full">
      <p className="text-main text-4xl text-center">به پنل ادمین خوش آمدید.</p>
    </div>
  );
}

export default Admin;
