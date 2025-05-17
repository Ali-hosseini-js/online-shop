"use client";

import { getAddress } from "@/services/address/AllAddress";
import { useQuery } from "@tanstack/react-query";
import AddressCard from "./AddressCard";

function AddressList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["address"],
    queryFn: getAddress,
    staleTime: 3600,
  });

  return (
    <div className="flex flex-col gap-5">
      {data?.addresses.map((user) => (
        <AddressCard key={user._id} content={user.content} id={user._id} />
      ))}
    </div>
  );
}

export default AddressList;
