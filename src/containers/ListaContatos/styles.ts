import styled from 'styled-components'

export const HeaderLista = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Lista = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 24px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
