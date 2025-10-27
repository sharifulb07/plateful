import Image, { StaticImageData } from "next/image";

import banner1 from "@/public/promotion/1.jpg";
import banner2 from "@/public/promotion/2.jpg";
import banner3 from "@/public/promotion/3.jpg";
import banner4 from "@/public/promotion/4.jpg";

type BannerType = {
  image: StaticImageData;
  heading: string;
};

const banners: BannerType[] = [
  { image: banner1, heading: "Everyday \n eat Meat" },
  { image: banner2, heading: "Daily \n eat vegetable" },
  { image: banner3, heading: "Everyday \n eat Fish" },
  { image: banner4, heading: "Everyday \n eat anything" },
];

export default function Banners() {
  return (
    <div className="px[8%] lg:px-[12%] py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {banners.map((banner, index) => (
          <div className="relative" key={index}>
            <Image
              src={banner.image}
              alt={`Banner ${index + 1}`}
              className={`w-full} opacity-60`}
            />

            <div className="banner-content absolute bottom-[1%] left-[5%]">
              <h2 className="Merienda text-3xl font-bold leading-11 shadow whitespace-pre-line text-black">
                {banner.heading}
              </h2>
              <button className="px-5 py-3 rounded-full text-white font-bold mt-5 bg-[var(--prim-color)] hover:bg-[var(--prim-light)] hover:text-[var(--prim-color)] cursor-pointer transition-all duration-500">
                Shop Now <i className="bi bi-arrow-right ps-2"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
