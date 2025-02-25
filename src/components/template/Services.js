import { services } from "@/data/services";
import Image from "next/image";

function Services() {
  return (
    <div className="flex flex-wrap max-lg:flex-col max-lg:gap-8 items-center justify-between ">
      {services.map((service, index) => (
        <div key={index} className="flex  items-center justify-center gap-5">
          <p className="text-[24px] font-semibold text-[#606060]">
            {service.title}
          </p>
          <Image
            alt={service.title}
            src={service.image}
            width={75}
            height={75}
            className="w-auto h-auto"
          />
        </div>
      ))}
    </div>
  );
}

export default Services;
