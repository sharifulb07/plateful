



import Category from "./Category/Category";
import Deals from "./Deals/Deals";
import Hero from "./Header/Hero";
import Banners from "./Promotion-Banners/Banners";

export default function Index() {
  return (
    <div>
      <Hero />
      <Category />
      <Banners />
      <Deals />
      
    </div>
  );
}
