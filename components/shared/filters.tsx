import { cn } from '@/lib/utils'
import React from 'react'
import { FilterCheckbox, Title, RangeSlider, CheckboxFiltersGroup } from './'
import { Input } from '../ui'


type Props = {
    className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn("", className)}>
            <Title text='Filtering' size="sm" className="mb-5 font-bold" />

            <div className='flex flex-col gap-4'>
                <FilterCheckbox text="Можно собирать" value="1" />
                <FilterCheckbox text="New one" value="2" />
            </div>

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до:</p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" placeholder="0" min={0} max={30000} defaultValue={0} />
                    <Input type="number" min={10} max={3000} placeholder="100" />
                </div>
                <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
            </div>

            <CheckboxFiltersGroup
                title='Ingredients'
                className='mt-5'
                limit={5}
                defaultItems={[
                    {
                        text: "cheese",
                        value: "1"
                    },
                    {
                        text: "tomato",
                        value: "2"
                    },
                    {
                        text: "cucumber",
                        value: "3"
                    },
                    {
                        text: "orange",
                        value: "4"
                    },
                    {
                        text: "strowbary",
                        value: "5"
                    },
                    {
                        text: "carrot",
                        value: "6"
                    },
                ]}
                items={[
                    {
                        text: "cheese",
                        value: "12"
                    },
                    {
                        text: "tomato",
                        value: "31"
                    },
                    {
                        text: "cheese",
                        value: "41"
                    },
                    {
                        text: "tomato",
                        value: "51"
                    },
                    {
                        text: "cheese",
                        value: "61"
                    },
                    {
                        text: "tomato",
                        value: "2"
                    },
                    {
                        text: "cucumber",
                        value: "3"
                    },
                    {
                        text: "orange",
                        value: "4"
                    },
                    {
                        text: "strowbary",
                        value: "5"
                    },
                    {
                        text: "carrot",
                        value: "1321515"
                    },
                    {
                        text: "carrot",
                        value: "125115"
                    },
                    {
                        text: "carrot",
                        value: "52131"
                    },
                    {
                        text: "carrot",
                        value: "4124"
                    },
                    {
                        text: "carrot",
                        value: "4142"
                    },
                    {
                        text: "carrot",
                        value: "123"
                    },
                ]}
            />
        </div>
    )
}