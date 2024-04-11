'use client'
import React, { ChangeEvent, useState } from "react";
import { FaNewspaper } from "react-icons/fa";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const Newsletters = () => {
    const [name, setName] = useState("Pedro Duarte");
    const [email, setEmail] = useState("example@gmail.com");
    const [number, setNumber] = useState("(99) 9 9999-9999");

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNumber(e.target.value);
    };

    return (
        <div className="border-slate-100 border-2 dark:bg-slate-950 w-full h-full rounded-lg p-5 space-y-2">
            <h1 className="text-2xl font-bold flex items-center gap-2">
                <span><FaNewspaper/></span>Newsletters
            </h1>
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
                            <Input id="name" value={name} onChange={handleNameChange} className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="email" className="text-right">
                                Email
                            </Label>
                            <Input id="email" value={email} onChange={handleEmailChange} className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="number" className="text-right">
                                Número
                            </Label>
                            <Input id="number" value={number} onChange={handleNumberChange} className="col-span-3" />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Salvar</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Newsletters;
