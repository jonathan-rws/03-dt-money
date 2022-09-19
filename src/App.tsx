import { ThemeProvider } from 'styled-components'
import { TransactionsContextProvider } from './contexts/TransactionsContext'
import { Transactions } from './Pages/Transactions'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/defaulttTeheme'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <TransactionsContextProvider>
        <Transactions />
      </TransactionsContextProvider>
    </ThemeProvider>
  )
}
