"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { offer } from "@/data/offer";
import OfferCard from "@/module/OfferCard";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

function SpecialOffer() {
  return (
    <div className="bg-main p-5 rounded-lg">
      <Swiper
        className="[&_.swiper-scrollbar]:hidden"
        modules={[Navigation, A11y]}
        spaceBetween={0}
        slidesPerView={5}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          450: { slidesPerView: 1, spaceBetween: 20 },
          720: { slidesPerView: 2, spaceBetween: 20 },
          950: { slidesPerView: 3, spaceBetween: 20 },
          1180: { slidesPerView: 4, spaceBetween: 20 },
          1370: { slidesPerView: 5, spaceBetween: 20 },
        }}
      >
        <SwiperSlide>
          <div className="flex relative flex-col gap-4 justify-center items-center h-[330px] w-[220px] rounded-lg p-4 bg-main">
            <p className="text-white text-[31px] font-semibold text-center">
              تخفیف های شگفت انگیز
            </p>
            <p>timer</p>
            <div className="flex justify-start w-full absolute bottom-0 right-0">
              <Link
                href="/offer"
                className="flex items-center justify-center text-white gap-3"
              >
                مشاهده همه
                <IoIosArrowBack />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        {offer.map((offer, index) => (
          <SwiperSlide key={index}>
            <OfferCard
              href={offer.href}
              image={offer.image}
              alt={offer.alt}
              description={offer.description}
              price={offer.price}
              discountPrice={offer.discountPrice}
              discount={offer.discount}
            />
          </SwiperSlide>
        ))}
        <div className="swiper-button-next hidden md:flex"></div>
        <div className="swiper-button-prev hidden md:flex"></div>
      </Swiper>
    </div>
  );
}

export default SpecialOffer;
