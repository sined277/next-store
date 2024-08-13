"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";
import { Button, Input } from "../ui";

type Item = FilterChecboxProps;

interface Props {
    title: string;
    items: Item[];
    defaultItems?: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    className?: string;
    onChange?: (values: string[]) => void;
    defaultValue?: string[];
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
    title,
    items,
    defaultItems,
    limit = 5,
    searchInputPlaceholder = "Search...",
    className,
    onChange,
    defaultValue,
}) => {
    const [showAllCheckbox, setShowAllCheckbox] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState("");
    const currentCheckboxList = showAllCheckbox
        ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()))
        : defaultItems?.slice(0, limit) || items.slice(0, limit);

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className={cn("", className)}>
            <p className="font-bold mb-3">{title}</p>

            {showAllCheckbox && (
                <div className="mb-5">
                    <Input
                        value={searchValue}
                        onChange={inputChangeHandler}
                        placeholder={"Search..."}
                        className="bg-gray-50 border-none"
                    />
                </div>
            )}

            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
                {currentCheckboxList.map((item) => (
                    <FilterCheckbox
                        onCheckedChange={(asd) => console.log(asd)}
                        checked={false}
                        key={item.value}
                        value={item.value}
                        text={item.text}
                        endAdornment={item.endAdornment}
                    />
                ))}
            </div>

            {items.length > limit && (
                <div
                    className={
                        showAllCheckbox ? "border-t border-t-neutral-100 mt-4" : ""
                    }
                >
                    <Button
                        onClick={() => setShowAllCheckbox(!showAllCheckbox)}
                        className="text-primary mt-3"
                        variant={"outline"}
                    >
                        {!showAllCheckbox ? "Show All" : "Hide"}
                    </Button>
                </div>
            )}
        </div>
    );
};
