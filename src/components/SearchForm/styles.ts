import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  input {
    padding: 1rem;
    border: 0;
    border-radius: 6px;
    flex: 1;
    height: 54px;
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    ::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }
  button {
    height: 54px;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['green-700']};
    color: ${(props) => props.theme['green-700']};
    background: transparent;
    font-weight: 700;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    :hover {
      transition: color 0.2s;
      transition: background 0.2s;
      background: ${(props) => props.theme['green-300']};
      color: ${(props) => props.theme.white};
    }
  }
`
