"use client";

import Image from "next/image";
import Link from "next/link";
import { getRole } from "@/services/CachedApi";
import { QueryKeys } from "@/utils/QueryKey";
import { useQuery } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import { useCart } from "src/context/CartContext";
import { shortenText } from "src/helper/helper";

function Order() {
  const [state, dispatch] = useCart();

  const { data } = useQuery({
    queryKey: [QueryKeys.ROLE],
    queryFn: getRole,
    staleTime: 3600,
  });

  if (!data) redirect("/");

  return (
    <div className="w-full">
      <div className="flex flex-col p-8 gap-4">
        <p className="text-xl font-medium">تاریخچه سفارشات</p>
      </div>
      <div className="flex flex-col m-5 justify-center gap-5">
        <p className="text-main text-xl border-b-[1px] border-opinion mb-5">
          جاری
        </p>
        {!state.itemsCounter ? (
          <p className="button">شما خرید در حال انجامی ندارید</p>
        ) : (
          <div className="flex items-center justify-between border border-black rounded-xl p-5">
            <div className="flex gap-3">
              {state.selectedItems.map((p) => (
                <div
                  className="flex flex-col items-center justify-center"
                  key={p.id}
                  data={p}
                >
                  <Image alt="" src={p.image} width={60} height={90} />
                  <p>{shortenText(p.description)}</p>
                </div>
              ))}
            </div>
            <Link className="button w-fit h-fit text-nowrap" href="/checkout">
              سبد خرید
            </Link>
          </div>
        )}
        <p className="text-main text-xl border-b-[1px] border-opinion mb-5">
          تحویل شده
        </p>
        <p className="button">تا حالا هیچ خریدی انجام نداده اید.</p>
        <p className="text-main text-xl border-b-[1px] border-opinion mb-5">
          مرجوع شده
        </p>
        <p className="button">
          هیچ خرید مرجوه شده ای در سابقه خرید شما وجود ندارد.
        </p>
        <p className="text-main text-xl border-b-[1px] border-opinion mb-5">
          لغو شده
        </p>
        <p className="button">تا حالا هیچ خریدی را لغو نکرده اید.</p>
      </div>
    </div>
  );
}

export default Order;
