"use client";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";

interface ProductCardProps {
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

export default function ProductCard({ id, name, description, price, currency, image, images, category }: ProductCardProps) {

  const formattedPrice = formatCurrencyString({
    value: Number(price),
    currency,
    language: "pt-BR",
  });


  return (
    <Link href={`/product/${id}`}>
      <Card className="bg-slate-50 border-0">
        <CardHeader>
          <CardTitle className="flex items-center justify-center min-h-[4rem]">
            {name}
          </CardTitle>
          <CardDescription className="relative w-full h-60">
            <Image
              src={image}
              fill
              sizes="100%"
              alt={name}
              className="object-contain"
              />
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <p className="truncate px-3">{description}</p>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div>
            <p>Preço</p>
            <p>{formattedPrice}</p>
          </div>
            <Button size={"lg"} variant={"default"}>
              <Link href={`/product/${id}`}>
                Ver Mais
              </Link>
            </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}