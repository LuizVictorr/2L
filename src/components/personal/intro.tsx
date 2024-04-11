import Image from "next/image";
import { FaNewspaper, FaPaperPlane } from "react-icons/fa";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link";
import { Button } from "../ui/button";

  


const Intro = () => {

    return (
        <div className="grid grid-cols-3 gap-5 grid-rows-2">
            <div className=" border-slate-100 border-2 hover:bg-slate-100 w-full h-full col-span-2 row-span-2 rounded-lg flex gap-10 justify-between p-5">
                <div className="space-y-4">
                    <h1 className=" text-4xl font-bold">Quem Somos</h1>
                    <p className="pb-12">
                        Bem-vindo à 2L (Double L), sua plataforma de moda online dedicada a proporcionar uma experiência 
                        excepcional. Nós oferecemos uma seleção cuidadosa de roupas, sapatilhas e acessórios de alta qualidade, 
                        garantindo estilo e durabilidade em cada peça. Nosso compromisso com entregas pontuais e um serviço de 
                        excelência reflete nossa dedicação em tornar a sua experiência de compra suave e satisfatória.
                    </p>
                    <Button>
                        <Link href={"/about"}> Saiba Mais </Link> 
                    </Button>
                </div>
                <Image
                    src="/logodark.png"
                    alt="Quem Somos"
                    width={400}
                    height={400}
                />
            </div>
            <div className=" border-slate-100 border-2 hover:bg-slate-100 dark:bg-cyan-900 w-full h-full rounded-lg p-5 space-y-2">
                <h1 className="text-2xl font-bold flex items-center gap-2"><span><FaNewspaper/></span>Newsletters</h1>
                <p className="pb-5">
                    Cadastre-se agora e receba de antemão nossas principais ofertas e descontos
                </p>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button>Cadastre-se</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                        <DialogTitle>Newsletters</DialogTitle>
                        <DialogDescription>
                            Preencha todos os campos para ter acesso a todas as nossas promoções
                        </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                            Nome
                            </Label>
                            <Input id="name" value="Pedro Duarte" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="email" className="text-right">
                            Email
                            </Label>
                            <Input id="email" value="example@gmail.com" className="col-span-3" />
                        </div>
                        </div>
                        <DialogFooter>
                        <Button type="submit">Salvar</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

            </div>
            <div className=" border-slate-100 border-2 hover:bg-slate-100 w-full h-full rounded-lg p-5">
                <h1 className="text-2xl font-bold flex items-center gap-2"><span><FaPaperPlane/></span>Depoimentos</h1>
                <div className="px-10 py-5">
                    <Carousel>
                        <CarouselContent>
                            <CarouselItem>
                                <div className="flex items-center gap-2">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <p>Os produtos são Perfeitos nada a reclamar só a agradecer</p>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="flex items-center gap-2">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <p>Recomendo demais, além de muito educados são cuidadosos</p>
                                </div>
                                
                            </CarouselItem>
                            <CarouselItem>
                                <div className="flex items-center gap-2">
                                        <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <p>Já enchi meu carrinho denovo kkk, bora para mais uma compra</p>
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
                <Button>
                    <Link href="/testemonials">Mais Depoimentos</Link>
                </Button>
            </div>
        </div>
    )
}

export default Intro;