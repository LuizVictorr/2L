import stripe from "@/lib/stripe";
import Stripe from 'stripe';
import { Product } from "../../../types";
import Link from "next/link";

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
const Categories = async () => {

    const products = await getProducts();

    const uniqueCategories = Array.from(new Set(products?.map(product => product.category)));

    return (
        <ul>
            <li className="flex justify-center items-center text-center text-xl gap-10">
                {uniqueCategories.map((category, index) => (
                    <div key={index}>
                        <Link href={`/shopping?filter=${category}`}>
                          <h1 className="hover:font-bold hover:text-slate-400">{category}</h1>
                        </Link>
                    </div>
                ))}
            </li>
        </ul>
    )
}

export default Categories;