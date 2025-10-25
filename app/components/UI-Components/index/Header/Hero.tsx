"use client";
import Image from "next/image";

import Hero1 from "@/public/hero-img1.jpg";
import Hero2 from "@/public/hero-img2.jpg";
import Hero3 from "@/public/hero-img3.jpg";
import Hero4 from "@/public/hero-img4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";

export default function Hero() {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <div className="px-[8%] lg:px-[12%] ">
      <div className="relative Hero flex items-center gap-5 p-10 px-20">
        <Swiper
          slidesPerView={1}
          loop={true}
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}

          
        >
          {/* slider one */}
          <SwiperSlide>
            <div className="hero-wrap w-full flex flex-col lg:flex-row items-center justify-between">
              <div className="w-full lg:w-1/1">
                <h1 className="Merienda text-2xl lg:text-[3.6rem] font-bold">
                  Daily Grocery Order and Get Express Delivery
                </h1>
                <p className="w-[80%] py-3">
                  Order your daily grocery online and express delivery straight
                  to your doorstep. Fresh produce, Essentials, and more-fast,
                  convenient and reliable service for your everyday needs.
                </p>
                <button className="px-5 py-3 rounded-full text-white font-bold mt-5 bg-[var(--prim-color)] hover:text-[var(--prim-color)] transition-all duration-300 cursor-pointer ">
                  Show Now
                  <i className="bi bi-cart3 ps-3"></i>
                </button>
              </div>
              <div className="hero-image w-full lg:w-1/2">
                <Image
                  src={Hero1}
                  alt="Hero image one "
                  className="Hero-image"
                />
              </div>
            </div>
          </SwiperSlide>
          {/* slider 2 */}
          <SwiperSlide>
            <div className="hero-wrap w-full flex flex-col lg:flex-row items-center justify-between">
              <div className="w-full lg:w-1/1">
                <h1 className="Merienda text-2xl lg:text-[3.6rem] font-bold">
                  Daily Grocery Order and Get Express Delivery
                </h1>
                <p className="w-[80%] py-3">
                  Order your daily grocery online and express delivery straight
                  to your doorstep. Fresh produce, Essentials, and more-fast,
                  convenient and reliable service for your everyday needs.
                </p>
                <button className="px-5 py-3 rounded-full text-white font-bold mt-5 bg-[var(--prim-color)] hover:text-[var(--prim-color)] transition-all duration-300 cursor-pointer ">
                  Show Now
                  <i className="bi bi-cart3 ps-3"></i>
                </button>
              </div>
              <div className="hero-image w-full lg:w-1/2">
                <Image
                  src={Hero2}
                  alt="Hero image two "
                  className="Hero-image"
                />
              </div>
            </div>
          </SwiperSlide>
          {/* slider 3 */}
          <SwiperSlide>
            <div className="hero-wrap w-full flex flex-col lg:flex-row items-center justify-between">
              <div className="w-full lg:w-1/1">
                <h1 className="Merienda text-2xl lg:text-[3.6rem] font-bold">
                  Daily Grocery Order and Get Express Delivery
                </h1>
                <p className="w-[80%] py-3">
                  Order your daily grocery online and express delivery straight
                  to your doorstep. Fresh produce, Essentials, and more-fast,
                  convenient and reliable service for your everyday needs.
                </p>
                <button className="px-5 py-3 rounded-full text-white font-bold mt-5 bg-[var(--prim-color)] hover:text-[var(--prim-color)] transition-all duration-300 cursor-pointer ">
                  Show Now
                  <i className="bi bi-cart3 ps-3"></i>
                </button>
              </div>
              <div className="hero-image w-full lg:w-1/2">
                <Image
                  src={Hero3}
                  alt="Hero image three "
                  className="Hero-image"
                />
              </div>
            </div>
          </SwiperSlide>
          {/* slider 4 */}
          <SwiperSlide>
            <div className="hero-wrap w-full flex flex-col lg:flex-row items-center justify-between">
              <div className="w-full lg:w-1/1">
                <h1 className="Merienda text-2xl lg:text-[3.6rem] font-bold">
                  Daily Grocery Order and Get Express Delivery
                </h1>
                <p className="w-[80%] py-3">
                  Order your daily grocery online and express delivery straight
                  to your doorstep. Fresh produce, Essentials, and more-fast,
                  convenient and reliable service for your everyday needs.
                </p>
                <button className="px-5 py-3 rounded-full text-white font-bold mt-5 bg-[var(--prim-color)] hover:text-[var(--prim-color)] transition-all duration-300 cursor-pointer ">
                  Show Now
                  <i className="bi bi-cart3 ps-3"></i>
                </button>
              </div>
              <div className="hero-image w-full lg:w-1/2">
                <Image
                  src={Hero4}
                  alt="Hero image four "
                  className="Hero-image"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div
          ref={prevRef}
          className="swiper-button-prev-custom rounded-full cursor-pointer absolute left-5 top-1/2 -translate-y-1/2 z-10 bg-white/80 px-3 py-2 shadow hover:bg-white"
        >
          <i className="ri-arrow-left-s-line text-2xl text-gray-800"></i>
        </div>
        <div
          ref={nextRef}
          className="swiper-button-next-custom rounded-full cursor-pointer absolute right-5 top-1/2 -translate-y-1/2 z-10 bg-white/80 px-3 py-2 shadow hover:bg-white"
        >
          <i className="ri-arrow-right-s-line text-2xl text-gray-800"></i>
        </div>
      </div>
    </div>
  );
}
