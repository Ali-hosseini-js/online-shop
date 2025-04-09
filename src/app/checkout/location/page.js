"use client";

import BasketSidebar from "@/module/ckeckout/BasketSidebar";
import { useRouter } from "next/navigation";
import { useCart } from "src/context/CartContext";

function Location() {
  const [state, dispatch] = useCart();
  const router = useRouter();

  const navHandler = () => {
    router.push("/checkout/payment");
  };

  return (
    <div className="flex justify-between items-start py-[10px] min-h-[1000px]">
      <div className="flex flex-col border-2 border-dashed border-[#e2e2e2] rounded-[20px] p-5 mb-5 w-[800px] gap-2">
        <p className="text-xl pb-4">انتخاب آدرس</p>
        <p className="text-opinion">آدرس:</p>
        <p className="text-opinion">نام گیرنده:</p>
        <p className="text-opinion">شماره تماس:</p>
        <p className="text-opinion">کد پستی:</p>
      </div>
      <BasketSidebar state={state} clickHandler={navHandler} location={true} />
    </div>
  );
}

export default Location;
