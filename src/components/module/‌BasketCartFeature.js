import Image from "next/image";

function BasketCartFeature() {
  return (
    <div>
      <div className="flex gap-2">
        <Image alt="" src="/basketCart/basketTick.svg" width={18} height={18} />
        <p className="text-[#616161] text-[14px]">گارانتی سلامت کالا</p>
      </div>
      <div className="flex gap-2">
        <Image alt="" src="/basketCart/logo.svg" width={18} height={18} />
        <p className="text-[#616161] text-[14px]">تکنو شاپ</p>
      </div>
      <div className="flex gap-2">
        <Image
          alt=""
          src="/basketCart/basketDollar.svg"
          width={18}
          height={18}
        />
        <p className="text-[#616161] text-[14px]">ارسال رایگان</p>
      </div>
      <div className="flex gap-2">
        <Image alt="" src="/basketCart/basketCar.svg" width={18} height={18} />
        <p className="text-[#616161] text-[14px]">ارسال امروز</p>
      </div>
    </div>
  );
}

export default BasketCartFeature;
