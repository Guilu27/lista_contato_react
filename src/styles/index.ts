import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    list-style: none;
  }

  body{
    background-color: ${variaveis.azul1};
    color: ${variaveis.branco};
  }
`
export const Container = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  padding: 16px;
`

export default EstiloGlobal
