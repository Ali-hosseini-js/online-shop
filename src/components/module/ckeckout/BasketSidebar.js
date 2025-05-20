import { sp, e2p } from "@/utils/replaceNumber";

function BasketSidebar({
  total,
  totalDiscount,
  location,
  totalQuantity,
  clickHandler,
  cargo,
}) {
  return (
    <div className="flex flex-col border border-opinion rounded-xl gap-8 p-4 w-[400px]">
      <div className="flex items-center justify-between">
        <p className="text-[#62666D]">
          قیمت کالا ها
          <span className="text-main">({e2p(totalQuantity)})</span>
        </p>
        <p className="text-[#62666D]">
          {sp(total)} <span className="text-xs">تومان</span>
        </p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-[#ED2E2E]">سود شما از خرید</p>
        <p>
          {sp(total - totalDiscount)} <span className="text-xs">تومان</span>
        </p>
      </div>
      <div className="flex items-center justify-between">
        <p>جمع سبد خرید</p>
        <p className="">
          {sp(totalDiscount)} <span className="text-xs">تومان</span>
        </p>
      </div>
      {location ? (
        <>
          <div className="flex items-center justify-between">
            <p>هزینه ارسال</p>
            <p>
              {sp(cargo)} <span className="text-xs">تومان</span>
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p>مبلغ قابل پرداخت</p>
            <p className="">
              {sp(totalDiscount + cargo)} <span className="text-xs">تومان</span>
            </p>
          </div>
        </>
      ) : null}
      <button
        onClick={clickHandler}
        className="text-white bg-main rounded-xl w-[270px] h-[55px] mx-auto"
      >
        تایید و تکمیل سفارش
      </button>
      <p className="text-[#62666D] text-justify">
        هزینه این سفارش هنوز پرداخت نشده و در صورت اتمام موجودی کالاها از سبد
        خرید حذف میشنود.
      </p>
    </div>
  );
}

export default BasketSidebar;
