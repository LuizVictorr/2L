import stripe from "@/lib/stripe";
import Stripe from 'stripe';
import { Product } from "../../../types";

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
const Categories = async () => {

    const products = await getProducts();

    // Extrair categorias únicas
    const uniqueCategories = Array.from(new Set(products?.map(product => product.category)));

    return (
        <div>
            <div className="flex justify-center items-center text-center text-xl gap-10">
                {uniqueCategories.map((category, index) => (
                    <div key={index}>
                        <h1 className="hover:font-bold hover:text-slate-400">{category}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categories;