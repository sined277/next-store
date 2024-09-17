import React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { ArrowRight, ShoppingBasket, UserRound } from 'lucide-react';


import { Button } from "../ui";
import { Container } from "./container";
import { SearchInput } from "./";
import Link from "next/link";

type Props = {
    className?: string;
};

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className={cn("border, border-b", className)}>
            <Container className="flex items-center justify-between py-8">
                <Link href={"/"}>
                    <div className="flex items-center gap-2">
                        <Image src={"/logo.png"} alt="Logo" width={35} height={35} />
                        <div>
                            <h1 className="text-2xl uppercase font-black">next</h1>
                            <p className="text-sm text-gray-400 leading-3">Best shop ever</p>
                        </div>
                    </div>
                </Link>

                <div className="mx-10 flex-1">
                    <SearchInput />
                </div>
                <div className="flex items-center gap-4">
                    <Button className="flex items-center gap-1" variant={"outline"}>
                        <UserRound color="#ff6600" size={16} />
                        Sign in
                    </Button>

                    <div>
                        <Button className="group relative">
                            <b>$520</b>
                            <span className="h-full w-[1px] bg-white/30 mx-3" />
                            <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                                <ShoppingBasket color="#fff" size={16} className="relative" />
                                <b>100</b>
                            </div>

                            <div className="flex items-center gap-3">
                                <ShoppingBasket color="#fff" size={16} className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
                                <ArrowRight color="#ffffff" size={16} className="absolute right-10 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
                            </div>
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    );
};
