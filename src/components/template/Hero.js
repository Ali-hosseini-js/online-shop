import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="grid grid-flow-col grid-rows-2 gap-4 mt-10">
      <Link href="/category/rapoo" className="row-span-2 col-span-3">
        <Image
          alt="خرید محصولات رپو"
          src="tekno-hero.svg"
          width={1350}
          height={700}
        />
      </Link>
      <Link href="/custom" className="row-span-1 col-span-1">
        <Image
          alt="ساخت سیستم کاستوم"
          src="system-hero.svg"
          width={300}
          height={200}
        />
      </Link>
      <Link href="http://instagram.com" className="row-span-1 col-span-1">
        <Image
          alt="اینستاگرام تکنو شاپ"
          src="insta-hero.svg"
          width={300}
          height={200}
        />
      </Link>
    </div>
  );
}

export default Hero;
