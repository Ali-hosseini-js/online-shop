import Image from "next/image";
import Link from "next/link";
import { e2p, sp } from "@/utils/replaceNumber";
import { TbShoppingBagCheck } from "react-icons/tb";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QueryKeys } from "@/utils/QueryKey";

function OfferCard({ data }) {
  const { _id, images, thumbnail, content, title, price, discount } = data;

  const queryClient = useQueryClient();

  const { mutate: addToCart } = useMutation({
    mutationFn: (productId) =>
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cart`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product: productId }),
      }).then((res) => res.json()),
    onSuccess: (data) => {
      if (data.cart._id) {
        queryClient.refetchQueries([QueryKeys.USERCART]);
      }
      toast.success("محصول به سبد خرید اضافه گردید");
    },
    onError: () => {
      toast.error("خطا در اضافه کردن محصول به سبد خرید");
    },
  });

  const DiscountPrice = price - (price * discount) / 100;

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-[330px] w-[220px] rounded-lg p-4 bg-white">
      <div className="flex justify-end w-full">
        <p className="text-white bg-red-600 rounded-xl text-[10px]  px-2 py-1">
          % {e2p(discount)}
        </p>
      </div>
      <Link
        href={_id}
        className="flex flex-col gap-4 justify-center items-center w-full"
      >
        <Image
          className="w-full h-[130px]"
          alt={thumbnail}
          src={`${process.env.NEXT_PUBLIC_BASE_URL}/files/main/${images[0]}`}
          width={400}
          height={400}
        />
        <p className="text-[12px] w-full max-h-[20px] text-center font-medium  whitespace-nowrap overflow-hidden text-ellipsis">
          {title}
        </p>
      </Link>

      <div className="flex flex-col items-end w-full mt-5">
        <p className="text-gray-600 line-through text-[12px] font-semibold rounded-xl  px-2 py-1 w-fit">
          {sp(price)}
        </p>
        <div className="flex justify-between w-full">
          <button
            onClick={() => addToCart(_id)}
            className="flex items-center justify-center bg-main text-white border-none text-3xl h-8 w-8 p-1 rounded-lg cursor-pointer"
          >
            <TbShoppingBagCheck />
          </button>
          <p className="bg-main text-white text-[16px] font-semibold  rounded-lg  px-2 py-1 w-fit">
            {sp(DiscountPrice)} <span className="text-[12px]">تومان</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default OfferCard;
