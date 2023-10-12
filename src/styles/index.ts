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
    background: linear-gradient(90deg, #193849, #19384a, #1a394b, #1a3b4d, #1b3d50, #1c3f52, #1d4255, #1f4458, #20465b, #20475d, #21495e, #21495f);
    color: ${variaveis.branco};
  }
`
export const Container = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  padding: 16px;
`
export const Botao = styled.button`
  padding: 8px;
  border-radius: 8px;
  border: none;
  background-color: ${variaveis.azul3};
  color: ${variaveis.branco};
  cursor: pointer;
`

export default EstiloGlobal
