import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  display: flex;
  gap: 1rem;
  input {
    padding: 1rem;
    border: 0;
    border-radius: 6px;
    flex: 1;
    height: 58px;
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    ::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }
  button {
    height: 58px;
    width: 10rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['green-700']};
    color: ${(props) => props.theme['green-700']};
    background: transparent;
    font-weight: 700;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    &:not(:disabled):hover {
      transition: color 0.2s;
      transition: background 0.2s;
      background: ${(props) => props.theme['green-300']};
      color: ${(props) => props.theme.white};
    }
    &:disabled {
      cursor: not-allowed;
      svg {
        animation: spinner 2.5s linear infinite;
      }
    }
  }
`
