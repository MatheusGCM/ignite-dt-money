import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Input } from '.'

const searchSchema = z.object({
  query: z.string().min(1),
})

export type SearchFormInput = z.infer<typeof searchSchema>

interface SearchFormProps {
  handleSearch: (data: SearchFormInput) => void
}

export function SearchForm({ handleSearch }: SearchFormProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchSchema),
  })

  return (
    <form
      className="flex gap-4 mt-10 mb-6"
      onSubmit={handleSubmit(handleSearch)}
    >
      <Input
        type="text"
        placeholder="Busque uma transação"
        required
        {...register('query')}
      />
      <button
        disabled={isSubmitting}
        type="submit"
        className="flex flex-row items-center px-8 py-[0.875rem] rounded-md bg-gray-800 text-green-300 border border-green-300 gap-3 outline-none hover:bg-green-500 hover:text-white hover:border-green-500 duration-300"
      >
        <MagnifyingGlass className="size-5" />
        <span className="text-base font-bold">Buscar</span>
      </button>
    </form>
  )
}
