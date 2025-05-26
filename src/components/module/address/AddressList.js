"use client";

import { getAddress } from "@/services/address/AllAddress";
import { useQuery } from "@tanstack/react-query";
import AddressCard from "./AddressCard";
import { QueryKeys } from "@/utils/QueryKey";

function AddressList() {
  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKeys.User_ADDRESS],
    queryFn: getAddress,
    staleTime: 3600,
  });

  return (
    <div className="flex flex-col gap-5">
      {data?.addresses?.length > 0 ? (
        data?.addresses.map((user) => (
          <AddressCard key={user._id} content={user.content} id={user._id} />
        ))
      ) : (
        <p className="w-full items-center justify-center text-2xl text-center">
          آدرسی وجود ندارد
        </p>
      )}
    </div>
  );
}

export default AddressList;
