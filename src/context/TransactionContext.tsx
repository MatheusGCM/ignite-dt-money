import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

import { CreateTransactionProps, TransactionProps } from '../@types/transaction'
import { service } from '../service'

interface TransactionContextProps {
  transaction: TransactionProps[]
  createNewTransaction(data: CreateTransactionProps): Promise<void>
}

interface TransactionContextProviderProps {
  children: ReactNode
}

const TransactionContext = createContext({} as TransactionContextProps)

function TransactionContextProvider({
  children,
}: TransactionContextProviderProps) {
  const [transaction, setTransaction] = useState<TransactionProps[]>([])

  async function getTransactions() {
    const data = await service.getTransactions()
    setTransaction(data)
  }

  async function createNewTransaction(data: CreateTransactionProps) {
    const response = await service.createTransactions(data)
    setTransaction((state) => [...state, response])
  }

  useEffect(() => {
    getTransactions()
  }, [])
  return (
    <TransactionContext.Provider value={{ transaction, createNewTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}

const useTransactionContext = () => useContext(TransactionContext)

export { useTransactionContext, TransactionContextProvider }
