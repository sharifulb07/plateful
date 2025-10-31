"use client";

import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";

// All JSON data
import BestDeals from "@/app/JsonData/BestDeals.json";

interface ProductType {
  id: string;
  title?: string;
  Name?: string;
  ProductImage?: string;
  image?: string;
  price?: string;
  Price?: string;
}

export default function MiddleNav() {
  
  const [cartCount, setCartCount] = useState(0);
  const [wishList, setWishList] = useState(0);

  // Search States
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<ProductType[]>([]);

  const allProducts: ProductType[] = useMemo(() => [...BestDeals], []);

  // 🔍 Search filter logic
  useEffect(() => {
    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }

    const filtered = allProducts.filter((p) =>
      (p.Name || p.title || "").toLowerCase().includes(searchTerm.toLowerCase())
    );

    setResults(filtered);
  }, [searchTerm, allProducts]);

  // 🛒 Load Cart & Wishlist counts safely
  useEffect(() => {
    const loadCounts = () => {
      try {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        console.log(cart);
        const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
        console.log(wishlist);

        const uniqueCart = new Set(cart.map((item: any) => item.id));
        const uniqueWishlist = new Set(wishlist.map((item: any) => item.id));

        setCartCount(uniqueCart.size);
        setWishList(uniqueWishlist.size);
      } catch (err) {
        console.error("Error loading from localStorage:", err);
      }
    };

    // Run once initially
    loadCounts();

    // Listen for updates triggered elsewhere in app
    window.addEventListener("storageUpdate", loadCounts);

    return () => window.removeEventListener("storageUpdate", loadCounts);
  }, []);

  return (
    <div className="w-full bg-[var(--prim-light)] border-b border-gray-300 relative">
      <div className="flex items-center justify-between py-5 px-[8%] lg:px-[12%]">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold Merienda text-black">
          Plate<span className="text-[var(--prim-color)]">Ful</span>
        </Link>

        {/* Search Section */}
        <div className="flex flex-1 ms-0 lg:mx-0 max-w-xl relative">
          <input
            type="text"
            placeholder="Search for a brand or product"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 border px-3 py-2 rounded-s-lg outline-none border-gray-400"
          />
          <button className="bg-[var(--prim-color)] text-white px-3 cursor-pointer rounded-r">
            <i className="bi bi-search"></i>
          </button>

          {/* Search Results */}
          {results.length > 0 && (
            <ul className="absolute top-full left-0 w-full bg-white border border-gray-200 mt-1 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
              {results.map((item) => (
                <li
                  key={item.Id}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                >
                  <Link href={`/product/${item.Id}`}>
                    {item.Name || item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {/* Location Dropdown */}
          <div className="hidden lg:flex text-sm ms-5 bg-white items-center ps-4 rounded-2xl border border-gray-400">
            <i className="bi bi-geo-alt text-lg text-[var(--prim-color)]"></i>
            <select
              name="location"
              id="location"
              className="px-3 rounded-lg font-semibold text-[var(--prim-color)] focus:border-[var(--prim-color)] appearance-none outline-none cursor-pointer"
              defaultValue="dhaka"
            >
              <option value="dhaka">Dhaka</option>
              <option value="khulna">Khulna</option>
              <option value="barisal">Barisal</option>
              <option value="rajshahi">Rajshahi</option>
              <option value="chattogram">Chattogram</option>
              <option value="rangpur">Rangpur</option>
              <option value="mymensing">Mymensing</option>
            </select>
          </div>
        </div>

        {/* Wishlist & Cart */}
        <div className="hidden lg:flex items-center space-x-6">
          {/* Wishlist */}
          <Link href="#" className="relative">
            <i className="bi bi-heart text-gray-600 hover:text-[var(--prim-color)] transition-all"></i>
            {wishList > 0 && (
              <span className="absolute -top-2 -right-2 bg-[var(--prim-color)] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {wishList}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link href="#" className="relative">
            <i className="bi bi-cart text-gray-600 hover:text-[var(--prim-color)] transition-all"></i>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[var(--prim-color)] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
