import styled from 'styled-components'

export const HeaderConteiner = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`
export const HeaderContent = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    height: 50px;
    font-weight: 700;
    background: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme.white};
    padding: 0 1.25rem;
    border-radius: 6px;
    :hover {
      transition: background 0.2s;
      background: ${(props) => props.theme['green-300']};
    }
  }
`
