"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import UserCard from "./UserCard";
import { getCachedUsers } from "@/services/CachedUsers";
import { useQuery } from "@tanstack/react-query";

function ListUser() {
  const [id, setId] = useState(null);
  const [user, setUser] = useState([]);
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
