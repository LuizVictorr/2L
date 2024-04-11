import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";
import stripe from "@/lib/stripe";
import Stripe from "stripe";
import { Product } from "../../../types";
import ProductCard from "@/components/cart/product-card";


async function getProducts() {
    try {
      const stripeProducts = await stripe.products.list({
        limit: 9,
        expand: ["data.default_price"],
      });

      const filteredProducts = stripeProducts.data.filter(product => {
        return product.metadata.highlights === "True";
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


const Highlights = async () => {

    const products = await getProducts();

    products?.filter

    return (
        <div>
            
            <div className="grid grid-cols-4 gap-4 px-10">
                {products?.map((p) => (
                    <ProductCard {...p} />
                ))}
            </div>
        </div>
    )
}

export default Highlights;