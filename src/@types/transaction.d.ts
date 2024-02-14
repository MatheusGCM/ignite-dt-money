export interface TransactionProps {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

export interface CreateTransactionProps {
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
}
