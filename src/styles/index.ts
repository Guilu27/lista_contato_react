import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'
import { Link } from 'react-router-dom'

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
    height: 100vh;
  }
`
export const Container = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  padding: 16px;
`

export const TituloPagina = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 40px;
`

export const Botao = styled.button`
  padding: 8px;
  border-radius: 8px;
  border: none;
  background-color: ${variaveis.azul3};
  color: ${variaveis.branco};
  cursor: pointer;
`

export const Campo = styled.input`
  width: 100%;
  padding: 8px;
  margin: 0 auto;
  margin-bottom: 40px;
  border-radius: 16px;
  border: none;
  background: transparent;
  color: ${variaveis.branco};
  border: 2px solid ${variaveis.azul3};

  border-radius: 50px;

  &::placeholder {
    color: ${variaveis.cinza};
  }

  &:focus {
    outline: none;
    border: 2px solid ${variaveis.azul3};
    box-shadow: 0 0 5px ${variaveis.branco};
  }
`

export const BotaoFixo = styled(Link)`
  height: 64px;
  width: 64px;
  background-color: ${variaveis.azul3};
  color: ${variaveis.branco};
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-decoration: none;
`

export const FotoContato = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 8px;
  border: 5px solid ${variaveis.azul1};
`

export default EstiloGlobal
