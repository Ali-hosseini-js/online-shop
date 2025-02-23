import Image from "next/image";
import Link from "next/link";

function SpecificHero() {
  return (
    <div className="grid grid-flow-col grid-rows-2 gap-6">
      <Link href="/iphone" className="row-span-2 col-span-3">
        <Image
          className="h-full w-full"
          alt="خرید محصولات آیفون"
          src="iphoneHero.svg"
          width={1350}
          height={1100}
        />
      </Link>
      <Link href="/laptop" className="row-span-2 col-span-2">
        <Image
          className="h-full w-full"
          alt="خرید لپتاپ"
          src="laptopHero.svg"
          width={400}
          height={700}
        />
      </Link>
    </div>
  );
}

export default SpecificHero;
