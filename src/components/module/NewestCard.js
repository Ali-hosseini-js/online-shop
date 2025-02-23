import Image from "next/image";
import Link from "next/link";
import { e2p, sp } from "@/utils/replaceNumber";
import medal from "@/public/medal-star.svg";
import { CiHeart } from "react-icons/ci";

function NewestCard({ href, image, alt, description, price, opinion, point }) {
  return (
    <Link
      href={href}
      className="flex flex-col gap-4 justify-center items-center h-[330px] w-[240px] rounded-lg p-4 bg-card"
    >
      <div className="flex justify-start w-full">
        <CiHeart />
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
      <div className="flex flex-col items-end w-full mt-5 gap-5">
        <div>
          <p className="flex text-point text-[12px] font-600 gap-1">
            <span className="text-opinion">({e2p(opinion)}نظر)</span>
            {e2p(point)}
            <Image alt="point" src={medal} width={12} height={12} />
          </p>
        </div>
        <p className="bg-main text-white text-[16px] font-semibold  rounded-lg  px-2 py-1 w-fit">
          {sp(price)} <span className="text-[12px]">تومان</span>
        </p>
      </div>
    </Link>
  );
}

export default NewestCard;
