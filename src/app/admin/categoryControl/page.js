"use client";

import CategoryForm from "@/module/categoryAdmin/CategoryForm";
import CategoryList from "@/module/categoryAdmin/CategoryList";
import { Toaster } from "react-hot-toast";
import { getRole } from "@/services/CachedApi";
import { QueryKeys } from "@/utils/QueryKey";
import { useQuery } from "@tanstack/react-query";
import { redirect } from "next/navigation";

function CategoryControl() {
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
      <div className="flex flex-col m-5 justify-center gap-5">
        <p className="text-main text-xl border-b-[1px] border-opinion mb-5">
          ساخت دسته بندی
        </p>
        <CategoryForm />
        <p className="text-main text-xl border-b-[1px] border-opinion mb-5">
          لیست دسته بندی ها
        </p>
        <CategoryList />
      </div>
      <Toaster />
    </div>
  );
}

export default CategoryControl;
