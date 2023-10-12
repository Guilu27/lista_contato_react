import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const CardContent = styled.div`
  background-color: ${variaveis.azul2};
  padding: 16px;
  position: relative;

  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);
`
export const FotoContato = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 8px;
`

export const Infos = styled.div`
  border-top: 2px solid ${variaveis.azul1};
`
export const Nome = styled.h3`
  margin: 8px 0;
  font-size: 20px;
`

export const Info = styled.p`
  margin-top: 8px;
  font-size: 16px;
  color: ${variaveis.cinza};

  width: 100%;
  max-width: calc(85vw - 32px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
