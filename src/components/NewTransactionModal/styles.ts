import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: #00000075;
`
export const Content = styled(Dialog.Content)`
  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme['gray-800']};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    input {
      padding: 1rem;
      border: 0;
      border-radius: 6px;
      height: 54px;
      background: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-300']};
      ::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }
    }
    button[type='submit'] {
      height: 58px;
      font-weight: 700;
      background: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      padding: 0 1.25rem;
      border-radius: 6px;
      &:disabled {
        cursor: not-allowed;
        svg {
          animation: spinner 2.5s linear infinite;
        }
      }
      :hover {
        transition: background 0.2s;
        background: ${(props) => props.theme['green-300']};
      }
    }
  }
`
export const CloseButton = styled(Dialog.Close)`
  line-height: 0;
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  width: 2rem;
  height: 2rem;
  color: ${(Props) => Props.theme['gray-100']};
  background: transparent;
`
export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`

export const TypeButton = styled(RadioGroup.Item)`
  height: 58px;
  font-weight: 700;
  background: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme['gray-100']};
  padding: 0 1.25rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  :hover {
    transition: background 0.2s;
    background: ${(props) => props.theme['gray-600']};
  }
  svg {
    color: ${(props) =>
      props.value === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }
  &[data-state='checked'] {
    background: ${(props) =>
      props.value === 'income'
        ? props.theme['green-700']
        : props.theme['red-500']};
    svg {
      color: ${(props) => props.theme['gray-100']};
    }
  }
`
