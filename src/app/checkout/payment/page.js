"use client";

import BasketSidebar from "@/module/ckeckout/BasketSidebar";
import Loader from "@/module/Loader";
import { UserCart } from "@/services/cart/UserCart";
import { QueryKeys } from "@/utils/QueryKey";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "src/context/CartContext";

function Payment() {
  const [state, dispatch] = useCart();
  const router = useRouter();

  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKeys.USERCART],
    queryFn: UserCart,
  });

  const navHandler = (type, payload) => {
    router.push("/checkout/send");
    // dispatch({ type, payload });
  };

  return (
    <div className="flex justify-between items-start py-[10px] min-h-[1000px]">
      <div className="flex flex-col border-2 border-dashed border-[#e2e2e2] rounded-[20px] p-5 mb-5 w-[800px] gap-2">
        <p className="text-xl pb-4">شیوه پرداخت</p>
        <div className="flex flex-col gap-3">
          <div className="flex relative gap-2 items-center">
            <input type="radio" name="payment" />
            <div className="bg-main size-10 flex items-center justify-center rounded-lg">
              <Image
                className="w-6 h-6"
                alt=""
                src="/payment/pay-1-1.svg"
                width={24}
                height={24}
              />
            </div>
            <div>
              <p>پرداخت آنلاین</p>
              <p className="text-[#868686] text-[12px]">
                قابل پرداخت با تمامی کارت های عضو شتاب
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <input type="radio" name="payment" />
            <div className="bg-main size-10 flex items-center justify-center rounded-lg">
              <Image
                className="w-6 h-6"
                alt=""
                src="/payment/pay-2-2.svg"
                width={24}
                height={24}
              />
            </div>
            <div>
              <p>پرداخت اقساطی اسنپ پی</p>
              <p className="text-[#868686] text-[12px]">۴ قسط ماهیانه</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <input type="radio" name="payment" />
            <div className="bg-main size-10 flex items-center justify-center rounded-lg">
              <Image
                className="w-6 h-6"
                alt=""
                src="/payment/pay-3-3.svg"
                width={24}
                height={24}
              />
            </div>
            <div>
              <p>پرداخت در محل</p>
              <p className="text-[#868686] text-[12px]">
                پرداخت هزینه درب منزل
              </p>
            </div>
          </div>
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
          cargo={state.shipping}
        />
      )}
    </div>
  );
}

export default Payment;
