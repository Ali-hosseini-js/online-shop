"use client";

import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/services/product/AllProduct";
import ProductCard from "./ProductCard";
import { QueryKeys } from "@/utils/QueryKey";

function ProductList() {
  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKeys.ADMIN_PRODUCT],
    queryFn: getProducts,
    staleTime: 3600,
  });

  console.log(data);

  return (
    <div className="flex flex-col gap-5">
      {data?.products.map((product) => (
        <ProductCard
          key={product._id}
          title={product.title}
          price={product.price}
          discount={product.discount}
          stock={product.stock}
          id={product._id}
        />
      ))}
    </div>
  );
}

export default ProductList;
