import { SummaryCard, SummaryContainer } from './styles'
import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyCircleDollar,
} from 'phosphor-react'

import { useSummary } from '../../hooks/useSummary'
import { priceFormater } from '../../utils/formater'
export function Summary() {
  const summary = useSummary()
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong> {priceFormater.format(summary?.income / 100)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>{priceFormater.format(summary?.outcome / 100)}</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyCircleDollar size={32} color="#FFFFFF" />
        </header>
        <strong>{priceFormater.format(summary?.total / 100)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
