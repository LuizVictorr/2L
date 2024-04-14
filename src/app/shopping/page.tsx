import Link from "next/link";
import stripe from "@/lib/stripe";
import Stripe from "stripe";
import { Product } from "../../../types";
import ProductList from "@/components/shop/product-list";


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
          category: p.metadata.category,
          outlet: p.metadata.outlet,
          promotion: p.metadata.promotion,
          highlights: p.metadata.highlights,
          p: p.metadata.P,
          m: p.metadata.M,
          g: p.metadata.G,
        };
      });
    } catch (e) {
      console.log(e);
    }
  }


const Highlights = async () => {

    const products = await getProducts();

    return (
        <div>
              <ProductList products={products}/>
        </div>
    )
}

export default Highlights;