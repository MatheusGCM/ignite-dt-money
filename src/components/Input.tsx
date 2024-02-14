import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ ...rest }, ref) => {
    return (
      <input
        ref={ref}
        className="flex-1 rounded-md border border-gray-900 bg-gray-900 p-4 text-base text-gray-300 placeholder:text-gray-500 outline-none focus:border-green-300"
        {...rest}
      />
    )
  },
)
