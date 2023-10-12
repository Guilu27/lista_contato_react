import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const BarraDePesquisa = styled.input`
  width: 100%;
  padding: 8px;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
  border-radius: 16px;
  border: none;
  background: transparent;

  border-radius: 50px;
  box-shadow: 0px 0px 5.4px rgba(0, 0, 0, 0.017),
    0px 0px 11.9px rgba(0, 0, 0, 0.025), 0px 0px 20.6px rgba(0, 0, 0, 0.033),
    0px 0px 34px rgba(0, 0, 0, 0.047), 0px 0px 58px rgba(0, 0, 0, 0.079),
    0px 0px 115px rgba(0, 0, 0, 0.2);
  &::placeholder {
    color: ${variaveis.cinza};
  }
`
