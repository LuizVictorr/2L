import CartButton from "./cart-button";

'use client'
import Image from "next/image";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"  
import Link from "next/link";
import { ModeToggle } from "../theme/dark-mode";
import { Button } from "../ui/button";
import CartDrawer from "../cart/cart-drawer";

  

const Header = () => {

    return (
      <header className="sticky top-0 z-10 shadow bg-white dark:bg-slate-950 mb-5">
        <div>
            <ul className="flex justify-between px-10 pt-10 pb-5">
                <li className="cursor-pointer">
                    <Button variant="ghost">
                        <Link href="/" legacyBehavior passHref>
                            <Image
                                src="/logodark.png" 
                                height={50} 
                                width={50} 
                                alt="Logo"
                                />
                        </Link>
                    </Button>
                </li>
                <li>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                            <NavigationMenuTrigger>Promoções</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="w-[400px] p-4 grid grid-cols-2">
                                    <li>
                                        <div>
                                            <Image
                                                src="/logodark.png" 
                                                height={100} 
                                                width={100} 
                                                alt="Logo"
                                            />
                                            <div>
                                                <h1>
                                                    Super Promoções
                                                </h1>
                                                <p>Principais Promoções</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <h1>Ofertas do dia</h1>
                                                <p>Descrição</p>
                                            </li>
                                            <li>
                                                <h1>Ofertas do mês</h1>
                                                <p>Descrição</p>
                                            </li>
                                            <li>
                                                <h1>Ofertas para você</h1>
                                                <p>Descrição</p>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                            <NavigationMenuTrigger>Categorias</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="w-[400px] p-4">
                                    <li>Camisetas</li>
                                    <li>Sapatilhas</li>
                                    <li>Acessórios</li>
                                </ul>
                            </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/shopping" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Loja
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/about" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Sobre Nós
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </li>
                <li className="flex space-x-2">

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <FaUser/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Perfil</DropdownMenuItem>
                        <DropdownMenuItem>Dashboard</DropdownMenuItem>
                        <DropdownMenuItem>Cupons</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>


                    

                    <Button variant="outline" size="icon">
                        <Sheet>
                            <SheetTrigger asChild className=" cursor-pointer">
                                <FaShoppingCart/>
                            </SheetTrigger>
                            <SheetContent className="flex flex-col justify-between">
                                <div>
                                    <SheetHeader>
                                    <SheetTitle>Meu Carrinho</SheetTitle>
                                    <SheetDescription className="flex justify-between text-md">
                                      <CartDrawer/>
                                    </SheetDescription>
                                    </SheetHeader>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </Button>

                    <ModeToggle/>
                </li>
            </ul>
        </div>
      </header>
    )
}

export default Header;