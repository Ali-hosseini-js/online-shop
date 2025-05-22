"use client";

import { getShipping } from "@/services/shipping/AllShipping";
import { useQuery } from "@tanstack/react-query";
import ShippingCard from "./ShippingCard";
import { QueryKeys } from "@/utils/QueryKey";

function ShippingList() {
  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKeys.ADMIN_SHIPPING],
    queryFn: getShipping,
    staleTime: 3600,
  });

  return (
    <div className="flex flex-col gap-5">
      {data?.shippings.map((shipping) => (
        <ShippingCard
          key={shipping._id}
          title={shipping.title}
          price={shipping.price}
          freeShippingThreshold={shipping.freeShippingThreshold}
          id={shipping._id}
        />
      ))}
    </div>
  );
}

export default ShippingList;
