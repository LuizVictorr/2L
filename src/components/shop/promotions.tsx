import Link from "next/link";
import Image from "next/image"
import { FaArrowAltCircleRight } from "react-icons/fa";
import Stripe from 'stripe';
import stripe from "@/lib/stripe";
import { Product } from "../../../types";
import { Button } from "../ui/button";
import { Carousel, CarouselPrevious, CarouselContent, CarouselItem, CarouselNext } from "../ui/carousel";
import ProductCard from "../cart/product-card";


async function getProducts() {
    try {
      const stripeProducts = await stripe.products.list({
        limit: 9,
        expand: ["data.default_price"],
      });

      const filteredProducts = stripeProducts.data.filter(product => {
        return product.metadata.promotion === "True";
      }
    );
  
      return filteredProducts.map((p: Stripe.Product): Product => {
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


const Promotions = async () => {

  const products = await getProducts();

    return (
        <div className="py-10 space-y-5">
          <div className="flex justify-between">
                <h1 className="text-4xl font-bold pb-5">Promoções</h1>
                <Link href={"/"}>
                    <p className="flex items-center gap-2 hover:font-bold hover:text-slate-400">Ver Mais <span><FaArrowAltCircleRight/></span></p>
                </Link>
            </div>
          <div className="px-10">
            <Carousel>
              <CarouselPrevious className="text-black ml-7"/>
              <CarouselContent>
                {products?.map((p) => (
                    <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                        <ProductCard {...p} />
                    </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext className="text-black mr-7"/>
            </Carousel>
          </div>
        </div>
    )
}

export default Promotions;