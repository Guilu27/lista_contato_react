import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

const etilosCompartilhadosTextarea = `
  margin-bottom: 8px;
  font-size: 20px;
  resize: none;
  border: none;
  background-color: transparent;
  color: ${variaveis.branco};
  font-weight: bold;
  display: flex;
  width: 100%;

  &:enabled {
    border: 2px solid ${variaveis.azul3};
    outline: none;
  }

  &:focus {
    box-shadow: 0 0 5px ${variaveis.branco};
  }
`

export const CardContent = styled.div`
  background-color: ${variaveis.azul2};
  padding: 16px;
  position: relative;
  border-radius: 16px;

  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);
`

export const Infos = styled.div`
  border-top: 2px solid ${variaveis.azul1};
`

export const Nome = styled.div`
  margin-top: 8px;

  textarea {
    ${etilosCompartilhadosTextarea}
    height: 24px;
  }
`

export const Info = styled.div`
  margin-top: 16px;
  color: ${variaveis.cinza};

  textarea {
    ${etilosCompartilhadosTextarea}
    height: 18px;
    font-size: 16px;
    color: ${variaveis.cinza};
  }
`

export const Icons = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;

  img {
    width: 24px;
    height: 24px;
    margin-left: 16px;
    cursor: pointer;
  }
`

export const ContainerFotoContato = styled.div`
  position: relative;
  width: 120px;
`

export const IconeEdicaoFotoContato = styled.label`
  position: absolute;
  bottom: 8px;
  right: 0;

  img {
    width: 24px;
    height: 24px;
    margin-left: 16px;
    cursor: pointer;
  }
`
