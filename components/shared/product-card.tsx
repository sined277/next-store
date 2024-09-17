import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { Title } from './title';
import { Button } from '../ui';
import { Plus } from 'lucide-react';

type Props = {
    id: string;
    name: string;
    price: number;
    count?: number;
    imageUrl?: string;
    className?: string;
}

export const ProductCard: React.FC<Props> = (props) => {
    return (
        <div className={cn("", props.className)}>
            <Link href={`/product/${props.id}`}>

                <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
                    <img className="w-[215px] h-[215px]" src={props.imageUrl} alt={props.name} />
                </div>
            </Link>
            <Title text={props.name} size="sm" className="mb-1 mt-3 font-bold" />

            <p className="text-sm text-gray-400">
                Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок
            </p>

            <div className="flex justify-between items-center mt-4">
                <span className="text-[20px]">
                    от <b>{props.price} ₽</b>
                </span>

                <Button variant="secondary" className='text-base font-bold'>
                    <Plus className="w-4 h-4 mr-1" />
                    Добавить
                </Button>
            </div>
        </div>
    )
}