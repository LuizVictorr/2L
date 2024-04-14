import Stripe from "stripe";
import stripe from "@/lib/stripe";
import AddCard from "@/components/shop/add-card";


type ProductPageProps = {
    params: {
        id: string;
    }
}

async function getProducts(id: string) {
    try {
      const product = await stripe.products.retrieve(id)
      const price = await stripe.prices.list({
        product: product.id,
    });
  
        return {
          id: product.id.toString(),
          name: product.name,
          description: product.description ?? "",
          price: price.data[0].unit_amount,
          currency: (product.default_price as Stripe.Price)?.currency ?? "BRL",
          image: product.images[0],
          category: product.metadata.category,
          outlet: product.metadata.outlet,
          promotion: product.metadata.promotion,
          highlights: product.metadata.highlights,
          p: product.metadata.P,
          m: product.metadata.M,
          g: product.metadata.G
        };
    } catch (e) {
      console.log(e);
    }
  }

const Outlet = async ({ params: {id} }: ProductPageProps) => {

  const products = await getProducts(id);

    return (
        <div>
          <div className="px-10">
          {products && (
            <AddCard 
            id={products?.id} 
            name={products?.name} 
            description={products?.description}
            price={products?.price} 
            currency={products?.currency} 
            image={products?.image} 
            category={products?.category}
            p={products.p}
            m={products.m}
            g={products.g}/>
          )}
          </div>
        </div>
    )
}

export default Outlet;