import Image from "next/image";
import Link from "next/link";
import { e2p, sp } from "@/utils/replaceNumber";
import medal from "@/public/medal-star.svg";
import { CiHeart } from "react-icons/ci";
import { TbShoppingBagCheck } from "react-icons/tb";
import toast from "react-hot-toast";
import { useCart } from "src/context/CartContext";

function NewestCard({ data }) {
  const { href, image, alt, description, price, opinion, point } = data;

  const [state, dispatch] = useCart();

  const clickHandler = (type) => {
    dispatch({ type, payload: data });
    toast.success("محصول به سبد خرید اضافه گردید");
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-[330px] w-[240px] rounded-lg p-4 bg-card">
      <div className="flex justify-start w-full">
        <CiHeart />
      </div>
      <Link
        href={href}
        className="flex flex-col gap-4 justify-center items-center w-full"
      >
        <Image
          className="w-full h-[130px]"
          alt={alt}
          src={image}
          width={400}
          height={400}
        />
        <p className="text-[12px] w-full  max-h-[20px] text-center font-medium  whitespace-nowrap overflow-hidden text-ellipsis">
          {description}
        </p>
      </Link>
      <div className="flex flex-col items-end w-full mt-5 gap-5">
        <div>
          <p className="flex text-point text-[12px] font-600 gap-1">
            <span className="text-opinion">({e2p(opinion)}نظر)</span>
            {e2p(point)}
            <Image alt="point" src={medal} width={12} height={12} />
          </p>
        </div>
        <div className="flex justify-between w-full">
          <button
            onClick={() => clickHandler("ADD_ITEM")}
            className="flex items-center justify-center bg-main text-white border-none text-3xl h-8 w-8 p-1 rounded-lg cursor-pointer"
          >
            <TbShoppingBagCheck />
          </button>
          <p className="bg-main text-white text-[16px] font-semibold  rounded-lg  px-2 py-1 w-fit">
            {sp(price)} <span className="text-[12px]">تومان</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewestCard;
