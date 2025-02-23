import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { brands } from "@/data/brands";
import Image from "next/image";

function Brands() {
  return (
    <div>
      <div className="flex justify-between items-center gap-5 px-5 max-md:flex-col border-b-2 border-main">
        <p className="text-main text-[32px] font-semibold text-nowrap">
          محبوب ترین برندها
        </p>
        <Link
          href="/brands"
          className="flex items-center justify-center text-main gap-3 text-nowrap"
        >
          مشاهده همه
          <IoIosArrowBack />
        </Link>
      </div>
      <div className="flex max-lg:flex-col max-lg:gap-8 items-center justify-between w-full my-10">
        {brands.map((brand, index) => (
          <Link href={brand.href} key={index}>
            <Image
              className="w-auto h-auto"
              alt={brand.alt}
              src={brand.image}
              width={150}
              height={70}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Brands;
