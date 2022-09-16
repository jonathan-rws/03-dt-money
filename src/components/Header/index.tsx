import { HeaderConteiner, HeaderContent } from './styles'

import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderConteiner>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <button>Nova transação</button>
      </HeaderContent>
    </HeaderConteiner>
  )
}
