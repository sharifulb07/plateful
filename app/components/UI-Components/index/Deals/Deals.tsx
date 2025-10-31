"use client";
import "@/app/globals.css";

import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Deal1 from "@/public/deals/1.jpg";
import Deal2 from "@/public/deals/2.jpg";
import Deal3 from "@/public/deals/3.jpg";

type DealItem = {
  image: StaticImageData;
  title: string;
  description: string;
  className?: string;
};

const DealsData: DealItem[] = [
  {
    image: Deal1,
    title: "Fresh Vegetables",
    description: "Shop Fresh and greeny something",
  },
  {
    image: Deal2,
    title: "Daily Snacks",
    description:
      "Tasty daily snacks for everything. fresh,  fun and ready to much",
  },
  {
    image: Deal3,
    title: "Fresh Vegetables",
    description: "Shop Fresh healthy vegetable delivered daily now ",
  },
];

import products from "@/app/JsonData/BestDeals.json";

import toast from "react-hot-toast";

export default function Deals() {
  const handleAddToCart = (product: any) => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const existingProduct = cart.find((item: any) => item.id === product.id);

      if (existingProduct) {
        toast(`${product.title} is already in the cart`, {
          icon: "⚠️",
          style: {
            border: "1px solid #facc15",
            padding: "16px",
            color: "#333",
            background: "#fff9c4",
          },
        });
      } else {
        cart.push({ ...product, qty: 1 });
        localStorage.setItem("cart", JSON.stringify(cart));
        window.dispatchEvent(new Event("storageUpdate"));

        toast.success(`${product.title} added to cart!`);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  // add wishlist
  const handleAddToWishlist = (product: any) => {
    try {
      const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
      const existingProduct = wishlist.find((item: any) => item.id === product.id);

      if (existingProduct) {
        toast(`${product.title} is already in the wishlist`, {
          icon: "💔",
          style: {
            border: "1px solid #fb7185",
            padding: "16px",
            color: "#333",
            background: "#ffe4e6",
          },
        });
      } else {
        wishlist.push(product);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        window.dispatchEvent(new Event("storageUpdate"));
        toast.success(`${product.title} added to wishlist! 💖`);
      }
    } catch (error) {
      console.error("Error adding to wishlist:", error);
    }
  };

  return (
    <div className="px-[8%] lg:px-[12%] py-10">
      <div className="title my-10 w-full flex flex-col lg:flex-row items-center justify-between gap-5">
        <h1 className="text-5xl Unbounded">Todays Best Deals. </h1>
      </div>

      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1500,
        }}
        speed={1500}
        breakpoints={{
          1200: { slidesPerView: 2 },
          991: { slidesPerView: 2 },
          767: { slidesPerView: 2 },
          575: { slidesPerView: 1 },
          0: { slidesPerView: 2 },
        }}
      >
        {DealsData.map((deal, index) => (
          <SwiperSlide key={index}>
            <div
              className={`deals-wrap ${
                deal.className || ""
              } px-5 py-6 rounded-2xl flex flex-col lg:flex-row justify-between items-center `}
            >
              <div className="w-full lg:w-1/2 deal-image">
                <Image
                  src={deal.image}
                  alt={deal.title}
                  className="h-[200px]"
                />
              </div>

              <div className="w-full lg:w-1/2 deal-info ml-5">
                <h2 className="Merienda font-bold text- leading-11 whitespace-pre-line">
                  {deal.title}
                </h2>
                <p className="my-1 font-normal text-gray-800">
                  {deal.description}
                </p>
                <button className="px-5 py-3 rounded-full text-white font-bold mt-5 bg-[var(--prim-color)] hover:text-[var(--prim-color)] transition-all duration-300 cursor-pointer">
                  Shop Now
                  <i className="bi bi-cart3 ps-3"></i>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Best Products Deals */}

      <div className="my-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-wrap border border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-all hover:border-[var(--prim-color)] cursor-pointer duration-300"
            >
              <div className="relative flex justify-center items-center w-full h-36">
                <Image
                  src={product.image}
                  className="object-contain mt-10 p-3"
                  alt={product.title}
                  width={180}
                  height={180}
                />

                <div className="absolute top-0 right-0 w-full flex items-center justify-between mt-2">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="px-4 py-2 font-semibold text-[var(--prim-color)] bg-[var(--prim-light)] rounded-full text-md hover:bg-[var(--prim-color)] hover:text-white transition"
                  >
                    add <i className="bi bi-cart"></i>
                  </button>
                  <button
                  onClick={() => handleAddToWishlist(product)}
                  className="px-4 py-2 text-sm font-semibold text-[var(--prim-color)] bg-[var(--prim-light)] rounded-full hover:bg-pink-500 hover:text-white transition"
                >
                  <i className="bi bi-heart"></i>
                </button>
                </div>
              </div>

              <Link
                href={{
                  pathname: "/UI-Components/Shop",
                  query: { id: product.id },
                }}
              >
                <div className="space-x-1 mt-5 product-info">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 line-through text-sm">
                      {product.lessprice}
                    </span>
                    <span className="font-semibold text-xl">
                      {product.price}
                    </span>{" "}
                    <span className="text-gray-500 text-sm">/Qty</span>
                  </div>
                  <span className="flex items-center text-md text-yellow-500">
                    <i className="bi bi-star-fill me-1"></i> {product.review}
                  </span>
                  <h2 className="text-xl font-normal Unbounded my-2 hover:text-[var(--prime-color)] transition-all duration-300">{product.title}</h2>
                  <h6 className="text-lg text-gray-500 flex items-center gap-1">
                <i className="bi bi-shop text-[var(--prim-color)]"></i> By Lucky Supermarket   
                  </h6>
                  <h3 className="mt-2 Unbounded text-md text-gray-400 ">Sold: {product.sold}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
