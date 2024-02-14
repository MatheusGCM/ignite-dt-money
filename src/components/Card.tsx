import {
  ArrowCircleUp,
  ArrowCircleDown,
  CurrencyDollar,
} from '@phosphor-icons/react'
import { memo } from 'react'

import { priceFormatter } from '../utils/formatter'

const content = {
  income: {
    text: 'Entradas',
    icon: <ArrowCircleUp className="text-green-300 size-8" />,
  },
  outcome: {
    text: 'Saídas',
    icon: <ArrowCircleDown className="text-red-300 size-8" />,
  },
  default: {
    text: 'Total',
    icon: <CurrencyDollar className="text-white size-8" />,
  },
}

interface CardProps {
  type: 'income' | 'outcome' | 'default'
  value: number
}

function CardComponent({ type = 'default', value }: CardProps) {
  const backgroundColor = type === 'default' ? 'bg-green-700' : 'bg-gray-600'

  return (
    <div
      className={`flex flex-col p-6 w-[22rem] gap-3 rounded-md ${backgroundColor}`}
    >
      <div className="flex justify-between items-center">
        <p className="text-base text-gray-300">{content[type].text}</p>
        {content[type].icon}
      </div>

      <h1 className="font-bold text-[2rem]/[2.8rem]">
        {priceFormatter.format(value)}
      </h1>
    </div>
  )
}

export const Card = memo(CardComponent)
