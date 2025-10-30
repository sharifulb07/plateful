import Link from "next/link";
import React, { useMemo, useState } from "react";

// All json data 
import BestDeals from "@/app/JsonData/BestDeals.json";
interface ProductType{
  Id:string;
  title?:string;
  Name?:string;
  ProductImage?:string;
  image?:string;
  price?:string;
  Price?:string;
}



export default function MiddleNav() {
const [cartCount, setCartCount]=useState(0);
const [wishList, setWishiList]=useState(0);

// Search Stats
const [searchTerm, setSearchTerm]=useState("")
const [results, setResults]=useState<ProductType[]>([]);


const allProducts:ProductType[]=useMemo(()=>[...BestDeals], [])

  return (
    <div className="w-full bg-[var(--prim-light)] border-b border-gray-300 relative">
      <div className="flex items-center justify-between py-5 px-[8%] lg:px-[12%] ">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold Merienda text-black">
          Plate<span className="text-[var(--prim-color)]">Ful</span>
        </Link>

        {/* search */}
        <div className="flex flex-1 ms-0 lg:mx-0 max-w-xl relative">
          <input
            type="text"
            placeholder="Search for a brand or product"
            className="flex-1 border px-3 py-2 rounded-s-lg outline-none border-gray-400"
          />
          <button className="bg-[var(--prim-color)] text-white px-3 cursor-pointer rounded-r ">
            <i className="bi bi-search"></i>
          </button>

          {/* location dropdown  */}

          <div className="hidden lg:flex text-sm ms-5 bg-white  items-center ps-4 rounded-2xl border border-gray-400">
            <i className="bi bi-geo-alt text-lg text-[var(--prim-color)] "></i>
            <select
              name="location"
              id="location"
              className="px-3 rounded-lg font-semibold text-[var(--prim-color)] focus:border-[var(--prim-color)] appearance-none outline-none cursor-pointer"
              defaultValue="New York"
            >
              <option value="dhaka">Dhaka </option>
              <option value="khulna">Khulna </option>
              <option value="barisal">Barisal </option>
              <option value="rajshahi">Rajshahi </option>
              <option value="chattogram">Chattogram </option>
              <option value="rangpur">Rangpur</option>
              <option value="mymensing">Mymensing</option>
            </select>
          </div>
        </div>
        {/* Wishlist & Cart  */}
        <div className="hidden lg:flex items-center space-x-6 ">
          {/* Whishlist  */}
          <Link href={"#"} className="relative">
            <i className="bi bi-heart text-gray-600 hover:text-[var(--prim-color)] transition-all"></i>

            <span className="absolute -top-2 -right-2 bg-[var(--prim-color)] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              1
            </span>
          </Link>
          {/* cart */}
          <Link href={"#"} className="relative">
            <i className="bi bi-cart text-gray-600 hover:text-[var(--prim-color)] transition-all"></i>

            <span className="absolute -top-2 -right-2 bg-[var(--prim-color)] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              2
            </span>
          </Link>
        </div>
      </div>

    </div>
  );
}
