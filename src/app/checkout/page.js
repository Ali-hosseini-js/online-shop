"use client";

import BasketCard from "@/module/ckeckout/BasketCard";
import BasketSidebar from "@/module/ckeckout/BasketSidebar";
import { UserCart } from "@/services/cart/UserCart";
import { UserCartId } from "@/services/cart/UserCartId";
import { QueryKeys } from "@/utils/QueryKey";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

function Checkout() {
  const router = useRouter();

  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKeys.USERCART],
    queryFn: UserCart,
  });

  const { data: cartData } = useQuery({
    queryKey: [QueryKeys.CARTID],
    queryFn: UserCartId,
  });

  const navHandler = () => {
    router.push("/checkout/location");
  };

  if (!data?.items) {
    return (
      <div className="flex items-center justify-center bg-main rounded-xl w-fit h-11 px-4 mx-auto mt-5">
        <p className="text-white">محصولی در سبد خرید وجود ندارد.</p>
      </div>
    );
  }

  return (
    <div className="flex justify-between items-start py-[10px] min-h-[1000px]">
      <div className="">
        {data.items.map((p) => (
          <BasketCard
            key={p._id}
            data={p.product}
            quantity={p.quantity}
            id={p._id}
            cartId={cartData.id}
          />
        ))}
      </div>
      <BasketSidebar
        total={data.prices.totalWithoutDiscount}
        totalDiscount={data.prices.totalWithDiscount}
        totalQuantity={data.totalQuantity}
        clickHandler={navHandler}
      />
    </div>
  );
}

export default Checkout;
