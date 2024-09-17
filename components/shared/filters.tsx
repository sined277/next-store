"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { FilterCheckbox, Title, RangeSlider, CheckboxFiltersGroup } from "./";
import { Input } from "../ui";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";
import qs from 'qs'
import { useRouter, useSearchParams } from "next/navigation";
import { useSearchParam } from "react-use";

type Props = {
    className?: string;
};

interface PriceProps {
    priceTo: number;
    priceFrom: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const { ingredients, loading, selectedIds, onAddId } = useFilterIngredients();
    const [prices, setPrice] = useState({
        priceTo: Number(searchParams.get("priceTo")) || 5000,
        priceFrom: Number(searchParams.get("priceFrom")) || 50,
    });

    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrice({
            ...prices,
            [name]: value,
        });
    };

    useEffect(() => {
        const filters = {
            ...prices,
            ingredients: Array.from(selectedIds),
        }

        const queryString = qs.stringify(filters, {
            arrayFormat: 'comma',
        })

        router.push(`?${queryString}`, {
            scroll: false
        })
        
        
    }, [prices, selectedIds])


    return (
        <div className={cn("", className)}>
            <Title text="Filtering" size="sm" className="mb-5 font-bold" />

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до:</p>
                <div className="flex gap-3 mb-5">
                    <Input
                        type="number"
                        placeholder="0"
                        min={0}
                        max={30000}
                        value={String(prices.priceFrom)}
                        onChange={(event) =>
                            updatePrice("priceFrom", Number(event.target.value))
                        }
                    />
                    <Input
                        onChange={(event) =>
                            updatePrice("priceTo", Number(event.target.value))
                        }
                        type="number"
                        min={10}
                        max={3000}
                        placeholder="100"
                        value={String(prices.priceTo)}
                    />
                </div>
                <RangeSlider
                    min={0}
                    max={5000}
                    step={10}
                    value={[prices.priceFrom, prices.priceTo]}
                    onValueChange={([priceFrom, priceTo]) => setPrice({ priceFrom, priceTo})}
                />
            </div>

            <CheckboxFiltersGroup
                title="Ingredients"
                className="mt-5"
                onClickCheckbox={onAddId}
                limit={5}
                name="ingredients"
                loading={loading}
                selectedIds={selectedIds}
                defaultItems={ingredients.map((data) => {
                    return {
                        text: data.name,
                        value: data.id,
                    };
                })}
                items={ingredients.map((data) => {
                    return {
                        text: String(data.name),
                        value: String(data.id),
                    };
                })}
            />
        </div>
    );
};
