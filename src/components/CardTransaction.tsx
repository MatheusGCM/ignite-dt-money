import { dateFormatter, priceFormatter } from '../utils/formatter'

interface CardTransactionProps {
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}
export function CardTransaction({
  description,
  type,
  price,
  category,
  createdAt,
}: CardTransactionProps) {
  const income = type === 'income'
  const textColor = income ? 'text-green-300' : 'text-red-300'
  return (
    <div className="grid grid-cols-6 bg-gray-700 text-gray-300 px-8 py-5 rounded-[0.3125rem] mb-2">
      <span className="col-span-3">{description}</span>
      <span className={`${textColor}`}>
        {!income && '- '}
        {priceFormatter.format(price)}
      </span>
      <span>{category}</span>
      <span className="text-right">
        {dateFormatter.format(new Date(createdAt))}
      </span>
    </div>
  )
}
