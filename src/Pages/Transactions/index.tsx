import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import { Price, TransactionsContainer, TransactionTable } from './styles'

export function Transactions() {
  return (
    <>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <Price variant="income">R$ 12.000,00 </Price>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Carro</td>
              <td>
                <Price variant="outcome">R$ 2.000,00 </Price>
              </td>
              <td>Compra</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Carro</td>
              <td>
                <Price variant="outcome">R$ 2.000,00 </Price>
              </td>
              <td>Compra</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Carro</td>
              <td>
                <Price variant="outcome">R$ 2.000,00 </Price>
              </td>
              <td>Compra</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Carro</td>
              <td>
                <Price variant="outcome">R$ 2.000,00 </Price>
              </td>
              <td>Compra</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Carro</td>
              <td>
                <Price variant="outcome">R$ 2.000,00 </Price>
              </td>
              <td>Compra</td>
              <td>13/04/2022</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionsContainer>
    </>
  )
}
