import Image from "next/image";
import { MdDeleteOutline } from "react-icons/md";
import BasketCartFeature from "../‌BasketCartFeature";
import { sp } from "@/utils/replaceNumber";

function BascketCard({ data, clickHandler }) {
  const { _id, images, thumbnail, content, title, price, discount, quantity } =
    data;

  const discountPrice = price - (price * discount) / 100;

  return (
    <div className="flex items-center justify-start border-2 border-dashed border-[#e2e2e2] rounded-[20px] p-5 mb-5 w-[800px]">
      <Image
        alt={thumbnail}
        src={`http://localhost:3100/files/main/${images[0]}`}
        width={210}
        height={225}
        className="w-[210px] h-[130px]"
      />
      <div className="flex flex-col gap-5 w-full">
        <p className="text-[23px]">{title}</p>
        <BasketCartFeature />
        <div className="flex items-center justify-between w-full">
          {price !== discountPrice ? (
            <div className="flex gap-28">
              <p className="text-[#ED2E2E] line-through text-base">
                {sp(price)}
              </p>
              <p className="text-xl">{sp(discountPrice)} تومان</p>
            </div>
          ) : (
            <div>
              <p className="text-xl">{sp(price)} تومان</p>
            </div>
          )}
          <div className="flex items-center">
            {quantity === 1 && (
              <button
                onClick={() => clickHandler("REMOVE_ITEM", data)}
                className="flex items-center justify-center bg-main text-white border-none text-3xl h-8 w-8 p-1 rounded-lg cursor-pointer"
              >
                <MdDeleteOutline />
              </button>
            )}
            {quantity > 1 && (
              <button
                onClick={() => clickHandler("DECREASE", data)}
                className="flex items-center justify-center bg-main text-white border-none text-3xl h-8 w-8 p-1 rounded-lg cursor-pointer"
              >
                -
              </button>
            )}
            <span className="w-5 text-center my-1">{quantity}</span>
            <button
              onClick={() => clickHandler("INCREASE", data)}
              className="flex items-center justify-center bg-main text-white border-none text-3xl h-8 w-8 p-1 rounded-lg cursor-pointer"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BascketCard;
