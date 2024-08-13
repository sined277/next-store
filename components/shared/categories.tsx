import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    className?: string
}

const categoryTypes: string[] = [
    "Pizza",
    "Combo",
    "Snacks",
    "Cocktails",
    "Coffee",
    "Drinks",
    "Desserts",
]

export const Categories: React.FC<Props> = ({ className }) => {
    const activeIndex = 0
    return (
        <div className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl mt-3", className)}>
            {categoryTypes.map((category, categoryIndex) => {
                return (
                    <a key={categoryIndex} className={cn(
                        "flex items-center font-bold h-11 rounded-2xl px-5",
                        activeIndex === categoryIndex && 'bg-white shadow-md shadow-gray-200 text-primary'
                    )}>
                        <button>
                            {category}
                        </button>
                    </a>
                )
            })}
        </div>
    )
}