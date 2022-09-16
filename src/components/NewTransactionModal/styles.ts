import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: #00000075;
`
export const Content = styled(Dialog.Content)`
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
  }
`
export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  width: 2rem;
  height: 2rem;
  color: ${(Props) => Props.theme['gray-100']};
  background: transparent;
`
