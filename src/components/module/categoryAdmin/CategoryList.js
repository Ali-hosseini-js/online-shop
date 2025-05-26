"use client";

import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/services/category/AllCategoryApi";
import CategoryCard from "./CategoryCard";
import { QueryKeys } from "@/utils/QueryKey";

function CategoryList() {
  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKeys.ADMIN_CATEGORY],
    queryFn: getCategories,
    staleTime: 3600,
  });

  return (
    <div className="flex flex-col gap-5">
      {data?.productCategories.map((category) => (
        <CategoryCard
          key={category._id}
          title={category.title}
          content={category.content}
          image={category.image}
          url={category.url}
          id={category._id}
        />
      ))}
    </div>
  );
}

export default CategoryList;
