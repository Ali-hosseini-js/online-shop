"use client";

import { getRole } from "@/services/CachedApi";
import { QueryKeys } from "@/utils/QueryKey";
import { useQuery } from "@tanstack/react-query";
import { redirect } from "next/navigation";

function CommentControl() {
  const { data } = useQuery({
    queryKey: [QueryKeys.ROLE],
    queryFn: getRole,
    staleTime: 3600,
  });

  if (!data || data.role !== "admin") {
    redirect("/");
  }

  return <div>CommentControl</div>;
}

export default CommentControl;
