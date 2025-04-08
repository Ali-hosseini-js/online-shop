"use client";

import BasketCard from "@/module/ckeckout/BasketCard";
import BasketSidebar from "@/module/ckeckout/BasketSidebar";
import { useCart } from "src/context/CartContext";

function Checkout() {
  const [state, dispatch] = useCart();

  const clickHandler = (type, payload) => dispatch({ type, payload });

  if (!state.itemsCounter) {
    return (
      <div className="flex items-center justify-center bg-main rounded-xl w-fit h-11 px-4 mx-auto mt-5">
        <p className="text-white">محصولی در سبد خرید وجود ندارد.</p>
      </div>
    );
  }

  return (
    <div className="flex justify-between items-start py-[10px] min-h-[1000px]">
      <div className="w-full">
        {state.selectedItems.map((p) => (
          <BasketCard key={p.id} data={p} clickHandler={clickHandler} />
        ))}
      </div>
      <BasketSidebar state={state} clickHandler={clickHandler} />
    </div>
  );
}

export default Checkout;
