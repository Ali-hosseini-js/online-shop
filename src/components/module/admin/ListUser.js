"use client";

import UserCard from "./UserCard";
import { getCachedUsers } from "@/services/user/CachedUsers";
import { useQuery } from "@tanstack/react-query";

function ListUser() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: getCachedUsers,
    staleTime: 3600,
  });

  return (
    <div className="flex flex-col gap-5">
      {data?.users.map((user) => (
        <UserCard
          key={user._id}
          firstName={user.firstName}
          lastName={user.lastName}
          role={user.role}
          mobile={user.mobile}
          id={user._id}
        />
      ))}
    </div>
  );
}

export default ListUser;
