import { api } from './axios'
import { CreateTransactionProps, TransactionProps } from '../@types/transaction'

class Service {
  async getTransactions(): Promise<TransactionProps[]> {
    const { data } = await api.get('/transactions')
    return data
  }

  async createTransactions(
    body: CreateTransactionProps,
  ): Promise<TransactionProps> {
    const { category, description, price, type } = body
    const { data } = await api.post('/transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    })
    return data
  }
}

export const service = new Service()
