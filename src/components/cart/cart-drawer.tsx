"use client";
import { useShoppingCart } from "use-shopping-cart";
import { Loader, MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function CartDrawer() {
  const { cartCount, cartDetails, redirectToCheckout, incrementItem, decrementItem } = useShoppingCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  async function checkout() {
    setIsCheckingOut(true);
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartDetails),
    });

    const { id } = await response.json();

    const result = await redirectToCheckout(id);
    setIsCheckingOut(false);
  }

  return (
    <section className="flex flex-col space-y-5 w-full h-full">
      {cartDetails &&
        Object.keys(cartDetails).map((key) => (
          <div key={key}>
              <div className="flex items-center justify-between p-5 border-2 border-slate-200 rounded-lg">
                    <div className="flex gap-3">
                        <div className="relative w-16 h-16">
                            <Image
                            src={cartDetails[key].image || ""}
                            fill
                            alt={cartDetails[key].name}
                            className="object-contain"
                            />
                        </div>
                        <div>
                            <h1>{cartDetails[key].name}</h1>
                            <div className="flex gap-3">
                              <p>{cartDetails[key].p}</p>
                              <p>{cartDetails[key].m}</p>
                              <p>{cartDetails[key].g}</p>
                            </div>
                        </div>
                    </div>
                  <div>
                    <p className="text-md text-muted-foreground">
                      {cartDetails[key].formattedValue}
                    </p>
                    <div className="flex justify-center items-center gap-2">
                        <button onClick={() => incrementItem(cartDetails[key].id)}>
                            <PlusIcon className="hover:text-green-600" />
                        </button>
                        <p className="text-md font-medium leading-none">
                            {cartDetails[key].quantity}
                            </p>
                        <button onClick={() => decrementItem(cartDetails[key].id)}>
                            <MinusIcon className="hover:text-red-600" />
                        </button>
                    </div>
                  </div>
              </div>
          </div>
        ))}
      <div
        className={cn(
          "absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full p-5",
          cartCount === undefined || cartCount <= 0 ? "hidden" : ""
        )}
      >
        <Button
          variant={"default"}
          size={"lg"}
          onClick={checkout}
          disabled={isCheckingOut}
          className="w-full"
        >
          {isCheckingOut ? (
            <div className="flex items-center justify-center gap-2 w-full">
              <Loader className="animate-spin 2s repeat-infinite" />{" "}
              Finalizando...
            </div>
          ) : (
            "Finalizar"
          )}
        </Button>
      </div>
    </section>
  );
}