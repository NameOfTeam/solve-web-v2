import { formatNumber } from '@/utils/formatNumber';
import React from 'react'

const StatCard = ({ title, description, quantity, unit }: { title: string, description: string, quantity: number, unit: string }) => {
  return (
    <div className="flex-1 h-36 border border-bg-border rounded-lg px-7 py-6 flex flex-col gap-y-1 text-main-container">
      <p className="text-lg font-[600]">{title}</p>
      <p className="text-xs font-[400]">{description}</p>
      <div className="flex-1"></div>
      <p className='text-lg font-[400]'>
        <span className='font-[600]'>{formatNumber(quantity)}</span> {unit}
      </p>
    </div>
  );
}

export default StatCard