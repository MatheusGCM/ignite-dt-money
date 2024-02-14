import { useCallback, useState } from 'react'

import {
  Card,
  CardTransaction,
  SearchForm,
  SearchFormInput,
} from '../components'
import { useTransactionContext } from '../context/TransactionContext'
import { useSummary } from '../hooks/useSummary'

export function Transactions() {
  const [search, setSearch] = useState('')
  const { transaction } = useTransactionContext()
  const { income, outcome, total } = useSummary()

  const filteredTransaction =
    search !== ''
      ? transaction.filter((transaction) =>
          transaction.description
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase()),
        )
      : transaction

  const handleSearch = useCallback((data: SearchFormInput) => {
    setSearch(data.query)
  }, [])

  return (
    <main className="mt-[-5rem] px-72">
      <div className="flex flex-row gap-8">
        <Card type="income" value={income} />
        <Card type="outcome" value={outcome} />
        <Card type="default" value={total} />
      </div>
      <SearchForm handleSearch={handleSearch} />
      {filteredTransaction.map((item) => {
        return <CardTransaction key={item.id} {...item} />
      })}
    </main>
  )
}
