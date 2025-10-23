"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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

export default function BottomNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropDowns, setOpenDropDowns] = useState<Record<string, boolean>>(
    {}
  );
  const [isFixed, setIsFixed] = useState(false);

  const toggleDropDown = (label: string) => {
    setOpenDropDowns((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
    w-full bg-white shadow-sm transition-all duration-500
    ${isFixed ? "fixed top-0 left-0 z-50 " : " "}
    `}
    >
      <div className="flex items-center justify-center space-x-5 px-[8%] lg:px-[16%] text-gray-700">
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
      </div>
    </div>
  );
}
