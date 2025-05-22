"use client";

import { getRole } from "@/services/CachedApi";
import { QueryKeys } from "@/utils/QueryKey";
import { useQuery } from "@tanstack/react-query";
import { redirect } from "next/navigation";

function AdminTicket() {
  const { data } = useQuery({
    queryKey: [QueryKeys.ROLE],
    queryFn: getRole,
    staleTime: 3600,
  });

  if (!data || data.role !== "admin") {
    redirect("/");
  }

  return <div>AdminTicket</div>;
}

export default AdminTicket;
