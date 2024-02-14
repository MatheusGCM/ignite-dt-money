import { ArrowCircleUp, ArrowCircleDown } from '@phosphor-icons/react'
import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: 'income' | 'outcome'
  isSelected: boolean
}

export const RadioInput = forwardRef<HTMLInputElement, InputProps>(
  ({ isSelected, type, ...rest }, ref) => {
    const isIncome = type === 'income'
    const textColor = isSelected ? 'text-white' : 'text-gray-300'

    const backgroundColor = isSelected
      ? isIncome
        ? 'bg-green-700'
        : 'bg-red-500 '
      : 'bg-gray-700 hover:bg-gray-600 '

    const iconColor = isSelected
      ? 'text-white'
      : isIncome
        ? 'text-green-300'
        : 'text-red-300'

    return (
      <label
        className={`flex justify-center items-center px-6 py-4 w-full gap-2 rounded-md focus:bg-green-700 cursor-pointer ${backgroundColor}`}
      >
        <input
          ref={ref}
          type="radio"
          value={type}
          className="hidden"
          {...rest}
        />
        {isIncome ? (
          <ArrowCircleUp className={`size-8 ${iconColor}`} />
        ) : (
          <ArrowCircleDown className={`size-8 ${iconColor}`} />
        )}
        <span className={textColor}>{isIncome ? 'Entrada' : 'Saída'}</span>
      </label>
    )
  },
)
