import { zodResolver } from '@hookform/resolvers/zod'
import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Input } from '.'
import { RadioInput } from './RadioInput'
import { useTransactionContext } from '../context/TransactionContext'

const newTransactionFormSchema = z.object({
  description: z.string().min(1),
  price: z.number().min(1),
  category: z.string().min(1),
  type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const { createNewTransaction } = useTransactionContext()
  const {
    reset,
    watch,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  const selectedType = watch('type')

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    await createNewTransaction(data)
    reset()
  }
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-[rgba(0,0,0,0.75)] fixed inset-0" />
      <Dialog.Content className="fixed top-1/2 left-1/2 z-10 translate-x-[-50%] translate-y-[-50%] min-w-[32rem] bg-gray-800 px-12 py-10 rounded-md">
        <Dialog.Close className="absolute top-6 right-6 outline-none">
          <X className="size-6" />
        </Dialog.Close>
        <Dialog.Title className="font-bold text-2xl mb-8">
          Nova Transação
        </Dialog.Title>

        <form
          className="flex flex-col gap-10"
          onSubmit={handleSubmit(handleCreateNewTransaction)}
        >
          <div className="flex flex-col gap-4">
            <Input
              type="text"
              placeholder="Descrição"
              required
              {...register('description')}
            />
            <Input
              type="number"
              placeholder="Preço"
              required
              {...register('price', { valueAsNumber: true })}
            />
            <Input
              type="text"
              placeholder="Categoria"
              required
              {...register('category')}
            />
            <div className="flex gap-4">
              <RadioInput
                type="income"
                isSelected={selectedType === 'income'}
                required
                {...register('type')}
              />
              <RadioInput
                type="outcome"
                isSelected={selectedType === 'outcome'}
                required
                {...register('type')}
              />
            </div>
          </div>
          <button
            className="flex justify-center gap-1 px-8 py-4 rounded-md bg-green-500 text-base font-bold text-white hover:bg-green-300 duration-300 outline-none"
            type="submit"
            disabled={isSubmitting}
          >
            {/* <div className="animate-spin size-3 border-[10px] border-white border-dotted rounded-full" /> */}
            Cadastrar
          </button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
