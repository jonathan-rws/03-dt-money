import { MagnifyingGlass, Spinner } from 'phosphor-react'
import { SearchFormContainer } from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

const searchFormSchema = zod.object({
  query: zod.string().min(3),
})

type SeatchFormInputs = zod.infer<typeof searchFormSchema>

export function SearchForm() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => context.fetchTransactions,
  )
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SeatchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchSubmit(data: SeatchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchSubmit)}>
      <input
        type="text"
        placeholder="Busque uma transação"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <Spinner size={26} />
        ) : (
          <>
            <MagnifyingGlass size={20} />
            Buscar
          </>
        )}
      </button>
    </SearchFormContainer>
  )
}
