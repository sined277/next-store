"use client";

import { cn } from "@/lib/utils";
import { Api } from "@/services/api-clients";
import { Search } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useClickAway, useDebounce } from "react-use";

export const SearchInput = () => {
    const [inputFocus, setInputFocus] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const ref = useRef(null);
    useClickAway(ref, () => setInputFocus(false));
    const [products, setProducts] = useState<any[]>([]);

    useDebounce(
        () => {
            Api.products.search(searchQuery).then((data) => setProducts(data));
        },
        300,
        [searchQuery]
    );

    const onClickProduct = () => {
        setInputFocus(false)
        setSearchQuery("")
        setProducts([])
    }

    return (
        <>
            {inputFocus && (
                <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-30"></div>
            )}
            <div
                ref={ref}
                className="flex rounded-2xl flex-1 justify-between relative h-11 z-30"
            >
                <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
                <input
                    className="rounded-2xl outline-none w-full bg-gray-50 pl-11"
                    type="text"
                    placeholder="Search..."
                    onFocus={() => setInputFocus(true)}
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                />

                <div
                    className={cn(
                        "absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
                        inputFocus && "visible opacity-100 top-12"
                    )}
                >
                    {products &&
                        products.map((product) => {
                            return (
                                <Link
                                    key={product.id}
                                    className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10"
                                    href={`/product/${product.id}`}
                                    onClick={onClickProduct}
                                >
                                    <img
                                        src={product.imageUrl}
                                        className="rounded-sm h-8 w-8"
                                        alt={product.name}
                                    />
                                    <span className="cursor-pointer">{product.name}</span>
                                </Link>
                            );
                        })}
                </div>
            </div>
        </>
    );
};
