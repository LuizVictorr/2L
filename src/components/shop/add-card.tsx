"use client";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import { Button } from "../ui/button";
import Image from "next/image";
import { useToast } from "@/components/ui/use-toast";
import { BadgeCheck, LockKeyhole, Truck } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface AddCardProps {
  id: string;
  name: string;
  description: string;
  sku?: string;
  price: string | number;
  currency: string;
  image: string;
  category: string;
  p: string;
  m: string;
  g: string;
}

export default function AddCard({ id, name, description, price, currency, image, category, p, m, g }: any) {

  const [size, setSize] = useState<string | null>(null)


  const handleSize = (tamanho: string) => {
    if (tamanho === size) {
      setSize(null);
    } else {
      setSize(tamanho);
    }
  };
  
  const { addItem } = useShoppingCart();

  const { toast } = useToast();

  const formattedPrice = formatCurrencyString({
    value: Number(price),
    currency,
    language: "pt-BR",
  });

  async function addToCart(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    const itemToAdd = {
      name,
      description,
      id,
      price: Number(price),
      currency,
      image,
      category,
      p: (size === 'P' ? p : p.disabled),
      m: (size === 'M' ? m : m.disabled),
      g: (size === 'G' ? g : g.disabled),
    }

    if (size) {
        addItem(itemToAdd);

        toast({
          title: `🎉 ${name} Adicionado`,
          description: "Adicione mais por descontos.",
        });
    } else {
        toast({
          title: "⚠️ Por favor, selecione um tamanho.",
          duration: 3000,
        });
    }
  }

  return (
    <div className="flex items-center h-[550px] p-5">
        <div className="h-[70vh] w-[120vh] bg-slate-50 dark:bg-slate-900 flex justify-center items-center rounded-lg">
            <Image
                src={image}
                width={400}
                height={400}
                alt={name}
                className=""
                />
        </div>
        <div className="flex flex-col h-full w-[50vh] justify-between pl-20 py-5">
            <div className=" space-y-3">
                <h1 className="text-4xl font-bold">{name}</h1>
                <div className="flex gap-5 font-bold">
                  <button className={cn(" py-2 px-4 rounded", {
                      "bg-slate-950 text-white dark:text-black dark:bg-slate-100": size === "P", 
                      "bg-slate-100 text-black dark:text-white dark:bg-slate-900": size !== "P"
                    })}
                    onClick={() => handleSize("P")}>
                    {p}
                  </button>
                  <button className={cn(" py-2 px-4 rounded", {
                      "bg-slate-950 text-white dark:text-black dark:bg-slate-100": size === "M", 
                      "bg-slate-100 text-black dark:text-white dark:bg-slate-900": size !== "M"
                    })}
                    onClick={() => handleSize("M")}>
                    {m}
                  </button>
                  <button className={cn(" py-2 px-4 rounded", {
                      "bg-slate-950 text-white dark:text-black dark:bg-slate-100": size === "G", 
                      "bg-slate-100 text-black dark:text-white dark:bg-slate-900": size !== "G"
                    })}
                    onClick={() => handleSize("G")}>
                    {g}
                  </button>
                </div>
                <p className="text-sm">{description}</p>
            </div>
            <div className="flex flex-col gap-10">
                <div>
                    <p className=" line-through text-slate-400 text-md">50,00 </p>
                    <p className="text-xl font-bold">{formattedPrice}</p>
                    <p className="text-green-500 text-sm">
                        {((50 - (Number(price))/100) * 100) / 50}% de desconto
                    </p>
                </div>
                <div className="">
                    <Button onClick={addToCart} className="w-full">
                        Adicionar ao Carrinho
                    </Button>
                    <ul className="flex gap-5 text-center justify-center text-xs pt-3 text-slate-400">
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