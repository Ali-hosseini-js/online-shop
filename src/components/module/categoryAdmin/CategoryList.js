"use client";

import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/services/category/AllCategoryApi";
import CategoryCard from "./CategoryCard";

function CategoryList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    staleTime: 3600,
  });

  console.log(data);

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
