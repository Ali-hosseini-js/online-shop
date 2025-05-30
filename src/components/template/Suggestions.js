"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import NewestCard from "@/module/NewestCard";
import { useQuery } from "@tanstack/react-query";
import { NewProducts } from "@/services/NewProduct";
import { QueryKeys } from "@/utils/QueryKey";

function Suggestions() {
  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKeys.PRODUCT_NODISCOUNT],
    queryFn: NewProducts,
    staleTime: 3600,
  });

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center gap-5 px-5 max-md:flex-col">
        <p className="text-main text-[32px] font-semibold text-nowrap">
          پیشنهادات
        </p>
        <Link
          href="/suggestions"
          className="flex items-center justify-center text-main gap-3 text-nowrap"
        >
          مشاهده همه
          <IoIosArrowBack />
        </Link>
      </div>
      <div>
        <Swiper
          className="[&_.swiper-scrollbar]:hidden"
          modules={[Navigation, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 10 },
            1024: { slidesPerView: 3, spaceBetween: 10 },
            1280: { slidesPerView: 5, spaceBetween: 10 },
          }}
        >
          {data?.products.map((suggestion) => (
            <SwiperSlide key={suggestion._id}>
              <NewestCard data={suggestion} />
            </SwiperSlide>
          ))}
          <div className="swiper-button-next hidden md:flex"></div>
          <div className="swiper-button-prev hidden md:flex"></div>
        </Swiper>
      </div>
    </div>
  );
}

export default Suggestions;
