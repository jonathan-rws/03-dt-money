import { ThemeProvider } from 'styled-components'
import { Transactions } from './Pages/Transactions'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/defaulttTeheme'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Transactions />
    </ThemeProvider>
  )
}
