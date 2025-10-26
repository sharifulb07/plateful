"use client";
import "@/app/globals.css"

import Image from "next/image";
import { StaticImageData } from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Category1 from "@/public/category/1.jpg";
import Category2 from "@/public/category/2.jpg";
import Category3 from "@/public/category/3.jpg";
import Category4 from "@/public/category/4.jpg";
import Category5 from "@/public/category/5.jpg";
import Category6 from "@/public/category/6.jpg";
import Category7 from "@/public/category/7.jpg";
import Category8 from "@/public/category/8.jpg";
import Category9 from "@/public/category/9.jpg";
import Category10 from "@/public/category/10.jpg";

type CategoryType = {
  image: StaticImageData;
  title: string;
  products: string;
};

const catgories: CategoryType[] = [
  { image: Category1, title: "Vegetables", products: "12+products" },
  { image: Category2, title: "Fish & Meats", products: "10+products" },
  { image: Category3, title: "Desserts", products: "80+products" },
  { image: Category4, title: "Drinks & Juice", products: "70+products" },
  { image: Category5, title: "Animals Food", products: "15+products" },
  { image: Category6, title: "Fresh Fruits", products: "40+products" },
  { image: Category7, title: "Yummy Candy", products: "60+products" },
  { image: Category8, title: "Dairy & Eggs", products: "25+products" },
  { image: Category9, title: "Snacks", products: "19+products" },
  { image: Category10, title: "Frozen Foods", products: "18+products" },
];


export default function Category() {
  return (
    <div className="px-[8%] lg:px-[12%] py-10">
      <Swiper
        slidesPerView={8}
        spaceBetween={20}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1500,
        }}
        breakpoints={{
          1200: { slidesPerView: 8 },
          991: { slidesPerView: 5 },
          767: { slidesPerView: 4 },
          575: { slidesPerView: 3 },
          0: { slidesPerView: 3 },
        }}
      >
        {catgories.map((category, index) => (
          <SwiperSlide key={index}>
            <div className="category-wrap cursor-pointer flex flex-col justify-center items-center">
              <div className="">
                <Image
                  src={category.image}
                  alt={category.title}
                  className="transition-all duration-300 category-image"

                />
              </div>

              <div className="category-info flex flex-col justify-center items-center">
                <h2 className="text-lg Unbounded hover:text-[var(--prim-color)] transition-all duration-300">{category.title}</h2>
                <p className="text-gray-500">{category.products}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
