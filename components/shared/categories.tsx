'use client'

import { cn } from '@/lib/utils'
import { useCategoryStore } from '@/store/categoty'
import React, { use, useEffect } from 'react'

type Props = {
    className?: string
}

const categoryTypes = [
    { name: "Pizza", id: 0 },
    { name: "Combo", id: 1 },
    { name: "Snacks", id: 2 },
    { name: "Cocktails", id: 3 },
    { name: "Coffee", id: 4 },
    { name: "Drinks", id: 5 },
    { name: "Desserts", id: 6 },
]

export const Categories: React.FC<Props> = ({ className }) => {
    const activeIndex = useCategoryStore((state) => state.activeId);

    return (
        <div className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl mt-3", className)}>
            {categoryTypes.map(({name, id}, categoryIndex) => {
                return (
                    <a href={``} key={categoryIndex} className={cn(
                        "flex items-center font-bold h-11 rounded-2xl px-5",
                        activeIndex === id && 'bg-white shadow-md shadow-gray-200 text-primary'
                    )}>
                        <button>
                            {name}
                        </button>
                    </a>
                )
            })}
        </div>
    )
}