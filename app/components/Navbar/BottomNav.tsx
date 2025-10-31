"use client";

import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import BestDeals from "@/app/JsonData/BestDeals.json";

type NavLinks = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

const navLinks: NavLinks[] = [
  { label: "Home", href: "/" },
  {
    label: "Shop",
    href: "/UI-Components/Shop",
    dropdown: [
      {
        label: "Shop",
        href: "/UI-Components/Shop",
      },
      { label: "Shop Details", href: "" },
    ],
  },
  {
    label: "Pages",
    href: "#",
    dropdown: [
      {
        label: "Cart",
        href: "/UI-Components/Pages/cart",
      },
      { label: "WishList", href: "/UI-Components/Pages/wishList" },
      { label: "Checkout", href: "/UI-Components/Pages/checkout" },
      { label: "Account", href: "/UI-Components/Pages/account" },
    ],
  },

  {
    label: "Blog",
    href: "#",
    dropdown: [
      {
        label: "Blog",
        href: "/UI-Components/Blogs",
      },
      { label: "Blogs Details", href: "" },
    ],
  },
  { label: "Contact Us", href: "/UI-Components/contact" },
];

interface ProductType {
  id: string;
  title?: string;
  Name?: string;
  ProductImage?: string;
  image?: string;
  price?: string;
  Price?: string;
}

export default function BottomNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropDowns, setOpenDropDowns] = useState<Record<string, boolean>>(
    {}
  );
  const [isFixed, setIsFixed] = useState(false);
  
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

  const toggleDropDown = (label: string) => {
    setOpenDropDowns((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 5000);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
    w-full bg-white shadow-sm transition-all duration-500
    ${isFixed ? "fixed top-0 left-0 z-50 fixed-nav " : " "}
    `}
    >
      <div className="flex items-center justify-between space-x-5 px-[8%] lg:px-[16%] text-gray-700">
        {/* Desktop Nav */}

        <Link
          href={"/"}
          className={`text-3xl font-bold Merienda text-black hidden ${
            isFixed ? "lg:flex" : "hidden"
          }`}
        >
          Plate<span className="text-[var(--prim-color)]">Ful</span>
        </Link>

        <nav className="hidden lg:flex  space-x-6 relative">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="relative group z-[99999]">
                <Link href={link.href} className="flex items-center gap-1">
                  {link.label} <i className="ri-arrow-down-s-line"></i>
                </Link>
                <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-xl p-2 border border-gray-100 rounded-lg min-w-[150px] ">
                  {link.dropdown.map((item) =>
                    item.label == "Shop Details" ? (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 rounded-md hover: bg-[var(--prim-light)] transition-all"
                      >
                        {item.label}
                      </Link>
                    ) : item.label == "Blog Details" ? (
                      <link
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 rounded-md hover: bg-[var(--prim-light)] transition-all"
                      >
                        {item.label}
                      </link>
                    ) : (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 rounded-md hover:bg-[var(--prim-light)] transition-all"
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            ) : (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            )
          )}
        </nav>
        <button className="nav-button cursor-pointer font-bold bg-[var(--prim-color)] text-white p-3 hidden lg:flex">
          <i className="bi bi-telephone pe-2 text-xl"></i> 88+123 456 789
        </button>

        {/* Mobile Nav Bar  */}

        <div className="lg:hidden flex items-center justify-between gap-4 w-full">
          <button
            className="text-2xl focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="flex items-center gap-x-5">
              <i className="ri-menu-line"></i>
            </div>
          </button>
          <div className="flex lg:hidden items-center space-x-6">

          <Link href={"#"} className="relative">
            <i className="bi bi-heart text-gray-600 hover:text-[var(--prim-color)] transition-all"></i>
          {wishList>0 && (

            <span className="absolute -top-2 -right-2 bg-[var(--prim-color)] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              {wishList}
            </span>
          )}
          </Link>
          {/* cart */}
          <Link href={"#"} className="relative">
            <i className="bi bi-cart text-gray-600 hover:text-[var(--prim-color)] transition-all"></i>
            {cartCount>0 &&(

            <span className="absolute -top-2 -right-2 bg-[var(--prim-color)] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
            )}
          </Link>
          </div>
          <button className="nav-button cursor-pointer font-bold bg-[var(--prim-color)] text-white p-3 ">
          <i className="bi bi-telephone pe-2 text-xl"></i> 88+123 456 789
        </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-md overflow-hidden transition-all duration-500">
          <nav className="flex flex-col py-4 px-[4%] space-y-1">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="flex flex-col">
                <button onClick={()=>toggleDropDown(link.label)} className="flex justify-between items-center w-full p-2 font-medium rounded-md hover:bg-gray-100 ">
                  {link.label} <i className={`ri-arrow-down-s-line transition-transform ${openDropDowns[link.label]? "rotate-180":""}`}></i>
                </button>
                <div className={` ${openDropDowns[link.label]? "block":"hidden"} bg-white shadow-xl p-2 border border-gray-100 rounded-lg min-w-[150px] `}>
                  {link.dropdown.map((item) =>
                    item.label == "Shop Details" ? (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 rounded-md hover: bg-[var(--prim-light)] transition-all"
                      >
                        {item.label}
                      </Link>
                    ) : item.label == "Blog Details" ? (
                      <link
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 rounded-md hover: bg-[var(--prim-light)] transition-all"
                      >
                        {item.label}
                      </link>
                    ) : (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 rounded-md hover:bg-[var(--prim-light)] transition-all"
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            ) : (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            )
          )}
          </nav>

        </div>
      )}
    </div>
  );
}
