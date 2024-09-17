'use client'

import React, { useEffect } from 'react';
import { Title } from './title';
import { ProductCard } from './product-card';

import { useIntersection } from 'react-use';
import { useCategoryStore } from '@/store/categoty';

interface Props {
    title: string;
    items: any[];
    className?: string;
    categoryId: number;
    listClassName?: string;
}

export const ProductsList: React.FC<Props> = ({ title, items, className, categoryId }) => {

    const intersectionRef = React.useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 1
    });
    const setCurrentCategoryId = useCategoryStore((state) => state.setActiveId);

    useEffect(() => {
        if (intersection?.isIntersecting) {
          setCurrentCategoryId(categoryId)
        }
      }, [categoryId, intersection?.isIntersecting, title, setCurrentCategoryId]);

    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size="lg" className="font-extrabold mb-5" />
            <div className="grid grid-cols-3 gap-[50px]">
                {items.map((item, i) => (
                    <ProductCard
                        key={item.id}
                        id={item.id}
                        name="Маргарита"
                        imageUrl="https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp"
                        price={390}
                    />
                ))}
            </div>
        </div>
    );
};