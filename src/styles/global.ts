import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
 
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  } 
  :focus{
    outline: 0;
    box-shadow:  0 0 4px ${(props) => props.theme['green-500']};
  }
  body{
    background: ${(props) => props.theme['gray-800']};
    color: ${(props) => props.theme['gray-100']};
    webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button{
    font: 400 1rem Roboto, sans-serif;
  }
  button{
    border: none;
    cursor: pointer;
  }
 `
