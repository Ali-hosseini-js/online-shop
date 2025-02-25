"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { suggestions } from "@/data/suggestion";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import NewestCard from "@/module/NewestCard";

function Suggestions() {
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
          {suggestions.map((suggestion, index) => (
            <SwiperSlide key={index}>
              <NewestCard
                href={suggestion.href}
                image={suggestion.image}
                alt={suggestion.alt}
                description={suggestion.description}
                price={suggestion.price}
                opinion={suggestion.opinion}
                point={suggestion.point}
              />
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
