"use client";

import BasketSidebar from "@/module/ckeckout/BasketSidebar";
import Loader from "@/module/Loader";
import { UserCart } from "@/services/cart/UserCart";
import { QueryKeys } from "@/utils/QueryKey";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "src/context/CartContext";

function Location() {
  const [state, dispatch] = useCart();
  const router = useRouter();
  const [address, setAddress] = useState(null);
  const [ship, setShip] = useState(null);
  const [selectedShipping, setSelectedShipping] = useState(0);

  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKeys.USERCART],
    queryFn: UserCart,
  });

  useEffect(() => {
    const getAddress = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/panel/address/byUser`,
        {
          credentials: "include",
        }
      );
      const data = await res.json();
      setAddress(data);
    };

    const getShipping = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/site/shipping`,
        {
          credentials: "include",
        }
      );
      const data = await res.json();
      console.log("ship:", data);
      setShip(data);
    };

    getShipping();
    getAddress();
  }, []);

  const navHandler = () => {
    router.push("/checkout/payment");
    dispatch({
      type: "SET_SHIPPING",
      payload: selectedShipping,
    });
  };

  return (
    <div className="flex justify-between items-start py-[10px] min-h-[1000px]">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col border-2 border-dashed border-[#e2e2e2] rounded-[20px] p-5 mb-5 w-[800px] gap-2">
          <p className="text-xl pb-4">انتخاب آدرس</p>
          {address?.addresses.map((address) => (
            <div key={address._id} className="flex gap-2 items-center">
              <input type="radio" name="loaction" />
              <p>{address.content}</p>
            </div>
          ))}
          <Link className="button" href="/dashboard/address">
            ثبت آدرس جدید
          </Link>
        </div>
        <div className="flex flex-col border-2 border-dashed border-[#e2e2e2] rounded-[20px] p-5 mb-5 w-[800px] gap-2">
          <p className="text-xl pb-4">انتخاب نحوه ارسال</p>
          {ship?.shippings.map((ship) => (
            <div key={ship._id} className="flex gap-2 items-center">
              <input
                type="radio"
                name="ship"
                onChange={() => setSelectedShipping(ship.price)}
              />
              <div className="flex gap-10">
                <p>{ship.title}</p>
                <p>{ship.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isLoading ? (
        <div className="flex items-center justify-center w-[400px]">
          <Loader />
        </div>
      ) : (
        <BasketSidebar
          total={data.prices.totalWithoutDiscount}
          totalDiscount={data.prices.totalWithDiscount}
          totalQuantity={data.totalQuantity}
          location={true}
          clickHandler={navHandler}
          cargo={selectedShipping}
        />
      )}
    </div>
  );
}

export default Location;
