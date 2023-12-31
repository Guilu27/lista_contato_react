import styled from 'styled-components'
import { Campo } from '../../styles'
import variaveis from '../../styles/variaveis'

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: calc(100vh - 32px);
`

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  text-align: center;
  background-color: ${variaveis.azul2};
  padding: 16px;
  border-radius: 16px;

  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);
`

export const CampoForm = styled(Campo)`
  margin-bottom: 16px;
  margin-top: 0;
`
export const BotaoUpload = styled.label`
  display: block;
  text-align: left;
  font-size: 14px;
  width: 100%;
  padding: 8px;
  margin: 0 auto;
  margin-bottom: 16px;
  border-radius: 16px;
  border: none;
  background: transparent;
  color: ${variaveis.cinza};
  border: 2px solid ${variaveis.azul3};
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    background-color: ${variaveis.azul3};
    color: ${variaveis.branco};
  }
`
