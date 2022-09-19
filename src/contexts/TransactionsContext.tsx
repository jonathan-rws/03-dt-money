import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../services/api'

interface Transaction {
  id: number
  description: string
  price: number
  type: 'income' | 'outcome'
  category: string
  createdAt: string
}

interface CreateTransactionInput {
  category: string
  description: string
  price: number
  type: 'income' | 'outcome'
}

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createNewTransaction: (data: CreateTransactionInput) => Promise<void>
}

interface ContexProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsContextProvider({ children }: ContexProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const createNewTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      const { category, description, price, type } = data
      const response = await api.post('transactions', {
        category,
        description,
        price,
        type,
        createdAt: new Date().toISOString(),
      })
      setTransactions((state) => [response.data, ...state])
    },
    [],
  )

  const fetchTransactions = useCallback(async (query?: string) => {
    const { data } = await api.get('/transactions', {
      params: {
        _order: 'desc',
        _sort: 'createdAt',
        q: query,
      },
    })
    setTransactions(data)
  }, [])

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createNewTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
