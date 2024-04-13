"use client";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import { Button } from "../ui/button";
import Image from "next/image";
import { useToast } from "@/components/ui/use-toast";
import { BadgeCheck, LockKeyhole, Truck } from "lucide-react";

interface AddCardProps {
  id: string;
  name: string;
  description?: string;
  sku?: string;
  price: string | number;
  currency: string;
  image: string;
  images?: string[];
  category: string;
}

export default function AddCard({ id, name, description, price, currency, image, images, category }: any) {
  
  const { addItem } = useShoppingCart();

  const { toast } = useToast();

  const formattedPrice = formatCurrencyString({
    value: Number(price),
    currency,
    language: "pt-BR",
  });

  async function addToCart(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    addItem({
      name,
      description,
      id,
      price: Number(price),
      currency,
      image,
      category,
    });

    toast({
      title: `🎉 ${name} Adicionado`,
      description: "Adicione mais por descontos.",
    });
  }

  return (
    <div className="flex items-center h-[550px] p-5">
        <div className="h-[70vh] w-[120vh] bg-slate-50 flex justify-center items-center rounded-lg">
            <Image
                src={image}
                width={400}
                height={400}
                alt={name}
                className=""
                />
        </div>
        <div className="flex flex-col h-full w-[50vh] justify-between pl-20 py-5">
            <div>
                <h1 className="text-4xl font-bold pb-3">{name}</h1>
                <p>{description}</p>
            </div>
            <div className="flex flex-col gap-10">
                <div>
                    <p className=" line-through text-slate-400 text-md">50,00 </p>
                    <p className="text-xl font-bold">{formattedPrice}</p>
                    <p className="text-green-500 text-sm">
                        {((50 - (price)/100) * 100) / 50}% de desconto
                    </p>
                </div>
                <div className="space-y-5">
                    <Button onClick={addToCart} className="w-full">
                        Adicionar ao Carrinho
                    </Button>
                    <ul className="flex gap-5 text-center justify-center">
                        <li className="flex flex-col items-center"><BadgeCheck />Compra <br /> Segura</li>
                        <li className="flex flex-col items-center"><Truck />Entrega no <br /> Prazo</li>
                        <li className="flex flex-col items-center"><LockKeyhole />Privacidade <br /> Protegida</li>
                    </ul>
                </div>
            </div>
        </div>
        <div>

        </div>
    </div>
  );
}