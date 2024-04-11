import stripe from "@/lib/stripe";
import Stripe from "stripe";
import { Product } from "../../types";
import Highlights from "@/components/shop/highlights";
import Outlet from "@/components/shop/outlet";
import Promotions from "@/components/shop/promotions";
import Categories from "@/components/shop/categories";
import FAQ from "@/components/personal/faq";
import Intro from "@/components/personal/intro";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio"

async function getProducts() {
  try {
    const stripeProducts = await stripe.products.list({
      limit: 9,
      expand: ["data.default_price"],
    });

    return stripeProducts.data.map((p: Stripe.Product): Product => {
      return {
        id: p.id.toString(),
        name: p.name,
        description: p.description ?? "",
        price: (p.default_price as Stripe.Price)?.unit_amount_decimal ?? "0",
        currency: (p.default_price as Stripe.Price)?.currency ?? "BRL",
        images: p.images,
        image: p.images[0],
        category: p.metadata.category
      };
    });
  } catch (e) {
    console.log(e);
  }
}

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
        <Highlights/>
        <Outlet/>
        <Promotions/>
        <Intro/>
        <FAQ/>
      </div>
    </section>
  );
}