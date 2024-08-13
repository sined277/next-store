import { cn } from '@/lib/utils'
import { ArrowUpDown } from 'lucide-react'
import React from 'react'

type Props = {
    className?: string
}

export const PopupModel: React.FC<Props> = ({className}) => {
  return (
    <div className={cn("inline-flex items-center gap-2 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer", className)}>
        <ArrowUpDown size={14} />
        <b>Sorting by:</b>
        <b className='text-primary'>Rating</b>
    </div>
  )
}