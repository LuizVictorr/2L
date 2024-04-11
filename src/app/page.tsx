import Highlights from "@/components/shop/highlights";
import Outlet from "@/components/shop/outlet";
import Promotions from "@/components/shop/promotions";
import Categories from "@/components/shop/categories";
import FAQ from "@/components/personal/faq";
import Intro from "@/components/personal/intro";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default async function Home() {
  return (
    <section className="container">
      <div className="">
        <AspectRatio ratio={16 / 9}>
        <Image 
            src="/universe.jpg" 
            width={10000}
            height={10}
            alt="Image" 
            className="rounded-lg" 
          />
        </AspectRatio>
      </div>
      <div className="space-y-32">
        <Categories/>
        <Promotions/>
        <Highlights/>
        <Outlet/>
        <Intro/>
        <FAQ/>
      </div>
    </section>
  );
}