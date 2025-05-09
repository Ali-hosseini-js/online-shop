"use client";

import BasketSidebar from "@/module/ckeckout/BasketSidebar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "src/context/CartContext";

function Payment() {
  const [state, dispatch] = useCart();
  const router = useRouter();

  const navHandler = (type, payload) => {
    router.push("/checkout/send");
    dispatch({ type, payload });
  };

  return (
    <div className="flex justify-between items-start py-[10px] min-h-[1000px]">
      <div className="flex flex-col border-2 border-dashed border-[#e2e2e2] rounded-[20px] p-5 mb-5 w-[800px] gap-2">
        <p className="text-xl pb-4">شیوه پرداخت</p>
        <div class="flex flex-col gap-3">
          <div className="flex relative gap-2 items-center">
            <input type="radio" name="payment" />
            <div className="bg-main size-10 flex items-center justify-center rounded-lg">
              <Image alt="" src="/payment/pay-1-1.svg" width={24} height={24} />
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
              <Image alt="" src="/payment/pay-2-2.svg" width={24} height={24} />
            </div>
            <div>
              <p>پرداخت اقساطی اسنپ پی</p>
              <p className="text-[#868686] text-[12px]">۴ قسط ماهیانه</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <input type="radio" name="payment" />
            <div className="bg-main size-10 flex items-center justify-center rounded-lg">
              <Image alt="" src="/payment/pay-3-3.svg" width={24} height={24} />
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
      <BasketSidebar state={state} clickHandler={navHandler} location={true} />
    </div>
  );
}

export default Payment;
