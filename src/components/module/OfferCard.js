import Image from "next/image";
import Link from "next/link";
import { e2p, sp } from "@/utils/replaceNumber";

function OfferCard({
  href,
  image,
  alt,
  description,
  price,
  discountPrice,
  discount,
}) {
  return (
    <Link
      href={href}
      className="flex flex-col gap-4 justify-center items-center h-[330px] w-[220px] rounded-lg p-4 bg-white"
    >
      <div className="flex justify-end w-full">
        <p className="text-white bg-red-600 rounded-xl text-[10px]  px-2 py-1">
          % {e2p(discount)}
        </p>
      </div>
      <Image
        className="w-full h-[130px]"
        alt={alt}
        src={image}
        width={400}
        height={400}
      />
      <div className="flex w-full">
        <p className="text-[12px]  max-h-[20px] text-center font-medium  whitespace-nowrap overflow-hidden text-ellipsis">
          {description}
        </p>
      </div>
      <div className="flex flex-col items-end w-full mt-5">
        <p className="text-gray-600 line-through text-[12px] font-semibold rounded-xl  px-2 py-1 w-fit">
          {sp(price)}
        </p>
        <p className="bg-main text-white text-[16px] font-semibold  rounded-lg  px-2 py-1 w-fit">
          {sp(discountPrice)} <span className="text-[12px]">تومان</span>
        </p>
      </div>
    </Link>
  );
}

export default OfferCard;
